from ultralytics import YOLO
import os

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL = os.path.join(ROOT_DIR, 'YOLO_Custom_v8m.pt') 
TEST = os.path.join(ROOT_DIR, 'test')
model = YOLO(MODEL)
# model.predict(source=0, save=True, conf = 0.37, show = True)  # source=0 for capture from webcam/camera. Change value to the desired camera.
model.predict(source=0, save=True, conf = 0.37, show = True)  # use this line if you want