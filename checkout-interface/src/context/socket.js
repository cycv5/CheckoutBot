import socketio from "socket.io-client";
import * as React from 'react';

const ENDPOINT = 'http://localhost:5000';
export const socket = socketio.connect(ENDPOINT);