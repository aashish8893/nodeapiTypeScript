import express from 'express';

export class Server {

    connection(): void {
        const express = require('express');
        const app = express();
        const port = 3900;

        app.get('/', (req, res) => {
        res.send('Hello World!');
        });

        app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
        });        
    }

    logMessage() {
        console.log('hello world');
      }
}




