1. creat folder with 2 sub folders - server - frontend
2. in server folder add npm init
3. in server npm i express
4. create app.js add

```js
const express = require("express");

const app = express();

app.listen(PORT, () => {
  console.log("listening on port 4000");
});
```

5. add .env file and npm i dotenv

```js
const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => {
  console.log("listening on port " + port);
});
```

6. for testing in local mode use nodemon npm i nodemon and in package.json add

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon ./app.js" //this
  },
```

7. add routes

   1. add routes folder and index.js inside
   2. add this to index.js so we can routs file

   ```js
   const express = require("express");

   const router = express.Router();

   router.get("/", function (req, res) {
     res.json({ messag: "Hello, world!" });
   });

   module.exports = router;
   ```

   3. add routes to app.js

   ```js
   const routes = require("./routes");
   app.use("/", routes);
   ```

   4. send get request from postman to http://localhost:4000/

8. Middlewares

   1. all middlewares going to app.js firt npm i morgan cors body-parser
   2. use morgan to get response type in terminal and cors to make response look safe for other requests

   ```js
   const morgan = require("morgan");
   const cors = require("cors");
   app.use(morgan("dev")); // use morgan only for development mode
   app.use(cors()); // use cors to make requests not dungeons
   ```

   3. Body-parser is a crucial middleware in Express.js that allows you to access and process data sent in the body of HTTP requests, such as form inputs, JSON payloads, or raw data, enabling you to perform actions like creating new users, updating records, or handling other data-related operations within your application.

   ```js
   const bodyParser = require("body-parser");
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json()); // parse JSON requests
   ```

   then use it to show errors

9. make database and connect

   1. After creating the postgres database we connect with using sequelize
      npm i sequelize
      npm install pg pg-hstore
   2. in models/database.js connect to the database

   ```js
   const { Sequelize } = require("sequelize");

   const db = new Sequelize(
     // getting variables from .env
     process.env.DB_NAME,
     process.env.DB_USER,
     process.env.DB_PASS,
     {
       host: "localhost",
       dialect: "postgres",
     }
   );

   db.authenticate()
     .then(() => {
       console.log("Authentication successful");
     })
     .catch(() => {
       console.log("Authentication failed");
     });

   module.exports = db;
   ```

   3. in app.js

   ```js
   const db = require("./models/database");
   db.sync().then(() => {
     app.listen(port, () => {
       console.log("listening on port " + port);
     });
   });
   ```

10. making models for User and Profile

    1. make models for User and Profile
    2. profile need to connect to User so every user have profile
    3. make user have hasone connection to profile
    4. make every profile belongs to user
    5. connect them in one file (index.js)

    ```js
    // --------------------------------
    // user
    // --------------------------------
    const { Sequelize } = require("sequelize");
    const db = require("./models/database");

    // add user model
    const User = db.define("user", {
      name: {
        type: Sequelize.DataTypes.STRING,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
      },
      userType: {
        type: Sequelize.DataTypes.ENUM("supplier", "client"), // means the option of the type
      },
      latitude: {
        type: Sequelize.DataTypes.FLOAT,
      },
      longitude: {
        type: Sequelize.DataTypes.FLOAT,
      },
    });

    // make every ueser have one profile
    User.associate = (models) => {
      User.hasOne(models.Profile);
    };

    module.exports = User;

    // --------------------------------
    // profile
    // --------------------------------
    const { Sequelize } = require("sequelize");
    const db = require("./database");

    const Profile = db.define("profile", {
      specialization: {
        type: Sequelize.DataTypes.STRING,
      },
      address: {
        type: Sequelize.DataTypes.STRING,
      },
      workingHours: {
        type: Sequelize.DataTypes.STRING,
      },
      phone: {
        type: Sequelize.DataTypes.STRING,
      },
    });

    // every profile belongs to user
    Profile.associate = (models) => {
      Profile.belongsTo(models.User);
    };

    module.exports = Profile;
    // --------------------------------
    // index for connections
    // --------------------------------
    const { Sequelize } = require('sequelize');
    const db = require('./database');
    const User = require('./users');
    const Profile = require('./profile')


    const models = {
        User: User,
        Profile: Profile
    }

    Object.keys(models).forEach(key => {
        if('associate' in models[key]) {
            models[key].associate(models)
        }
    })

    module.exports = models;
    ```
