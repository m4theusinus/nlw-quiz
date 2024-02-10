const perguntas = [
    {
      pergunta:
        "Qual é a sintaxe correta para se referir a um elemento HTML usando JavaScript?",
      respostas: [
        "getElementByID('elemento')",
        "document.getElement('elemento')",
        "document.getElementById('elemento')",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Qual desses métodos é usado para imprimir algo no console do navegador?",
      respostas: ["log()", "print()", "console.log()"],
      correta: 2,
    },
    {
      pergunta:
        "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable nomeVariavel;",
        "var nomeVariavel;",
        "let nomeVariavel;",
      ],
      correta: 1,
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: ["Atribuição", "Comparação estrita", "Concatenação"],
      correta: 1,
    },
    {
      pergunta: "Qual é a maneira correta de escrever um array em JavaScript?",
      respostas: ["array = []", "var array = {}", "var array = []"],
      correta: 2,
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas: ["4", "22", "Erro"],
      correta: 1,
    },
    {
      pergunta:
        "Qual método JavaScript é usado para remover o último elemento de um array e retorna esse elemento?",
      respostas: ["pop()", "remove()", "shift()"],
      correta: 0,
    },
    {
      pergunta:
        "Qual função JavaScript é usada para arredondar um número para a inteiro mais próximo?",
      respostas: ["Math.floor()", "Math.round()", "Math.ceil()"],
      correta: 1,
    },
    {
      pergunta:
        "Qual é a maneira correta de iniciar um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i <= 5)",
        "for (i <= 5; i++)",
        "for (var i = 0; i <= 5; i++)"
      ],
      correta: 2,
    },
  ];
  
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  const corretas = new Set();
  
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true);
      dt.querySelector("span").textContent = resposta;
      dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      
      quizItem.querySelector("dl").appendChild(dt);
    }
  
    //feito para tirar a pergunta esqueleto do html
    quizItem.querySelector("dl dt").remove();
  
    quiz.appendChild(quizItem);
  }
  