require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitHub={
  name : String,
  number: Number,
  correct: Boolean,
  job: null,


}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('Hritik')
})
 
app.get('/login', (req,res)=>{
    res.send('<h1>login</h1>')
})

app.get('/github',(req,res)=>{
  res.send(gitHub)
})

app.get('/youtube', (req, res) =>{
    res.send("<h2>youtoob</h2>")
} )
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



