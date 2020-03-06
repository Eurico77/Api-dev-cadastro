import express from 'express';
import mongoose from 'mongoose';
import path from 'path'
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://EuricoDev:P3iRN1r4oZ3qm79J@cluster0-6wmj8.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..','uploads'))
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
