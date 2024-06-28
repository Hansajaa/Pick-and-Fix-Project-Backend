const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();


const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '127.0.0.1';

const uri = process.env.DB_URI;

try {
    mongoose.connect(uri);
    console.log("Server Connected to the mongodb Database");   
} catch (error) {
    console.error(error);
}

app.listen(PORT, HOST, ()=>{
    console.log(`Server start on port ${PORT}`);
})


