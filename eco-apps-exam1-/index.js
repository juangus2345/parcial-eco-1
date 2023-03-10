import express, { request, response } from "express";
import {
    Server
} from "socket.io";


const PORT = 8080
const expressApp = express()
const httpServer = expressApp.listen(PORT, () => {
    console.table({
        'Game': `http://localhost:${PORT}/game`,
        'Controller': `http://localhost:${PORT}/controller`
    })

})
const io = new Server(httpServer, {
    path: '/real-time'
})

expressApp.use('/game', express.static('public-game'))
expressApp.use('/controller', express.static('public-controller'))
expressApp.use(express.json())



app.get('/Pong', (request, response)=>{
    let message = {content: "Ready game"}
    response.send(message);
});



app.post('/Pong', (request, response)=>{
    let {content} = request.body;
    console.log(content);
    response.end();
});

/*___________________________________________

1) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

ioServer.on('connection', (socket) => {
    console.log(socket.id);
    socket.on("instructions-controller", message =>{
        console.log(message);
        socket.broadcast.emit("instructions-game", message);
    });
    socket.on("directions-controller", directionController => {
        console.log(directionController);
        socket.broadcast.emit("directions-game", directionController);
    });
});

let currentScore = 0;

/*___________________________________________

2) Create an endpoint to POST player's current score and print it on console
_____________________________________________ */

expressApp.post('/score', (request, response) => {
   //
})

/*___________________________________________

3) Create an endpoint to GET player's final score and print it on canvas
_____________________________________________ */

expressApp.get('/final-score', (request, response) => {
    //
})