
const inputCep = document.querySelector('.inputCep')
const resultaConsulta = document.querySelector('.resultaConsulta')

const buscaCep = async (cep) => {
    const fetchApi = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    const res = await fetchApi.json()

    const conteudo = document.createElement('p')
    if(res.address === undefined){
        const naoEncontrado = 'Endereço não encontrado ou não existe.'
        resultaConsulta.innerHTML = naoEncontrado
    }else{
        conteudo.innerText = `${res.address}, ${res.district}, ${res.city} - ${res.state}. `
    resultaConsulta.appendChild(conteudo)
    }
}

const cepEncontrado = (e) => {
    e.preventDefault()
    resultaConsulta.innerHTML = ''
    if (inputCep.value === '') {
        const erro = document.createElement('p')
        erro.innerText = 'Informe o CEP que deseja consultar.'
        resultaConsulta.appendChild(erro)
    } else {
        const cepFormatado = inputCep.value.replace('.','').replace('-','')
        buscaCep(cepFormatado)
        
    }
}

document.querySelector('form').addEventListener('submit', cepEncontrado)
