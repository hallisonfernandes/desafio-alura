function salvar() {
    let nome = document.querySelector('input#txtnome')
    let idade = document.querySelector('input#txtidade')
    let ling = document.querySelector('input#txtling')
    let res = document.querySelector('div#res')
    
    if (nome.value.length == 0 || idade.value.length == 0 || ling.value.length == 0){
        alert('ERRO! Preencha todos os dados!')
    } else {
        let gost = document.getElementsByName('check')
        res.innerHTML = `Olá <strong>${nome.value.toUpperCase()[0]+nome.value.substring(1)}</strong>, você tem <strong>${idade.value}</strong> anos e já está aprendendo <strong>${ling.value}</strong>! <br>`
        if (gost[0].checked){
            res.innerHTML += ` Muito bom! continue estudando <strong>${ling.value}</strong> e você terá muito sucesso.`
        } else{
            res.innerHTML += `Ahh que pena que você não gostou de <strong>${ling.value}</strong>... Já tentou aprender outras linguagens?`
        }
    }
    nome.value = ''
    idade.value = ''
    ling.value = ''
    nome.focus()
}