// CRUD operations create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
// below destruct line is same as above three lines
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)
    // db.collection('users').findOne({_id: new ObjectID("5d68f7c98956401a70304e19")}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch data!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 28}).toArray((error, users) => {
    //     if(error) {
    //         return console.log('Unable to fetch data!')
    //     }
    //     console.log(users)
    // })
    // db.collection('users').find({age: 28}).count((error, count) => {
    //     if(error) {
    //         return console.log('Unable to fetch data!')
    //     }
    //     console.log(count)
    // })
    // db.collection('tasks').findOne({completed: false}, (error, tasks) => {
    //     if(error) {
    //         return console.log('Unable to fetch data')
    //     }
    //     console.log(tasks)
    // })
    //find data and print all data
    // db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
    //     if(error) {
    //         return console.log('Unable to fetch data')
    //     }
        
    //     //console.log(tasks)
    //     tasks.forEach(element => {
    //         console.log(element.description)
    //     });
    // })
    //update data updateone
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5d68f7c98956401a70304e19")
    // }, {
    //     // $set: {
    //     //     name: 'Santosh'
    //     // }
    //     $inc: {
    //         age: -1
    //     }
    // })
    // updatePromise.then((results) => {
    //     console.log(results)
    // }).catch((error) => {
    //     console.log(error)
    // })
    //update data updatemany
    //  db.collection('tasks').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then( (results) => {
    //     console.log(results.modifiedCount)
    // }).catch( (error) => {
    //     console.log(error)
    // })
    //delete 
    db.collection('users').deleteMany({
        age: 28
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
    db.collection('tasks').deleteOne({
        description: 'task one'
    }).then((results) => {
        console.log(results.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
})