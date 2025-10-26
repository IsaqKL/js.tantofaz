let senha = document.getElementById('snh')
let quant = document.getElementById('quant')
let letraM = document.getElementById('letraM')
let letraMn = document.getElementById('letraMini')
let n = document.getElementById('numb')
let caract = document.getElementById('caract')
let gerar = document.getElementById('button')


function Gerar(){
    let ltM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let ltMn = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let crtEspc = '!@#$%&()_*+=-[]{},.;:/?'

    let box = ''
    let res = ''

    if(letraM.checked) box += ltM
    if(letraMn.checked) box += ltMn
    if(n.checked) box += numbers
    if(caract.checked) box += crtEspc

    let tamanho = Number(quant.value)

    if(tamanho <= 0 || isNaN(tamanho)){
        alert('Selecione a quantidade válida de caracteres!')
        return
    }
    if(box.length === 0){
        alert('Selecione pelo menos uma opção!')
        return
    }

    for(let i = 0; i < tamanho; i++){
        let index = Math.floor(Math.random() * box.length)
        res += box.charAt(index)
    }

    senha.value = res

}