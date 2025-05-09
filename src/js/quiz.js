//Evento carrega a pagina automaticamente
document.addEventListener('DOMContentLoaded', ()=>{
    //Declarando as variáveis
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById('proximo');
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn');

    //Declarando ARRAY
    const questoes =[
        "Qual linguagem de programação você utiliza?",
        "Descreva essa linguagem",
        "Em que ano surgiu a linguagem utilizada?",
        "Você se considera um programador sênior? ",
    ];

    //Declarando as variáveis
    let perguntas = 0;
    const respostas = [];

    //Criando a função monstrar pergunta

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent=questoes[perguntas];
            resposta.value='';
            mensagem.textContent='';
        }else{
            mostrarResultado();
        }
    }

    //Criando a função mostrar resultado

    function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList,remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes, index)=>{
            const listaItem = document.createElement('li');
            listaItem.innerHTML=`<strong>${questoes}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span>`
            listaResultado.appendChild(listaItem);
        })
    }

    //Função para próxima pergunta

    function nextQuestao(){
        const respostaAtual = resposta.value.trim();
        if(respostaAtual === ''){
            mensagem.textContent="Por favor, digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();
    }
    function reiniciarQuiz(){
        pergunta = 0;
        respostas.length = 0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden');
        mostrarPergunta();
    }
    proximaPergunta.addEventListener('click',nextQuestao);
    reiniciarBotao.addEventListener('click',reiniciarQuiz);
    mostrarPergunta();

})