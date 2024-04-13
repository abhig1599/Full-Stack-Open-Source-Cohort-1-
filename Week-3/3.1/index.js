
const express = require('express')
const app = express()
const port = 3000
const fs =require('fs')


function loopwala (n){
    let a=0 
    for (let i = 0; i <= n; i++) {
        a = a+i;
        console.log(a)
        
    }
}

function callback(err,data){
    console.log(data)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("from get part")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log("it is lissiner")
    loopwala(20)
    fs.readFile("a.txt","utf-8",callback)

})