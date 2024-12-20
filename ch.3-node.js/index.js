const os = require("os");
console.log(os.homedir())


const hello = require('./hello');
hello.sayHello();


// const { Sequelize, QueryTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:Mppi!3232@localhost:5432/test')

// function createUser(name, email) {
//     return sequelize.query(
//         `INSERT INTO users (name, email) VALUES (:name, :email)`,
//         {
//             replacements: { name, email },
//             type: QueryTypes.INSERT
//         }
//     );
// }

// function getUseres(){
//     return sequelize.query(
//         `SELECT * FROM users`,
//         { type: QueryTypes.SELECT }
//     )
// }

// function deleteUser(id){
//     return sequelize.query(
//         `DELETE FROM users WHERE id=${id}`,
//         { type: QueryTypes.DELETE }
//     )
// }

// async function main() {
//     await createUser('wessam','wessam33');
//     const users = await getUseres();
//     console.log(users);
//     // await deleteUser(1);
// }

// main();

const { Sequelize, QueryTypes, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:Mppi!3232@localhost:5432/test')

// using module to edit users
const User = sequelize.define(
    'User',
    {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
    },
    {
        // table name 
        tableName: 'users',
        // if you want to have timestamps or not
        timestamps: false
    }
);

async function main() {
    // check all contents
    let user = await User.findAll();

    // check a single content with primary key
    user = await User.findByPk(1);

    // create new user
    user = new User({ name: 'John Doe', email: 'john.doe@example.com' });
    await user.save();

    // change data
    await User.update({ name: 'Jane Doe' }, { where: { id: 1 } });

    // delete data
    await User.destroy({ where: { id: 3 } });

    console.log(user);
}

// main();

const mongoose = require('mongoose');

mose().catch(err => console.log(err));

async function mose() {
    //connect to Mongoose 
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    // adding file to database test 
    const Cat = mongoose.model('Cat', { name: String, age: Number });

    // create new item
    const kitty = new Cat({ name: 'steve', age: 24 });

    // save the item to the database
    kitty.save().then(() => console.log("meow"));

    // finding item in file with id 
    const id = '67647310ee6c4608c2af8751';
    const finding = await Cat.findOne({ _id: id });

    // by name 
    // const finding = await Cat.findOne({ name : "steve" });

    // full list
    // const finding = await Cat.find();

    // Finding a name with a condition
    // const finding = await Cat.find({
    //     age : {
    //         $gt : 20
    //     }
    // });
    // Then we can put some changes for the condition
    finding.age = 2222;

    // update one value
    await Cat.updateOne({ _id: id, name: 'bob' });

    // update multiple values
    await Cat.updateMany({
        age: {
            $lt: 20
        }
    }, { age: 233 });

    // to delete we can use deleteOne and deleteMany

    await finding.save().then(() => console.log(finding));
}
mose();