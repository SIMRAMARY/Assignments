const User = require("../models/Schema")

const AddUser = async (req, res) => {
    try {
        const { name, age, email, password, city } = req.body
        const details = await User.findOne({ name: name })
        if (details) {
            return res.send({ msg: "Hey! We already have your name", details })
        }
        const createUser = await User.create({ name, age, email, password, city })
        res.send({ msg: "Hello! You are now in my database!", createUser })
    } catch (error) {
        console.log(error)
        res.send({ msg: "Sorry! It's not your fault", error })
    }
}

const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id
        const { name, age, email, password, city} = req.body
        const update = await User.findByIdAndUpdate(id, { name, age, city, email, password, city})
        res.status(200).send({ msg: "Your Details are Updated", update })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "Sorry! It's not your fault", error })
    }
}

const GetUser = async (req, res) => {
    try {
        const datas = await User.find()
        res.status(200).send({ msg: "These are your details", datas })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "Sorry! It's not your fault", error })
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id

        await User.findByIdAndDelete(id)
        res.status(200).send({ msg: "Your Details are Deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "Sorry! It's not your fault", error })
    }
}

const MyController = { AddUser, UpdateUser, GetUser, deleteUser }
module.exports = MyController