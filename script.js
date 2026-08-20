const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices');

const story = {
    start: {
        text: "Você é um Padawan escondido no Nível 1313 de Coruscant. Troopers Imperiais entram na cantina procurando fugitivos. O que você faz?",
        choices: [
            { text: "Usar a Força para derrubar caixas e criar uma distração", target: "distracao" },
            { text: "Puxar seu sabre de luz e enfrentar a patrulha", target: "ataque" },
            { text: "Tentar se esgueirar pela saída dos fundos", target: "esconder" }
        ]
    },
    distracao: {
        text: "As caixas caem causando barulho. Os Troopers vão investigar e você corre até as plataformas de pouso, onde encontra um piloto mercenário.",
        choices: [
            { text: "Pagar o piloto para tirá-lo do planeta", target: "piloto" },
            { text: "Tentar roubar uma nave cargueira", target: "roubo" }
        ]
    },
    ataque: {
        text: "Seu sabre azul acende! Você elimina os Troopers, mas o barulho atrai um Inquisidor Imperial.",
        choices: [
            { text: "Manter a calma, defender-se e procurar uma rota de fuga", target: "fuga_inquisidor" },
            { text: "Ceder à raiva para canalizar mais poder contra o Inquisidor", target: "lado_sombrio" }
        ]
    },
    esconder: {
        text: "Um Droide de Segurança intercepta você na porta dos fundos e ativa o alarme. Você foi capturado pelo Império.",
        choices: [
            { text: "Tentar Novamente", target: "start" }
        ]
    },
    piloto: {
        text: "O piloto aceita os créditos e leva você em segurança até um refúgio da Resistência. Você sobreviveu para dar continuidade à Ordem Jedi!",
        choices: [
            { text: "Jogar Novamente", target: "start" }
        ]
    },
    roubo: {
        text: "Os sistemas de segurança da nave travam. Você fica encurralado na pista de pouso e é capturado.",
        choices: [
            { text: "Tentar Novamente", target: "start" }
        ]
    },
    fuga_inquisidor: {
        text: "Você empurra uma estrutura sobre o Inquisidor usando a Força e escapa pelas sombras da cidade. Você continua livre!",
        choices: [
            { text: "Jogar Novamente", target: "start" }
        ]
    },
    lado_sombrio: {
        text: "A raiva dá força momentânea, mas cega seus reflexos. O Inquisidor se aproveita do seu desequilíbrio e o derrota.",
        choices: [
            { text: "Tentar Novamente", target: "start" }
        ]
    }
};

function renderScene(sceneKey) {
    const scene = story[sceneKey];
    storyText.innerText = scene.text;
    choicesContainer.innerHTML = '';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => renderScene(choice.target);
        choicesContainer.appendChild(button);
    });
}

renderScene('start');