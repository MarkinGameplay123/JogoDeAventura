const story = {
  start: {
    text: "Você acorda no deserto de Tatooine. Dois sóis queimando a cara. Você é mais um farmboy com delírios de grandeza.\n\nUm droide estranho apita desesperado. Naves Imperiais descem no horizonte.",
    choices: [
      { text: "Investigar o droide", next: "droide" },
      { text: "Correr pro porão da fazenda", next: "porao" },
      { text: "Gritar 'EU SOU O ESCOLHIDO!'", next: "escolhido" }
    ],
    location: "Tatooine",
    rank: "Farmboy"
  },
  droide: {
    text: "É um R2-D2. Ele projeta o holograma da Princesa Leia:\n\n\"Ajude-me, Obi-Wan Kenobi. Você é minha única esperança.\"\n\nObi-Wan? Aquele velho maluco das cavernas?",
    choices: [
      { text: "Ir atrás do Obi-Wan", next: "obiwan" },
      { text: "Vender o droide pro Jabba", next: "jabba" },
      { text: "Ignorar e voltar a colher umidade", next: "morte1" }
    ],
    location: "Tatooine",
    rank: "Farmboy"
  },
  porao: {
    text: "Você se esconde. Stormtroopers passam por cima.\n\n\"Olha só, mais um desertor. Queima a fazenda.\"\n\nGritos dos seus tios. Tarde demais.",
    choices: [
      { text: "Sair e confrontar os troopers", next: "luta_troopers" },
      { text: "Ficar escondido como covarde", next: "morte2" }
    ],
    location: "Fazenda Lars",
    rank: "Covarde"
  },
  escolhido: {
    text: "Você grita. Os Stormtroopers riem.\n\n\"Olha o louco.\"\n\nTiros. Você vira cinzas com pretensão de protagonista.",
    choices: [], death: true, location: "Tatooine", rank: "Cinza"
  },
  obiwan: {
    text: "Obi-Wan te olha e suspira fundo.\n\n\"Ah, mais um. Seu pai era Jedi. Toma esse sabre e para de reclamar.\"\n\nSabre azul entregue. +20 Força.",
    choices: [
      { text: "Aceitar o destino e ir pra Mos Eisley", next: "moseisley" },
      { text: "Perguntar se pode ser Sith", next: "sith_path" }
    ],
    force: 20, location: "Cavernas", rank: "Padawan"
  },
  jabba: {
    text: "Jabba te olha com nojo. Um guarda traduz:\n\n\"Ele gostou. Você agora é escravo. Vai dançar.\"\n\nFim da carreira de herói.",
    choices: [], death: true, location: "Palácio de Jabba", rank: "Escravo"
  },
  morte1: {
    text: "Você volta a colher umidade. Stormtroopers chegam, matam seus tios e te capturam.\n\nResto da vida limpando banheiro de Star Destroyer.",
    choices: [], death: true, location: "Fazenda Lars", rank: "Prisioneiro"
  },
  morte2: {
    text: "Você fica escondido. A fazenda queima. Você morre de fumaça e vergonha.\n\nNem precisaram te matar.",
    choices: [], death: true, location: "Fazenda Lars", rank: "Cinza"
  },
  luta_troopers: {
    text: "Você sai gritando com uma pá. Três Stormtroopers.\n\nEles te transformam em queijo suíço.",
    choices: [], death: true, location: "Fazenda Lars", rank: "Alvo fácil"
  },
  moseisley: {
    text: "Mos Eisley. Cheira a álcool barato e desespero.\n\nHan Solo discute com um caçador de recompensas na cantina.",
    choices: [
      { text: "Contratar o Han", next: "falcon" },
      { text: "Tentar roubar a Millennium Falcon", next: "roubar" },
      { text: "Beber até cair", next: "bebado" }
    ],
    location: "Mos Eisley", rank: "Padawan"
  },
  sith_path: {
    text: "Obi-Wan te olha com nojo absoluto.\n\n\"Sério? Quer ser Sith? Vai lá então.\"\n\nO Lado Negro te chama. +30 Força (escura).",
    choices: [
      { text: "Ir atrás de Vader", next: "vader" },
      { text: "Matar o Obi-Wan agora", next: "matar_obi" }
    ],
    force: 30, location: "Cavernas", rank: "Aspirante Sith"
  },
  falcon: {
    text: "Han: \"15.000 créditos. Sem pechincha.\"\n\nVocê não tem nada. Obi-Wan resolve com \"a Força\".\n\nHan resmunga mas aceita. Decolam.",
    choices: [{ text: "Seguir pro espaço", next: "espaco" }],
    location: "Millennium Falcon", rank: "Passageiro"
  },
  roubar: {
    text: "Você tenta roubar a Falcon. Chewbacca te pega pelo pescoço e te joga no chão.\n\nHan: \"Boa tentativa, moleque.\"\n\nStormtroopers te acham depois. Fim.",
    choices: [], death: true, location: "Mos Eisley", rank: "Ladrão fracassado"
  },
  bebado: {
    text: "Você bebe até esquecer o próprio nome. Acorda num beco sem calça e sem droide.\n\nUm trooper te leva preso. Carreira encerrada.",
    choices: [], death: true, location: "Mos Eisley", rank: "Bêbado"
  },
  espaco: {
    text: "Hiperespaço. Tudo azul e bonito... até o computador gritar que Alderaan não existe mais.\n\nA Estrela da Morte te puxa. Ótimo.",
    choices: [
      { text: "Se esconder nos porões", next: "estrela" },
      { text: "Tentar negociar com Vader", next: "negociar" }
    ],
    location: "Espaço", rank: "Passageiro"
  },
  vader: {
    text: "Vader te encara com aquela voz de aspirador de pó:\n\n\"Interessante. Quer poder? Então prove.\"",
    choices: [
      { text: "Lutar contra Vader", next: "luta_vader" },
      { text: "Se ajoelhar e pedir pra ser aprendiz", next: "aprendiz" }
    ],
    location: "Estrela da Morte", rank: "Aspirante Sith"
  },
  matar_obi: {
    text: "Você tenta atacar Obi-Wan. Ele desvia, suspira e te corta ao meio.\n\n\"Eu te avisei.\"",
    choices: [], death: true, location: "Cavernas", rank: "Cortado"
  },
  estrela: {
    text: "Vocês encontram a Princesa Leia numa cela.\n\n\"Vocês são o resgate? Que decepção.\"\n\nAgora tem que escapar.",
    choices: [
      { text: "Lutar até o hangar", next: "fuga" },
      { text: "Usar a Força pra abrir caminho", next: "forca_fuga" }
    ],
    location: "Estrela da Morte", rank: "Resgatador"
  },
  negociar: {
    text: "Você tenta negociar. Vader te força a joelho:\n\n\"Eu sou seu pai.\"\n\nVocê tem um ataque de nervos e desmaia. Acorda num tanque de Bacta. Prisioneiro eterno.",
    choices: [], death: true, location: "Estrela da Morte", rank: "Prisioneiro"
  },
  luta_vader: {
    text: "Você luta. Vader é ridiculamente superior.\n\nEle corta sua mão e te joga no abismo.\n\n\"Incompleto.\"",
    choices: [], death: true, location: "Estrela da Morte", rank: "Manco"
  },
  aprendiz: {
    text: "Você se ajoelha. Vader aceita.\n\n\"Bom. Agora limpa o chão da ponte de comando por 10 anos.\"\n\nVocê virou o faxineiro do Império. Parabéns pelo Lado Negro.",
    choices: [], death: true, location: "Estrela da Morte", rank: "Faxineiro Imperial"
  },
  fuga: {
    text: "Vocês correm atirando. Stormtroopers caem porque miram feito cegos.\n\nChegam na Falcon. Decolam. A Estrela da Morte explode (não pergunte como).\n\nVocê é herói. Medalha. Final feliz... dessa vez.",
    choices: [], win: true, location: "Millennium Falcon", rank: "Herói da Aliança"
  },
  forca_fuga: {
    text: "Você tenta usar a Força...",
    choices: [], special: "checkForce", location: "Estrela da Morte", rank: "Usuário da Força"
  }
};

