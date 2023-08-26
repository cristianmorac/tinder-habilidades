const express = require("express");
const cors = require("cors"); 
const sequelize = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: "/api/auth",
      user: "/api/user",
      skill: '/api/skill',
      userId: "/api/user",
      company: "/api/company",
      companyId: "/api/company",
      services: "/api/service"
    };

    // conexión DB
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Rutas de la aplicación
    this.routes();
  }

  async connectDB() {
    /* await sequelize.authenticate(); */
    await sequelize.sync();
    //await sequelize.sync({ force: true });
  }

  

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    this.app.use( express.static('public') );
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/authRoutes"));
    this.app.use(this.paths.user, require("../routes/userRoutes"));
    this.app.use(this.paths.userId, require("../routes/userRoutes"));
    this.app.use(this.paths.skill, require("../routes/skillRoutes"));
    this.app.use(this.paths.company,require('../routes/companyRoutes'));
    this.app.use(this.paths.companyId,require('../routes/companyRoutes'));
    this.app.use(this.paths.services,require('../routes/serviceRoutes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server port listen ", this.port);
    });
  }
}

module.exports = Server;
