// MODULES //
const express = require('express');
const cors = require('cors');
const {users, dashboard} = require('./routes/routes.js');

// APP //
const app = express();
const PORT = process.env.PORT || 8080;

// MIDDELWERES //
app.use(cors({ credentials:true, origin: 'http://localhost:3000' }));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// ROUTES //
app.get('/', (req, res)=>{res.send('Index')});
app.use('/', users);
app.use('/dashboard', dashboard);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})