// StarWarsAventura.java
// Compila: javac StarWarsAventura.java
// Roda:   java StarWarsAventura
// Não enche o saco pedindo mais versão.

import java.util.*;

public class StarWarsAventura {

    static int hp = 100;
    static int force = 0;
    static String location = "Tatooine";
    static boolean gameOver = false;
    static Scanner sc = new Scanner(System.in);

    static class Scene {
        String text;
        List<Choice> choices;
        boolean death;
        boolean win;
        String special;
        int forceGain;
        String loc;

        Scene(String text, List<Choice> choices, boolean death, boolean win, String special, int forceGain, String loc) {
            this.text = text;
            this.choices = choices;
            this.death = death;
            this.win = win;
            this.special = special;
            this.forceGain = forceGain;
            this.loc = loc;
        }
    }

    static class Choice {
        String text;
        String next;
        Choice(String text, String next) {
            this.text = text;
            this.next = next;
        }
    }

    static Map<String, Scene> story = new HashMap<>();

    static void buildStory() {
        story.put("start", new Scene(
            "Você acorda no deserto de Tatooine. Dois sóis queimando a cara. Você é mais um farmboy com delírios de grandeza.\n\nUm droide estranho apita desesperado. Naves Imperiais descem no horizonte.",
            Arrays.asList(
                new Choice("Investigar o droide", "droide"),
                new Choice("Correr pro porão da fazenda", "porao"),
                new Choice("Gritar 'EU SOU O ESCOLHIDO!'", "escolhido")
            ), false, false, null, 0, "Tatooine"
        ));

        story.put("droide", new Scene(
            "É um R2-D2. Ele projeta o holograma da Princesa Leia:\n\n\"Ajude-me, Obi-Wan Kenobi. Você é minha única esperança.\"\n\nObi-Wan? Aquele velho maluco das cavernas?",
            Arrays.asList(
                new Choice("Ir atrás do Obi-Wan", "obiwan"),
                new Choice("Vender o droide pro Jabba", "jabba"),
                new Choice("Ignorar e voltar a colher umidade", "morte1")
            ), false, false, null, 0, "Tatooine"
        ));

        story.put("porao", new Scene(
            "Você se esconde. Stormtroopers passam por cima.\n\n\"Olha só, mais um desertor. Queima a fazenda.\"\n\nGritos dos seus tios. Tarde demais.",
            Arrays.asList(
                new Choice("Sair e confrontar os troopers", "luta_troopers"),
                new Choice("Ficar escondido como covarde", "morte2")
            ), false, false, null, 0, "Fazenda Lars"
        ));

        story.put("escolhido", new Scene(
            "Você grita. Os Stormtroopers riem.\n\n\"Olha o louco.\"\n\nTiros. Você vira cinzas com pretensão de protagonista.",
            Collections.emptyList(), true, false, null, 0, "Tatooine"
        ));

        story.put("obiwan", new Scene(
            "Obi-Wan te olha e suspira fundo.\n\n\"Ah, mais um. Seu pai era Jedi. Toma esse sabre e para de reclamar.\"\n\nSabre azul entregue. +20 Força.",
            Arrays.asList(
                new Choice("Aceitar o destino e ir pra Mos Eisley", "moseisley"),
                new Choice("Perguntar se pode ser Sith", "sith_path")
            ), false, false, null, 20, "Cavernas"
        ));

        story.put("jabba", new Scene(
            "Jabba te olha com nojo. Um guarda traduz:\n\n\"Ele gostou. Você agora é escravo. Vai dançar.\"\n\nFim da carreira de herói.",
            Collections.emptyList(), true, false, null, 0, "Palácio de Jabba"
        ));

        story.put("morte1", new Scene(
            "Você volta a colher umidade. Stormtroopers chegam, matam seus tios e te capturam.\n\nResto da vida limpando banheiro de Star Destroyer.",
            Collections.emptyList(), true, false, null, 0, "Fazenda Lars"
        ));

        story.put("morte2", new Scene(
            "Você fica escondido. A fazenda queima. Você morre de fumaça e vergonha.\n\nNem precisaram te matar.",
            Collections.emptyList(), true, false, null, 0, "Fazenda Lars"
        ));

        story.put("luta_troopers", new Scene(
            "Você sai gritando com uma pá. Três Stormtroopers.\n\nEles te transformam em queijo suíço.",
            Collections.emptyList(), true, false, null, 0, "Fazenda Lars"
        ));

        story.put("moseisley", new Scene(
            "Mos Eisley. Cheira a álcool barato e desespero.\n\nHan Solo discute com um caçador de recompensas na cantina.",
            Arrays.asList(
                new Choice("Contratar o Han", "falcon"),
                new Choice("Tentar roubar a Millennium Falcon", "roubar"),
                new Choice("Beber até cair", "bebado")
            ), false, false, null, 0, "Mos Eisley"
        ));

        story.put("sith_path", new Scene(
            "Obi-Wan te olha com nojo absoluto.\n\n\"Sério? Quer ser Sith? Vai lá então.\"\n\nO Lado Negro te chama. +30 Força (escura).",
            Arrays.asList(
                new Choice("Ir atrás de Vader", "vader"),
                new Choice("Matar o Obi-Wan agora", "matar_obi")
            ), false, false, null, 30, "Cavernas"
        ));

        story.put("falcon", new Scene(
            "Han: \"15.000 créditos. Sem pechincha.\"\n\nVocê não tem nada. Obi-Wan resolve com \"a Força\".\n\nHan resmunga mas aceita. Decolam.",
            Arrays.asList(
                new Choice("Seguir pro espaço", "espaco")
            ), false, false, null, 0, "Millennium Falcon"
        ));

        story.put("roubar", new Scene(
            "Você tenta roubar a Falcon. Chewbacca te pega pelo pescoço e te joga no chão.\n\nHan: \"Boa tentativa, moleque.\"\n\nStormtroopers te acham depois. Fim.",
            Collections.emptyList(), true, false, null, 0, "Mos Eisley"
        ));

        story.put("bebado", new Scene(
            "Você bebe até esquecer o próprio nome. Acorda num beco sem calça e sem droide.\n\nUm trooper te leva preso. Carreira encerrada.",
            Collections.emptyList(), true, false, null, 0, "Mos Eisley"
        ));

        story.put("espaco", new Scene(
            "Hiperespaço. Tudo azul e bonito... até o computador gritar que Alderaan não existe mais.\n\nA Estrela da Morte te puxa. Ótimo.",
            Arrays.asList(
                new Choice("Se esconder nos porões", "estrela"),
                new Choice("Tentar negociar com Vader", "negociar")
            ), false, false, null, 0, "Espaço"
        ));

        story.put("vader", new Scene(
            "Vader te encara com aquela voz de aspirador de pó:\n\n\"Interessante. Quer poder? Então prove.\"",
            Arrays.asList(
                new Choice("Lutar contra Vader", "luta_vader"),
                new Choice("Se ajoelhar e pedir pra ser aprendiz", "aprendiz")
            ), false, false, null, 0, "Estrela da Morte"
        ));

        story.put("matar_obi", new Scene(
            "Você tenta atacar Obi-Wan. Ele desvia, suspira e te corta ao meio.\n\n\"Eu te avisei.\"",
            Collections.emptyList(), true, false, null, 0, "Cavernas"
        ));

        story.put("estrela", new Scene(
            "Vocês encontram a Princesa Leia numa cela.\n\n\"Vocês são o resgate? Que decepção.\"\n\nAgora tem que escapar.",
            Arrays.asList(
                new Choice("Lutar até o hangar", "fuga"),
                new Choice("Usar a Força pra abrir caminho", "forca_fuga")
            ), false, false, null, 0, "Estrela da Morte"
        ));

        story.put("negociar", new Scene(
            "Você tenta negociar. Vader te força a joelho:\n\n\"Eu sou seu pai.\"\n\nVocê tem um ataque de nervos e desmaia. Acorda num tanque de Bacta. Prisioneiro eterno.",
            Collections.emptyList(), true, false, null, 0, "Estrela da Morte"
        ));

        story.put("luta_vader", new Scene(
            "Você luta. Vader é ridiculamente superior.\n\nEle corta sua mão e te joga no abismo.\n\n\"Incompleto.\"",
            Collections.emptyList(), true, false, null, 0, "Estrela da Morte"
        ));

        story.put("aprendiz", new Scene(
            "Você se ajoelha. Vader aceita.\n\n\"Bom. Agora limpa o chão da ponte de comando por 10 anos.\"\n\nVocê virou o faxineiro do Império. Parabéns pelo Lado Negro.",
            Collections.emptyList(), true, false, null, 0, "Estrela da Morte"
        ));

        story.put("fuga", new Scene(
            "Vocês correm atirando. Stormtroopers caem porque miram feito cegos.\n\nChegam na Falcon. Decolam. A Estrela da Morte explode (não pergunte como).\n\nVocê é herói. Medalha. Final feliz... dessa vez.",
            Collections.emptyList(), false, true, null, 0, "Millennium Falcon"
        ));

        story.put("forca_fuga", new Scene(
            "Você tenta usar a Força...",
            Collections.emptyList(), false, false, "checkForce", 0, "Estrela da Morte"
        ));
    }

