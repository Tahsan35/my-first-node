const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello my own final!!!')
});
const users = [
    {id:1, name:"sakil", phone:"01777777"},
    {id:2, name:"sakilaa", phone:"01777777"},
    {id:3, name:"arif", phone:"01777777"},
    {id:4, name:"arifa", phone:"01777777"},
    {id:5, name:"zaFOR", phone:"01777777"},
]
app.get('/users', (req, res) => {
    if(req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    };
    else{
        res.send(users);
    }

});

app.post('/user', (req, res) => {
    // console.log(req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    // const user = users[id];
    const user = users.find(u => u.id==id);
    
    res.send(user);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})