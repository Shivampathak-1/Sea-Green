import os
import pandas as pd
import PIL.Image
from pathlib import Path
from ultralytics import YOLO
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
path=os.path.join(ROOT_DIR, 'Predict') 
print(ROOT_DIR)
MODEL = os.path.join(ROOT_DIR, 'YOLO_Custom_v8m.pt') 
df=pd.read_csv(os.path.join(ROOT_DIR, 'submit.csv'))
model = YOLO(MODEL)
for i, files in enumerate(os.listdir(path)):
  model.predict(source=f"{path}/{files}", save=True, conf = 0.37)
  filepath = os.path.join(path, files)
  img=PIL.Image.open(filepath)
  exif={
      PIL.ExifTags.TAGS[k]:v
      for k,v in img._getexif().items()
      if k in PIL.ExifTags.TAGS}
  ns=exif['GPSInfo'][2]
  ew=exif['GPSInfo'][4]
  latitude=(float)((((ns[0]*60)+ns[1])*60)+ns[2])/60/60
  longitude=(float)((((ew[0]*60)+ew[1])*60)+ew[2])/60/60
  df.loc[i,'Geo_Tag_URL']=str(latitude)+"°N"+" "+str(longitude)+"°E" 
  df.to_csv(os.path.join(ROOT_DIR, 'submit.csv'),index=False)
