const express = require('express')
require('./db/mongoose.js')

const User = require('./models/user.js')
const Task = require('./models/tasks.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    //     // res.send(e)
    // })
})

app.get('/users', async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
    // User.find({}).then((result) => {
    //     res.send(result)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

// by id in url
app.get('/users/:id', async (req, res) => {
    //console.log(req.params)
     const _id = req.params.id
    try {
        const usr = await User.findById(_id)

        if (!usr) {
            return res.status(404).send()
        }

        res.send(usr)
    } catch (e) {
        res.status(500).send()
    }
    
    // User.findById(_id).then((user) => {
    //     if(!_id) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})
app.patch('/users/:id', async (req, res) => {
    const update = Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = update.every((update) => allowUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({Error : 'Invalid updates!!'})
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    
})
// tasks
app.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }

    // Task.find({}).then((task) => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})
// read task by id
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }

    // Task.findById(_id).then((task) => {
    //     if(!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.send(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }


    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})
// update tasks
app.patch('/tasks/:id', async (req, res) => {
    const update = Object.keys(req.body)
    const allowUpdates = ['completed', 'description']
    const isValidOperation = update.every((update) => allowUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({Error: 'Invalid Updates !!'})
    }
    try {
        const taksupdate = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if (!taksupdate) {
            return res.status(400).send()
        }
        res.send(taksupdate)
    } catch (e) {
        res.status(500).send(e)
    }


})
app.listen(port, () => {
    console.log('server is up on port '+port)
})