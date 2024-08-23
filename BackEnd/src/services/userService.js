const User = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUserService = async (name, password, email) => {
    try {

        const hashpassword = await bcrypt.hash(password, saltRounds);
        let result = await User.create({
            name: name,
            password: hashpassword,
            email: email,
            role: "Web"
        })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}





module.exports = {
    createUserService
}
