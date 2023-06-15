# Checkout Bot

The Checkout Bot project interfaces a machine vision camera, a SCARA robot, arduino control code, a python backend server, SQLite3 database and a React frontend to implement a proof-of-concept automated checkout robot.

## How to Run
// Instructions for booting up camera and vision software

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
The backend for Checkout bot uses the Flask framework along with socket.io. It serves the following purposes:
- Receive information on new items scanned by vision system via POST requests
- Query the Sqlite3 database to find matching barcodes or object classes
- Sends information on the item scanned to the React frontend via websockets
- Sends coordinate information received from vision to the arduino control system

## Frontend
The frontend of Checkout Bot is written in ReactJS, using the free MaterialUI component library. It uses socketio to listen for any new items scanned from the backend. The Dashboard consists of:
- a table where newly scanned items are populated
- A bill total section which keeps track of the total tax and bill amount
- delete functionality for items which have already been scanned


## Database
Checkout Bot uses a SQLite3 database that is stored in the backend folder as checkoutdb.db. The database content can be manipulated through python code (see database.py for sample DB connection) or (Recommended) use DBBrowser for SQLite to open the database file and insert/edit rows.

The schema for the 'items' table looks like the following:
- barcode: Integer field containing barcode of the item
- name: Readable name for item
- price: Float for price without tax
- tax: Float for tax added on price
- class: Matching classification type from CoCo dataset
- description: Optional description field
## Vision

## Arduino Control