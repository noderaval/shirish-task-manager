require('../src/db/mongoose.js')
const User = require('../src/models/user')

//5d7a32837f114a201ca88d04
// User.findByIdAndUpdate('5d7a32837f114a201ca88d04', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5d7a32837f114a201ca88d04', 28).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})