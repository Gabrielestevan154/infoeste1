import banco from'../src/db/database.js'
let conexao = new banco();

export default class UsuarioModel{
    #id;
    #nome;
    #email;
    #idade;

    constructor(id, nome, email, idade){
        this.#id = id; 
        this.#nome = nome;
        this.#email = email;
        this.#idade = idade;

    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome;

    }
    get idade(){
        return this.#idade;

    }
    get email(){
        return this.#email;
    }

    set id(valor){
        this.#id = valor;
    }
    set nome(valor){
        this.#nome = valor;
    }
    set email(valor){
        this.#email = valor;
    }
    set idade(valor){
        this.#idade = valor;

    }

    async criar() {
        let sql = "INSERT INTO tb_usuario(usu_nome, usu_email, usu_idade)VALUES (?,?,?)";

        let valores = [this.#nome, this.#email, this.#idade];

        let resultado = await conexao.ExecutaComandoNonQuery(sql, valores);

        return resultado;
    }

    async listar(){
        let sql = "SELECT * FROM tb_usuario";

        let resultado = await conecao.ExecutaComando(sql);
        return resultado;
    }


    async buscar(){
        let sql = "SELECT * FROM tb_usuario WHERE usu_id = ?";
        let valor = [this.#id];

        let resultado = await conexao.ExecutaComando(sql, valor);
        return resultado;
        
    }
}