let hp = 100;
let force = 0;
let location = "Tatooine";
let rank = "Farmboy";

function log(msg, type = "") {
  const box = document.getElementById("log");
  const div = document.createElement("div");
  div.className = "entry " + type;
  div.textContent = "[LOG] " + msg;
  box.prepend(div);
  if (box.children.length > 8) box.removeChild(box.lastChild);
}

function updateHUD() {
  document.getElementById("hpBar").style.width = Math.max(0, hp) + "%";
  document.getElementById("hpText").textContent = Math.max(0, hp) + " / 100";
  const fPct = Math.min(100, force);
  document.getElementById("forceBar").style.width = fPct + "%";
  document.getElementById("forceText").textContent = force;
  document.getElementById("location").textContent = location;
  document.getElementById("rank").textContent = rank;
}

function showScene(key) {
  const scene = story[key];
  if (!scene) {
    document.getElementById("story").textContent = "Cena inexistente. Bug do programador.";
    return;
  }

  const game = document.getElementById("game");
  game.classList.remove("death", "win");

  location = scene.location || location;
  rank = scene.rank || rank;
  if (scene.force) force += scene.force;
  updateHUD();

  document.getElementById("story").textContent = scene.text;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  document.getElementById("restart").style.display = "none";

  if (scene.death) {
    game.classList.add("death");
    document.getElementById("story").textContent += "\n\n*** VOCÊ MORREU. QUE SURPRESA. ***";
    document.getElementById("restart").style.display = "block";
    log("Unidade eliminada.", "danger");
    return;
  }

  if (scene.win) {
    game.classList.add("win");
    document.getElementById("story").textContent += "\n\n*** VOCÊ VENCEU. ACHO QUE. ***";
    document.getElementById("restart").style.display = "block";
    log("Missão concluída com sucesso.", "success");
    return;
  }

  if (scene.special === "checkForce") {
    if (force >= 30) {
      game.classList.add("win");
      document.getElementById("story").textContent += "\n\nSua Força é suficiente. Tropas caem. Vocês escapam. A Estrela da Morte explode.\n\n*** VITÓRIA ***";
      log("Força dominada. Vitória.", "success");
    } else {
      game.classList.add("death");
      document.getElementById("story").textContent += "\n\nSua Força é fraca demais. Um trooper te atira na cara.\n\n*** VOCÊ MORREU. ***";
      log("Força insuficiente. Eliminado.", "danger");
    }
    document.getElementById("restart").style.display = "block";
    return;
  }

  scene.choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = "▸ " + c.text;
    btn.onclick = () => {
      log("Escolha: " + c.text);
      showScene(c.next);
    };
    choicesDiv.appendChild(btn);
  });
}

function startGame() {
  hp = 100;
  force = 0;
  location = "Tatooine";
  rank = "Farmboy";
  document.getElementById("log").innerHTML = '<div class="entry">[SISTEMA] HUD tático reiniciado.</div>';
  updateHUD();
  showScene("start");
}

startGame();