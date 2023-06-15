# Checkout Bot

The Checkout Bot project interfaces a machine vision camera, a SCARA robot, arduino control code, a python backend server, SQLite3 database and a React frontend to implement a proof-of-concept automated checkout robot.

## How to Run
- Clone the repository on your local device.

- Connect webcam to your computer and run the following commands:
```
pip install -r backend/vision/yolov8_tracking/requirements.txt
python track.py --yolo-weights weights/yolov8s.pt --source <your-camera-slot-number>  // usually between 0-4
```
- Run the backend server in a separate terminal
```
pip install -r requirements.txt
python server.py
```

-  Run the frontend in a separate terminal
```
cd checkout-interface
npm i
npm run start
```
## Backend Server

## Frontend

## Database

## Vision

## Arduino Control
