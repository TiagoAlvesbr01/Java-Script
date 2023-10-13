class Produto {

    constructor() { /*Atributos/modelos */ 
        this.id = 0
        this.nomePorduto = ''
        this.valor = 0
    }

    adicionar() {
        alert('Vamos add um produto');
    }

    cancelar() {
        alert('Esse item sera cancelado')
    }
}
var produto = new Produto();