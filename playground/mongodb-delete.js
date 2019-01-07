const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) =>{

if(err){
 return console.log('Unable to connect');   
}
console.log('Successfully connected to server')

const db = client.db('TodoApp');

db.collection('Users').findOneAndDelete({Name:'Suresh'}).then((result) =>{
console.log(result);    
})

// db.collection('Users').deleteMany({Name: 'Nuresh'}).then((result) =>{
//  console.log(result);   
// });

// db.collection('Users').deleteOne({Name:'Suresh'}).then((result)=>{
//  console.log(result);   
// })

})