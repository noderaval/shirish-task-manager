const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})





// const me = new User({
//     name: '      dummy',
//     email: '         dummy@Gmail.cOm                ',
//     age: 28,
//     password: '12345password'
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!',error)
// })
//
// const task = new Tasks({
//      description: 'Task three description',
//      completed: true
// })
// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)  
// })