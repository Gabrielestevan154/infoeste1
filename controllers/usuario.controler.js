import UsuarioModel from "../model/usuario.model.js";
import UsuarioModel from "../model/usuario.model.js";

export default class UsuarioController{
    async criar(req, res){
        let {nome, email, idade } = req.body;

        if(nome && email && idade ){
            let usuariomodel =  new UsuarioModel("", nome, email, idade);
            let usuariocriar = await usuariomodel.criar();

            if(usuariocriar){
                res.status(200).json({
                    ok: true,
                    data: usuariocriar
                })
            } else {
                res.status(404).json({
                    ok: false,
                    msg: "Usuarios não encontrados!"

                })
            }
        }else{
            res.status(400).json({
                ok: false,
                msg: "Paramentros Invalidos "
            })
        }



    }

    async lsitar(req, res){
     //  let { id } = req.params

        let usuarioModel = new UsuarioModel("", "", "", "")
        let usuarios = await usuarioModel.listar();


        if(usuarios.length > 0) {
            res.status(200).json({
                ok: true,
                data: usuarios

            });

        }else{
            res.status(404).json({
                ok: false,
                msg: "Usuarios não encontrados"
            })
        }
    }

    async buscar(req, res){
        let { id } = req.params;
        if(id){


            let usuarioModel = new UsuarioModel(id, "", "", "");
            let usuario = usuarioModel.buscar();

            if(usuario.length > 0){
                res.status(200).json({
                    ok: true,
                    data: usuario
                })
            }

        }else {
            res.status(404).json({
                ok: false,
                msg: "esta faltando o ID!"
            })
        }
    }
}
