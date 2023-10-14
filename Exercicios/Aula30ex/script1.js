class Produto {

    constructor() { /*Atributos/modelos */ 
        this.id = 1
        this.arrayProdutos = []/*Quando o cliente apertar em salvar, o metodo salvar() chama o metodo lerDados(), deposi ele joga dentro desse array*/
        
    }

    salvar() {/*Aqui vão ser salvos os itens dos inputs Produtos e valor*/ 
       let produto = this.lerDados()

       if(this.validaCampos(produto)) {
         this.adicionar(produto)
       }

       this.listaTabela()
        
    }
    listaTabela() {/*Aqui vamos lista os itens dentro do array*/
        let tbody = document.getElementById('tbody')
        tbody.innerHTML =''

        for(let i =0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()/*Aqui vai ser criado uma coluna*/
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerHTML = this.arrayProdutos[i].id/*Aqui vai aparecer um iten na coluna*/
            td_produto.innerHTML = this.arrayProdutos[i].nomeProduto
            td_valor.innerHTML = this.arrayProdutos[i].preco

            td_id.classList.add('center')/*Faz criar uma class dentro do td_id. Todos os nomes vao ser listados 1 abaixo do outro*/
            
        } 

    }
    adicionar(produto) {/*Aqui vai add itns no array*/
        this.arrayProdutos.push(produto)
        this.id++

    }
    lerDados() {/*Aqui os itens serao lidos e depois salvos no método salvar(). Aqui foi 1 primeira parte a ser feito no JS*/ 
        let produto = {}

         produto.id = this.id
         produto.nomeProduto = document.getElementById('produto').value
         produto.preco = document.getElementById('preco').value

        return produto;
    

    }

    validaCampos(produto) {/*Aqui serve pra saber se os nossos campos estao vazios, para que nao se preencha vazios no array*/
        let msg = ''

        if(produto.nomeProduto == '') {/*Essa condicional serve pra vasculhar se existe algum input sem dados preenchidos*/
              msg = '-Informe o nome do Produto \n'
        }
        if(produto.preco == '') {
              msg = '-Informe o preço do Produto \n'
        }
        if(msg != '') {
            alert(msg)
            return false
        }
        return true

    }
   
    cancelar() {
        alert('Esse item sera cancelado')
    }
}
var produto = new Produto();