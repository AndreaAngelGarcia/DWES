const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set("strictQuery", false);

async function init() {
    await mongoose.connect('mongodb+srv://andreaangel:keNBbXCyObVmQiJI@cluster0.fdckmc6.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected');

    const userSchema = new Schema({
        name: String,
        age: Number,
    });

    const User = mongoose.model('User', userSchema);

    const userBody = {
        name: "Andrea",
        age: "25"
    }

    const userDoc = new User(userBody);

    const user = await userDoc.save();

    const users = await User.find();

    console.log(user);
}

init();