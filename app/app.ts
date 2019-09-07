import generator from './agent/generator'
import io from 'socket.io-client'

const socket = io('http://localhost:8000');
let interval:any;

socket.on('connected', () => {
    console.log('connected');
    interval = setInterval(async() => {
        let data = await generator();
        socket.emit('request', data);
    }, 2000);
});
socket.on('disconnect', () => {
    clearInterval(interval);
    setTimeout(() => {
        socket.disconnect();
        socket.open();
    }, 1000);
    console.log('disconnected');
});
socket.on('connect_error', (err: any) => {
    console.log(err);
    setTimeout(() => {
        socket.disconnect();
        socket.open();
    }, 2000);
});

