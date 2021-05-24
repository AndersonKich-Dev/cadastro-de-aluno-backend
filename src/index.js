const express = require('express')
const morgan = require('morgan')
const cors = require('cors');

const app = express()


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('dev'));
app.use(express.static('src'))
app.use(routes);

app.listen(3333, ()=>{
    console.log('Executando...')
})