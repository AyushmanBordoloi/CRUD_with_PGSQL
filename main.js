const {Client, Result} = require ('pg');
const express = require ('express');

const app = express();
app.use(express.json())

const conn = new Client({
    user: "ayushmanbordoloi",
    host: "localhost",
    port: 5432,
    password: "12345",
    database: "demo_backend"
})

conn.connect().then(()=> console.log("Connected to database"))

app.post('/postData', (req, res)=>{
    const {name, id} = req.body;
    const insert_query = "insert into demo_table (name, id) val ($1, $2)"

    conn.query(insert_query,[name, id], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            console.log(result)
            res.send("POSTED Data")
        }
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port: 3000")
})