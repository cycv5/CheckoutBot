from flask import Flask, request
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS
from database import get_item_from_barcode

""" from gevent.pywsgi import WSGIServer
from geventwebsocket.handler import WebSocketHandler """

# Flask Server Initialization 
app = Flask(__name__)

# Flask app config
app.config['SECRET_KEY'] = 'secret'
app.config['DEBUG'] = True
app.config['CORS_HEADERS'] = 'Content-Type'

# Adding CORS to flask App
CORS(app, resources={r"/*": {"origins": "*"}})

# Connection Socket -- Flask // and adding cors origins
socketio = SocketIO(app, cors_allowed_origins='*')

# Connections Event
@socketio.on('connect')
def connection():
    print('New Client connected!')

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

# Client Event
@app.route('/new-item', methods=[ 'POST'])
def handleNewClient():
    item = request.get_json(force=True)
    barcode= item.get("barcode")
    id= item.get("id")
    obj_class= item.get("class")
    location= item.get("location")


    print('New item scanned: ', item, barcode, id, obj_class, location )
    item =  get_item_from_barcode(barcode)[0]
    print(item)
    socketio.emit('new_item_scanned',{"barcode":item[0], "name": item[1], "price": item[2], "tax": item[3]}, broadcast = True)
    return "Done"


# Default Error Event
@socketio.on_error_default  
def default_error_handler(e):
    print('An error occurred: ')
    print(e)

# Error Event
@socketio.on_error  
def error_handler(e):
    print('An error occurred: ')
    print(e)

# Running server
if __name__ == '__main__':
    socketio.run(app)
    """ 
    http_server = WSGIServer(('',5000), app, handler_class=WebSocketHandler)
    http_server.serve_forever() 
    """