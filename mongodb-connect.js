const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db("JinksDB");

    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    // console.log('Connected to mongodb Server!!');
    // db.collection('MyTestingApp').insertOne({
    //     taskName: 'Get Some Food',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         console.log('There was an issue when inserting data!')
    //     }
    // })
    
    // db.collection('MyTestingApp').insertMany([{
    //     taskName: 'Get Some Food',
    //     completed: true
    // }, {
    // taskName: 'Get Some Food 2',
    // completed: false
    // },{
    // taskName: 'Get Some Food 3',
    // completed: false
    // },{
    // taskName: 'Get Some Food 4',
    // completed: false
    // },{
    // taskName: 'Get Some Food 5',
    // completed: false
    // }],(err, result) => {
    //         if(err){
    //             console.log('There was an issue when inserting data!')
    //         }
    //     })

    //delete
    //deleteOne 
    // db.collection('MyTestingApp').deleteOne({taskName: "Get Some Food"}).then((result) =>{
    //     console.log(result);
    // })

    //deletemany
    // db.collection('MyTestingApp').deleteMany({taskName: "Get Some Food 2"}, {taskName: "Get Some Food 3"}).then((result) =>{
    //     console.log(result);
    // })

    //update
    db.collection('MyTestingApp').updateOne({taskName: "Get Some Food 4"},{
        $set: {
            completed: true
        }
    
   
}).then((result) => {
    console.log(result);
});

client.close();
})