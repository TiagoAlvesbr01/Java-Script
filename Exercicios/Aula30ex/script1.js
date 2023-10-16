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
       this.cancelar()
        
    }
    listaTabela() {/*Aqui vamos lista os itens dentro do array. Criamos um método que percorre todos os itens do array*/
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ''

        for(let i =0; i < this.arrayProdutos.length; i++) {/*Percorre todo o array, onde o que for </maior que i/0 será add + 1,2,3, ...*/
            let tr = tbody.insertRow()/*Cria uma nova linha no tbody*/

            let td_id = tr.insertCell()/*Aqui vai ser criado uma coluna no ID*/
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerHTML = this.arrayProdutos[i].id/*Aqui vai aparecer um iten na coluna*/
            td_produto.innerHTML = this.arrayProdutos[i].nomeProduto
            td_valor.innerHTML = this.arrayProdutos[i].preco

            td_id.classList.add('center')/*Faz criar uma class dentro do td_id. Serve para puxar configuraçoes do CSS/Style dinamicamente*/

            let imgEdit = document.createElement('img')/*Aqui se cria um novo elemento.*/
            imgEdit.src = 'edit.png'/*Aqui se add o endereço do conteudo do novo elemento*/
            td_acoes. appendChild(imgEdit)/*Dentro do td_açoes/pai vai ser add imagens/filha*/
            imgEdit.setAttribute('onclick','produto.preparaEditacao('+ JSON.stringify(this.arrayProdutos[i]) +')')

            let imgDelete = document.createElement('img')
            imgDelete.src = 'lixeira.png'
            imgDelete.setAttribute('onclick','produto.deletar('+ this.arrayProdutos[i].id +')')/*Aqui se cria, quando voçe clicar na img, vai acionar um método. Dá vida a um elemento*/
            td_acoes.appendChild(imgDelete)
            
        } 

    }
    adicionar(produto) {/*Aqui vai add itns no array*/
        this.arrayProdutos.push(produto)
        this.id++

    }
    preparaEditacao(dados) {
        
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
   
    cancelar() {/*Quando o usuario apertar em cancelar, os inputs irão se apagar*/
        document.getElementById('produto').value = ''
        document.getElementById('preco').value = ''
    }

    deletar(id) {/*Metodo para deletar o id.*/
        if(confirm('Deseja realmente deletar o produto do ID' + id)) {
            let tbody = document.getElementById('tbody')/*Vamos deletar o linha que esta dentro do tbody*/

        for(let i = 0; i < this.arrayProdutos.length; i++){/*Apartir de zero, todo aquele maior que i/0 dentro do array vai ser apagado*/
        if(this.arrayProdutos[i].id == id) {/*Se o id do array for igual ao id do produto*/
            this.arrayProdutos.splice(i,1)/*Então o id  do array será apagado*/
            tbody.deleteRow(i)
        }

        }console.log(this.arrayProdutos)
    }
        }
        
    }
    
    
var produto = new Produto();