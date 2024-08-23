const { createUserService } = require('../services/userService')

const createUser = async (req, res) => {
    console.log(">>> check req.body: ", req.body)
    const { name, password, email } = req.body;
    const data = await createUserService(name, password, email)
    return res.status(200).json(data)
}

module.exports = {
    createUser,
}