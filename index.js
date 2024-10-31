import express from 'express';

const app = express();

app.use(express.json())

let usuarios = [
    {id: 1, nome: "Joao", email: "Joao@gmail.com", idade: 25},
    {id: 2, nome: "Joao", email: "Joao@gmail.com", idade: 25},
    {id: 3, nome: "Joao", email: "Joao@gmail.com", idade: 25},
    {id: 4, nome: "Joao", email: "Joao@gmail.com", idade: 25},
    {id: 5, nome: "Joao", email: "Joao@gmail.com", idade: 25},


];

app.get("/usuarios", (req,res) =>{
    res.status(200).json({succes: true, data: usuarios})
})

app.get("/", (req, res)=>{
    res.send('compre BITICOIN2eethfasfadas');
})

app.get("/usuarios/:id", (req, res)=>{
    const id = req.params.id;

    if(!id){
        res.status(400).json({ succes: false, message: "Manda o ID:"});

    }
    else{
        const usuarioencontrado = usuarios.find((usuario) => 
             usuario.id === Number(id)
        );
        if(usuarioencontrado !== undefined){
            res.status(200).json({
                succes: true,
                data: usuarioencontrado,
            });
        }else{
            res.status(404).json({
                sucess: false,
                message:"usuario nao encontrado"
            })
        }
    }
});

app.post("/usuaruis", (req,res) => {
    const {nome, email, idade } = req.body;

    if(!nome || !email || !idade){
        res.status(400).json({
            success: false,
            message: "informacoes invalidas",
        })
    }else{
        const novousuario = {
            nome,
             email,
            idade,
        };
    }
})

app.listen(5000,()=> {
    console.log('Servidor rodando emn http://localhost:5000');
    })