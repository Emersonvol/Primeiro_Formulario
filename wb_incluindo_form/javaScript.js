(function btt(){
  const alerta = document.querySelector('.btn__Botao');
  alerta.addEventListener('click', e =>{
  alert('Perfil Salvo !!!');
  location.reload() 
  });
    }())
   

const quantosMembros = document.querySelector('.qtMenbros')
quantosMembros.addEventListener("input",(e)=>{
saida = document.querySelector('#saida')
saida.innerHTML = `${quantosMembros}`
saida.innerHTML = quantosMembros.value
},false)


const qtdTrofeus = document.querySelector('#nvTrofeus')
qtdTrofeus.addEventListener("input", (e) =>{
saida2 = document.querySelector('.sobre__cla__trofeus');
saida2.innerHTML = qtdTrofeus.value
},false)

const tagSelecionadas = document.querySelector('input[name="gcla"]:checked')




