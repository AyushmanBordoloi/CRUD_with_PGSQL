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
    const insert_query = "insert into demo_table (name, id) values ($1, $2)"

    conn.query(insert_query,[name, id], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            console.log(result)
            res.send("POSTED Data")
        }
    })
})

app.get('/getData', (req, res)=> {
    const select_query = "select * from demo_table"
    conn.query(select_query, (err, result)=>{
        if(err){
            res.send(err)
        }else{
            console.log(result)
            res.send(result.rows)
        }
    })
})

app.get('/fetchByID/:id', (req, res)=> {
    const id = req.params.id;
    const select_query = "select * from demo_table where id = $1"
    conn.query(select_query, [id], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            console.log(result)
            res.send(result.rows)
        }
    })
})

app.put('/update/:id', (req, res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const update_query = "update demo_table set name = $1 where id = $2"
    conn.query(update_query, [name, id], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            console.log(result)
            res.send("UPDATED")
        }
    })
})

app.delete('/delete/:id', (req, res)=>{
    const id = req.params.id;
    const delete_query = "delete from demo_table where id = $1"
    conn.query(delete_query, [id], (err, result)=>{
        if (err){
            res.send(err)
        }else{
            console.log(result)
            res.send("DELETED")
        }
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port: 3000")
})