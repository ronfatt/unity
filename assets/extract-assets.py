"""Reproduce website assets: python3 assets/extract-assets.py /path/to/source/folder
Requires Pillow and Poppler (pdfimages). Originals are retained at native resolution.
No retouching, fabricated detail, or upscaling is performed.
"""
from pathlib import Path
from PIL import Image
import subprocess, tempfile, sys, shutil, json
ROOT=Path(__file__).resolve().parent
SOURCES={'laser':'激光切割彩页.pdf','cnc':'加工中心彩页.pdf','construction':'桥架 穿墙丝.pdf','sheet':'钣金加工彩页 2.pdf'}
# source, embedded image number, descriptive name, maximum web width, optional crop
ASSETS=[
 ('laser',0,'laser-cutting-sparks',1536,None),
 ('laser',13,'laser-cutting-steel',904,None),
 ('laser',6,'fiber-laser-machine',796,None),
 ('laser',9,'laser-cut-steel-components',852,None),
 ('laser',10,'sheet-metal-component-selection',982,None),
 ('cnc',9,'precision-machined-components',1600,None),
 ('cnc',10,'turned-metal-components',1200,None),
 ('construction',5,'cnc-press-brake',1400,None),
 ('construction',7,'cable-tray-channel',1200,None),
 ('construction',9,'water-stop-steel-plates',1000,None),
 ('construction',11,'cable-tray-corner',1200,None),
 ('construction',13,'formed-sheet-metal',1200,None),
 ('construction',19,'threaded-steel-rods',1000,None),
 ('construction',25,'wall-tie-assembly',1000,None),
 ('sheet',2,'sheet-metal-laser-machine',545,(0,0,545,292)),
]
def main(src):
 out=ROOT/'images';(out/'extracted').mkdir(parents=True,exist_ok=True);(out/'web').mkdir(exist_ok=True)
 manifest=[]
 with tempfile.TemporaryDirectory() as t:
  for key,filename in SOURCES.items():
   subprocess.run(['pdfimages','-png',str(src/filename),str(Path(t)/key)],check=True)
  for key,num,name,width,crop in ASSETS:
   original=Path(t)/f'{key}-{num:03}.png'
   shutil.copy2(original,out/'extracted'/f'{name}.png')
   im=Image.open(original).convert('RGB');native=im.size
   # Soft masks belong to the embedded photos; recombine without retouching.
   mask_number = num+1 if key=='construction' or (key=='laser' and num==6) else None
   if mask_number is not None:
    mask_path=Path(t)/f'{key}-{mask_number:03}.png'
    mask=Image.open(mask_path).convert('L')
    shutil.copy2(mask_path,out/'extracted'/f'{name}-mask.png')
    rgba=im.convert('RGBA');rgba.putalpha(mask)
    background=Image.new('RGBA',rgba.size,'white');background.alpha_composite(rgba);im=background.convert('RGB')
   if crop:im=im.crop(crop)
   im.thumbnail((width,10000),Image.Resampling.LANCZOS)
   im.save(out/'web'/f'{name}.webp',quality=84,method=6)
   for size in [480,800]:
    if im.width>size and name!='laser-cutting-sparks':
     small=im.copy();small.thumbnail((size,10000),Image.Resampling.LANCZOS);small.save(out/'web'/f'{name}-{size}.webp',quality=82,method=6)
   manifest.append({'name':name,'source':SOURCES[key],'page':1,'image_index':num,'native':native,'web':im.size,'crop':crop,'soft_mask':mask_number,'bytes':(out/'web'/f'{name}.webp').stat().st_size})
 (ROOT/'image-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
if __name__=='__main__':main(Path(sys.argv[1]))
