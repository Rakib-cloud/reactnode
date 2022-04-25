const express = require('express')
var cors = require('cors');
const app = express()
const port =process.env.port || 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World ok buy!')
})
//user create with array
const users=[
  {id:'1',name:'rakib',job:'antt'},
  {id:'2',name:'samia',job:'antt1'},
  {id:'3',name:'solaiman',job:'antt2'},
  {id:'4',name:'rohim',job:'antt3'},
  {id:'5',name:'samsu',job:'antt4'}
]
//api create 
app.get('/users', (req, res) => {
  console.log('query',req.query);
  if(req.query.name){
     const search=req.query.name.toLowerCase();
     const matched=users.filter(user=> user.name.toLowerCase().includes(search));
     res.send(matched);
  }
  else{

  }
  res.send(users);
})

//user total info

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id=req.params.id;
  const user=users[id];
  res.send(user);
})

//post a data 

app.post('/user', (req, res) => {
  console.log(req.body);
   const user=req.body;
   user.id=users.length+1;
   users.push=(user);
   res.send(user);
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})