    static void printStatus() {
        System.out.println("\n========================================");
        System.out.println("HP: " + hp + "  |  Força: " + force + "  |  Local: " + location);
        System.out.println("========================================");
    }

    static void showScene(String key) {
        if (gameOver) return;

        Scene scene = story.get(key);
        if (scene == null) {
            System.out.println("\nCena inexistente. O programador é um incompetente.");
            return;
        }

        location = scene.loc != null ? scene.loc : location;
        force += scene.forceGain;
        printStatus();
        System.out.println("\n" + scene.text);

        if (scene.death) {
            System.out.println("\n*** VOCÊ MORREU. QUE SURPRESA. ***");
            gameOver = true;
            askRestart();
            return;
        }

        if (scene.win) {
            System.out.println("\n*** VOCÊ VENCEU. ACHO QUE. ***");
            gameOver = true;
            askRestart();
            return;
        }

        if ("checkForce".equals(scene.special)) {
            if (force >= 30) {
                System.out.println("\nSua Força é suficiente. Tropas caem. Vocês escapam. A Estrela da Morte explode.");
                System.out.println("\n*** VITÓRIA (pelo Lado Negro ou o que for) ***");
            } else {
                System.out.println("\nSua Força é fraca demais. Um trooper te atira na cara.");
                System.out.println("\n*** VOCÊ MORREU. ***");
            }
            gameOver = true;
            askRestart();
            return;
        }

        if (scene.choices.isEmpty()) {
            gameOver = true;
            askRestart();
            return;
        }

        System.out.println("\nO que você faz?");
        for (int i = 0; i < scene.choices.size(); i++) {
            System.out.println("  " + (i + 1) + ". " + scene.choices.get(i).text);
        }

        System.out.print("\nEscolha (número): ");
        int choice;
        try {
            choice = Integer.parseInt(sc.nextLine().trim()) - 1;
        } catch (Exception e) {
            System.out.println("Opção inválida, seu gênio. Tenta de novo.");
            showScene(key);
            return;
        }

        if (choice < 0 || choice >= scene.choices.size()) {
            System.out.println("Opção inválida, seu gênio. Tenta de novo.");
            showScene(key);
            return;
        }

        showScene(scene.choices.get(choice).next);
    }

    static void askRestart() {
        System.out.print("\nJogar de novo? (s/n): ");
        String ans = sc.nextLine().trim().toLowerCase();
        if (ans.equals("s")) {
            hp = 100;
            force = 0;
            location = "Tatooine";
            gameOver = false;
            System.out.println("\n=== STAR WARS - AVENTURA EM JAVA (versão irritada) ===\n");
            showScene("start");
        } else {
            System.out.println("\nFinalmente. Sai daqui.");
            sc.close();
            System.exit(0);
        }
    }

    public static void main(String[] args) {
        buildStory();
        System.out.println("=== STAR WARS - AVENTURA EM JAVA ===");
        System.out.println("Feito com ódio. Roda no terminal. Não pede mais versão.\n");
        showScene("start");
    }
}