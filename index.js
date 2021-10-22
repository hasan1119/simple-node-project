// import package
const express = require('express')


// initialize package
const app = express()
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world!')
})



// listening method
app.listen(port, () => {
    console.log('listening from port', 3000);
})