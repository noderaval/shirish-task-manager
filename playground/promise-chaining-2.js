require('../src/db/mongoose')
const Tasks = require('../src/models/tasks')

//5d7a44ccbb13e31b006410a5
// Tasks.findByIdAndDelete('5d7a44ccbb13e31b006410a5').then((task) => {
//     console.log(task)
//     return Tasks.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskandCount = async (id, completed) => {
    const delet = await Tasks.findByIdAndDelete(id)
    const count = await Tasks.countDocuments({completed})
    return count
}
deleteTaskandCount('5d7a0ab71cc5fb1d3844fdf0', true).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})