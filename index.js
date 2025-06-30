const express = require('express')
const app = express()
const port = 3200
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/profile',(req, res)=> {
res.send("Welcome from profile !");
});

app.put('/help',(req, res)=> {
  let body = req.body
      console.log(body);
      res.send(body);
  });

app.post('/contact', (req, res)=>{
    let body = req.body
    console.log(body);
    res.send(body);
});

app.put('/abc', (req, res)=>{
    res.send("Hi this is a put method");
})

// app.listen(4500);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
