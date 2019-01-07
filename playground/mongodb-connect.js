// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID
console.log(obj);

// Database Name


// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
//   assert.equal(null, err);
if(err){
    return console.log('Unable to connect');
}
  console.log("Connected successfully to server");

const db = client.db('TodoApp')

// db.collection('Users').find().count().then((coun) =>{
//   console.log(coun);
//   },(err) =>{
//   console.log('unable to fetch data', err);
//   });

// db.collection('Users').find().toArray().then((docs) =>{
// console.log('Users');
// console.log(JSON.stringify(docs, undefined, 2));
// },(err) =>{
// console.log('unable to fetch data', err);
// });

// db.collection('Users').insertOne({

//   Name:'Nuresh',
//   Age:'32',
//   Location:'Kavadiguda'

// },(err,resul) =>{
// if(err){
//  return console.log('Unable to insert Users', err) 
// } 
// console.log(resul.ops[0]._id.getTimestamp()); 
// }

// );

//   db.collection('Todos').insertOne({
//     text:'Something to do'  
//   }, (err,result)=>{
// if(err){
//    return console.log('UNable to insert todo', err) 
// }
// console.log(JSON.stringify(result.ops, undefined, 2));
//   });

  // client.close();
});

