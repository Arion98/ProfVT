const express = require('express')
const app = express()
const port = 3000

//Arquivo com rotas para o cadastro de livros
const livros = require('./routes/livros');
const autores = require('./routes/autores');
const editoras = require('./routes/editoras');


//identificação da rota e da const (require) associada
app.use('/livros',livros);
app.use('/autores',autores);
app.use('/editoras',editoras);
//a rota /livros retorna a lista dos livros cadastrados em formato json

app.get('/', (req, res) => {
  res.send('ola mundo!')
})

app.use(express.json());
app.post('/livros',(req,res)=>{
  const {autor,nome,editora} = req.body;
  res.send(`O nome do autor é:${autor}, o nome do livro é ${nome} , editado pela ${editora}, recebido `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})