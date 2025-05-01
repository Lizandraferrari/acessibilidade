
document.getElementById('preto-e-branco').addEventListener('click' , () =>{
    document.body.classList.toggle('preto-e-branco')
})

document.getElementById('alto-contraste').addEventListener('click' , () =>{
    document.body.classList.toggle('alto-contraste')
})

document.getElementById('libras').addEventListener('click' , () => {
    document.getElementById('plugin-acessivel').click()
})

var fontSize = 100

document.getElementById('aumentar-texto').addEventListener('click' , () =>{
    fontSize = alterarTamanhoFonte(fontSize , '+')
})

document.getElementById('diminuir-texto').addEventListener('click' , () =>{
    fontSize = alterarTamanhoFonte(fontSize )
})

function alterarTamanhoFonte(fontSize , operacao){
    const numSomarSubtrair = 10
    var tamanho = fontSize
    tamanho = operacao ? fontSize += numSomarSubtrair : fontSize -= numSomarSubtrair 
    document.body.style.fontSize = tamanho + '%'
    return tamanho
}