const express = require("express");
const router = express.Router();

const dbKnex = require("../data/db_config"); //dados de conexão com o bd

//método get ele retorna pode-se os livors do banco de dados
router.get("/",async(req,res) => {
    try{
        //para obter os autores pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const autores = await dbKnex("autores").orderBy("id","desc");
        res.status(200).json(autores); //retorna statusCode ok e os dados
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});

//método post é usado para inclusão
router.post("/cadastrar",async (req,res)=>{
//faz a desestruturação dos dados recebidos no corpo da requisição
const titulo = req.titulo
//const {titulo, autor, ano,preco, foto} = req.body;

            // "nome"
            // "sobrenome"
            // "idade"
            // "data_nascimento"
            // "sexo"
            // "telefone

//se algum dos campos não foi passado, irá enviar uma mensagem de erro ao retornar
if(!titulo || !nome || !sobrenome || !idade || !data_nascimento ||!sexo||!telefone){
    res.status(400).json({msg:"Enviar titulo, autor, ano, preco, e foto do livro."});
    return;
}

//caso ocorra algum erro na inclusão, o programa irá capturar(catch) o erro
try{
    //insert, faz a inserção na tabela autores(e retorna o id do registro inserido)
    const novo = await dbKnex("autores").insert({nome,sobrenome,idade,data_nascimento,sexo,telefone});
    res.status(201).json({id:novo[0]}); //statuscode indica Create
}catch(error){
    res.status(400).json({msg:error.message}); //retorna status de erro e msg
}
});

//método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id"),async(req,res) => {
const id = req.params.id; //
const {preco} = req.body;} //campo a ser alterado

//separação

//método delete é usado para exclusão
router.delete("/:id",async(req,res) => {
const {id} = req.params; //id do registro a ser excluído
try{
await dbKnex("autores").del().where({id});
res.status(200).json(); //statusCode indica Ok
}catch(error){
res.status(400).json({msg:error.message}); //retorna status de erro e msg
}
});

module.exports = router;