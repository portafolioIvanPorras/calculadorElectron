const numeros = document.querySelectorAll('input')
const teclaResultado = document.querySelector('#result')
const buttonDarkMode = document.querySelector('.mode')
let conta;

const boton = (value) => {
    conta = teclaResultado.value += value
} 

const limpar = () => {
  teclaResultado.value = ""
}

const calc = () => {

  const resultado = eval(conta)
  teclaResultado.value = resultado
}

 const retirar = () => {
      const palavraCompleta = teclaResultado.value
      const ultimaLetra = palavraCompleta.substring(0, teclaResultado.value.length - 1)
      console.log(ultimaLetra)
    
      teclaResultado.value = ultimaLetra
    }

buttonDarkMode.addEventListener('click', function() {
  document.documentElement.classList.toggle('activo')
  buttonDarkMode.classList.toggle('activo')
})
