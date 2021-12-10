const express = require('express')
const cors = require('cors')
const app = express()
const port = 1234
let almacenarArr = []

//#region 
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json({
    type: "*/*"
}))

app.use(cors());
//#endregion

//cuando se haga el get http://localhost:1234/almacenar
app.get('/almacenar', (req,res) => {
    res.send(JSON.stringify(almacenarArr));
})

//cuando se haga el post http://localhost:1234/almacenar
app.post('/almacenar', (req,res) => {
    let almacenar = req.body;
    almacenarArr.push(almacenar)
    res.send(JSON.stringify("Guardado"));
    console.log(almacenarArr);
})

app.listen(port, () =>{
    console.log(`Ejecucion en el puerto http://localhost:${port}`)
})