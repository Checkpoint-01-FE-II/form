const $header = document.querySelector('header');
const $containerCartas = document.querySelector('.container-cartas');
const $h1InfosNaTela = document.querySelector('.h1');
const $h2InfosNaTela = document.querySelector('.h2');
const $infosNaTela = document.querySelector('.infos-na-tela');
const $audio = document.getElementById("musica");
const $audioMatch = document.getElementById("som-match");
const $audioWin = document.getElementById("som-win");
const $audioLetsGo = document.getElementById("som-letsgo");

$audio.volume = 0.04;

let mm = 0;
let ss = 0;
let ms = 0;
let cron;
let tempo = 16.666;//tempo em milisegundos
let paresEncontrados = 0;

/**
 * Contagem regressiva 3,2,1.
 */
function contador (){
    $infosNaTela.style.display='block';
    setTimeout(()=>{
        $h1InfosNaTela.innerHTML='3'
        $audioMatch.play()
        $audioMatch.volume=.3;
    }, 1000)
    setTimeout(()=>{
        $h1InfosNaTela.innerHTML='2'
        $audioMatch.play()
        $audioMatch.volume=.3;
    }, 2000)
    setTimeout(()=>{
        $audio.volume=0;
        $h1InfosNaTela.innerHTML='1'
        $audioMatch.play()
        $audioMatch.volume=.3;
    }, 3000)
    setTimeout(()=>{
        $audioLetsGo.play()
        $audioLetsGo.volume=.3;      
    }, 3100)  
}

/**
 * inicializa o jogo quando invocada.
 */
function start() {
    const $modal = document.querySelector('.modal');
    $modal.style.display='none';
    $modal.disabled='true';
    contador();
    setTimeout(()=>{
        $h1InfosNaTela.style.display='none';
        $infosNaTela.style.display='none';
    cron = setInterval(() => { timer(); }, tempo)
    document.getElementById("btniniciar").style.display = "none"
    $audio.play();
    if(JSON.parse(localStorage.getItem('baralho')) === 'marvel'){
        $audio.volume = .3;
    } else{
        $audio.volume = .6;
    }
    document.getElementById("btnreiniciar").style.display = "block"},4000)
}

/**
 * Inicia uma nova partida.
 */
function recomecar() {
    location.reload()
}
/**
 * Pausa o cronômetro do jogo.
 */
function pausar() {
    clearInterval(cron);

}
/**
 * Cronômetro do jogo.
 */
function timer() {
    ms++;
    if (ms == 60) {
        ms = 0;
        ss++;
        if (ss == 60) {
            ss = 0;
            mm++;
        }
    }
    let formato = "Tempo : " + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss) + ":" + (ms < 10 ? "0" + ms : ms)
    document.getElementById("Iniciar").innerText = formato
}

$header.insertAdjacentHTML("beforeend", `
    <h6 id="Iniciar">Tempo : 00:00:00</h6>
    <h6 class='pares-encontrados'>Pares encontrados: ${paresEncontrados}/6</h6>
`);

//seta a música de fundo da página de jogos
switch(JSON.parse(localStorage.getItem('baralho'))){
    case 'onepiece': $audio.src='./audio/One Piece - We Are! 8-Bit .mp3';
    break;
    case 'marvel': $audio.src='./audio/The Avengers [8 Bit Tribute to Alan Silvestri & The Avengers].mp3'
    // console.log("%c                                                             ", "padding: 40px 45px; line-height: 400px; background:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzW5RTB8R6HWWnDaOYIJ83AaLgvwx7E1dug&usqp=CAU')no-repeat; background-size: 100%")
    console.log("%c                                                             ", "padding: 40px 45px; line-height: 240px; background:url('https://nerdando.com/wp-content/uploads/2018/11/Dr1MP6XX4AIF_zG.jpg')no-repeat; background-size: 100%")
    console.log("%c \"“A vida nunca é completa sem seus desafios\” - Stan Lee", "color:#61105E; font-size: 30px; text-shadow: 3px 3px 2px #61105E; font-weight: bold")
    // console.log("%c                                                             ", "padding: 40px 45px; line-height: 400px; background:url('https://registadeu.com.br/wp-content/uploads/2018/11/10.23_StanLee-FTR.jpg')no-repeat; background-size: 100%")

    break;
    case 'aleatorios1': $audio.src='./audio/Zelda Link to the Past - Hyrule Field (Gameboy 8-bit)_50k.mp3'
    break;
    case 'aleatorios2': $audio.src='./audio/Zelda Link to the Past - Hyrule Field (Gameboy 8-bit)_50k.mp3'
    break;
    case 'default': $audio.src='./audio/Super Mario Bros Theme Song .mp3'
    break;
    case 'ingles': $audio.src='./audio/Kirby s Return to Dream Land Title Theme 8 Bit Remix_50k.mp3'
    break;
}

//Array com as cartas preestabelecidas.
let cartasDefault;

//Seta o baralho escolhido pelo usuário.
switch(JSON.parse(localStorage.getItem('baralho'))){
    case 'onepiece':
        cartasDefault = [
        {
            id: '',
            titulo: "Monkey D. Luffy",
            url: './imgs/onepiece/luffy.png',
            descricao: ' é o fundador e o capitão do cada vez mais infame e poderoso Piratas do Chapéu de Palha, bem como um de seus quatro principais lutadores.Seu sonho de vida é se tornar o Rei dos Piratas.'
        },
        {
            id: '',
            titulo: 'Roronoa Zoro',
            url: './imgs/onepiece/zoro.jpg',
            descricao: 'é o espadachim dos Piratas do Chapéu de Palha e um ex-caçador de recompensas.Ele foi o primeiro membro a juntar-se à tripulação.'
        },
        {
            id: '',
            titulo: 'Nami',
            url: './imgs/onepiece/nami.png',
            descricao: 'A "Gata Ladra" Nami é a navegadora dos Piratas do Chapéu de Palha. Ela foi o terceiro membro da tripulação e a segunda a entrar, fazendo-o durante o Arco Orange Town.'
        },
        {
            id: '',
            titulo: 'Tony Tony Chopper',
            url: './imgs/onepiece/chopper.png',
            descricao: 'Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos.'
        },
        {
            id: '',
            titulo: 'Brook',
            url: './imgs/onepiece/brook.png',
            descricao: 'é o Músico dos Piratas do Chapéu de Palha. Ele é um esqueleto que os Chapéus de Palha encontraram a bordo de um navio fantasma depois de entrarem no Triângulo Florian.'
        },
        {
            id: '',
            titulo: 'Franky',
            url: './imgs/onepiece/franky.png',
            descricao: 'é o carpinteiro dos Piratas do Chapéu de Palha. Ele é um cyborg de 36 anos de Water 7 e foi introduzido na história como o líder da Família Franky'
        },
        {
            id: '',
            titulo: "Monkey D. Luffy",
            url: './imgs/onepiece/luffy.png',
            descricao: 'é o fundador e o capitão do cada vez mais infame e poderoso Piratas do Chapéu de Palha, bem como um de seus quatro principais lutadores.Seu sonho de vida é se tornar o Rei dos Piratas.'
        },
        {
            id: '',
            titulo: 'Roronoa Zoro',
            url: './imgs/onepiece/zoro.jpg',
            descricao: 'é o espadachim dos Piratas do Chapéu de Palha e um ex-caçador de recompensas.Ele foi o primeiro membro a juntar-se à tripulação.'
        },
        {
            id: '',
            titulo: 'Nami',
            url: './imgs/onepiece/nami.png',
            descricao: 'A "Gata Ladra" Nami é a navegadora dos Piratas do Chapéu de Palha. Ela foi o terceiro membro da tripulação e a segunda a entrar, fazendo-o durante o Arco Orange Town.'
        },
        {
            id: '',
            titulo: 'Tony Tony Chopper',
            url: './imgs/onepiece/chopper.png',
            descricao: 'Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos.'
        },
        {
            id: '',
            titulo: 'Brook',
            url: './imgs/onepiece/brook.png',
            descricao: 'é o Músico dos Piratas do Chapéu de Palha. Ele é um esqueleto que os Chapéus de Palha encontraram a bordo de um navio fantasma depois de entrarem no Triângulo Florian.'
        },
        {
            id: '',
            titulo: 'Franky',
            url: './imgs/onepiece/franky.png',
            descricao: 'é o carpinteiro dos Piratas do Chapéu de Palha. Ele é um cyborg de 36 anos de Water 7 e foi introduzido na história como o líder da Família Franky.'
        }
    ];
    break;
    case 'marvel':
        cartasDefault = [
            {
                id: '',
                titulo: 'Dr. Estranho',
                url: './imgs/marvel/estranho.jpg',
                descricao: 'serve como o Mago Supremo, o principal protetor da Terra contra ameaças mágicas e místicas. Inspirado por histórias de magia negra e o programa de rádio Chandu, the Magician.'
            },
            {
                id: '',
                titulo: 'Homem-Aranha',
                url: './imgs/marvel/homem-aranha.jpg',
                descricao: 'Peter Parker era um adolescente órfão, tímido e franzino, dedicado aos estudos e com poucos amigos além de seus tios que o criaram. Mas a vida de Peter mudou quando foi picado por uma aranha radioativa.'
            },
            {
                id: '',
                titulo: 'Homem de Ferro',
                url: './imgs/marvel/homem-ferro.jpg',
                descricao: 'o inventor e empresário Tony Stark foi vítima de uma explosão de granada. Stark sobreviveu à explosão mas estilhaços do explosivo se alojaram próximo ao seu coração, ameaçando sua vida.'
            },
            {
                id: '',
                titulo: 'Pantera Negra',
                url: './imgs/marvel/pantera.jpg',
                descricao: 'é o título cerimonial atribuído ao chefe da Tribo Pantera da avançada nação africana de Wakanda. Além de governar o país, ele também é chefe de suas várias tribos.'
            },
            {
                id: '',
                titulo: 'Senhor das Estrelas',
                url: './imgs/marvel/senhor-estrelas.jpg',
                descricao: 'foi concebido como resultado do amor entre a terráquea Meredith Quill e o Imperador Spartoi da época, Json.'
            },
            {
                id: '',
                titulo: 'Thor',
                url: './imgs/marvel/thor.jpg',
                descricao: 'é virtualmente um deus de outra realidade, possuindo vastos poderes. Desta maneira, possui uma enorme força e velocidade sobre-humanas.'
            },
            {
                id: '',
                titulo: 'Dr. Estranho',
                url: './imgs/marvel/estranho.jpg',
                descricao: 'serve como o Mago Supremo, o principal protetor da Terra contra ameaças mágicas e místicas. Inspirado por histórias de magia negra e o programa de rádio Chandu, the Magician.'
            },
            {
                id: '',
                titulo: 'Homem-Aranha',
                url: './imgs/marvel/homem-aranha.jpg',
                descricao: 'Peter Parker era um adolescente órfão, tímido e franzino, dedicado aos estudos e com poucos amigos além de seus tios que o criaram. Mas a vida de Peter mudou quando foi picado por uma aranha radioativa.'
            },
            {
                id: '',
                titulo: 'Homem de Ferro',
                url: './imgs/marvel/homem-ferro.jpg',
                descricao: 'o inventor e empresário Tony Stark foi vítima de uma explosão de granada. Stark sobreviveu à explosão mas estilhaços do explosivo se alojaram próximo ao seu coração, ameaçando sua vida.'
            },
            {
                id: '',
                titulo: 'Pantera Negra',
                url: './imgs/marvel/pantera.jpg',
                descricao: 'é o título cerimonial atribuído ao chefe da Tribo Pantera da avançada nação africana de Wakanda. Além de governar o país, ele também é chefe de suas várias tribos.'
            },
            {
                id: '',
                titulo: 'Senhor das Estrelas',
                url: './imgs/marvel/senhor-estrelas.jpg',
                descricao: 'foi concebido como resultado do amor entre a terráquea Meredith Quill e o Imperador Spartoi da época, Json.'
            },
            {
                id: '',
                titulo: 'Thor',
                url: './imgs/marvel/thor.jpg',
                descricao: 'é virtualmente um deus de outra realidade, possuindo vastos poderes. Desta maneira, possui uma enorme força e velocidade sobre-humanas.'
            }
        ];
    break;
    case 'aleatorios1':
        cartasDefault = [
            {
                id: '',
                titulo: 'Ranger Amarelo',
                url: './imgs/aleatorios/ranger.jpg',
                descricao: 'é uma franquia americana de entretenimento e merchandising construída em torno de uma série de televisão em live-action de super-heróis baseada na franquia japonesa Tokusatsu Super Sentai.'
            },
            {
                id: '',
                titulo: 'Smurf',
                url: './imgs/aleatorios/smurf.jpg',
                descricao: 'é um dos protagonistas do série animada dos Smurfs, que apareceu durante toda sua exibição, e personagem dos quadrinhos.'
            },
            {
                id: '',
                titulo: 'Krusty',
                url: './imgs/aleatorios/krusty.jpg',
                descricao: 'vive como palhaço para desgosto de seu pai. Seu nome verdadeiro é Hershel Krustofsky. Na frente das câmaras é um típico palhaço animador para crianças.'
            },
            {
                id: '',
                titulo: 'Tio Patinhas',
                url: './imgs/aleatorios/tio-patinhas.jpg',
                descricao: 'Tio Patinhas, surgiu nos quadrinhos em dezembro de 1947 em "Natal nas Montanhas", história escrita e desenhada por Carl Barks. Patinhas era um velho barbudo, de óculos e razoavelmente rico.'
            },
            {
                id: '',
                titulo: 'Capitão Planeta',
                url: './imgs/aleatorios/capitao-planeta.jpg',
                descricao: 'é um amálgama consistente dos elementos componentes da natureza do mundo. Ele tem consciência de que não pode resolver os problemas ecológicos eternamente. Representa: A Terra.'
            },
            {
                id: '',
                titulo: 'Buzz Lightyear',
                url: './imgs/aleatorios/buzz.jpg',
                descricao: 'é um patrulheiro do espaço da Aliança intergaláctica e está estacionado no Quadrante Gama, Setor 4. Ele é o capitão da equipe da Aliança Lightyear.'
            },
            {
                id: '',
                titulo: 'Ranger Amarelo',
                url: './imgs/aleatorios/ranger.jpg',
                descricao: 'é uma franquia americana de entretenimento e merchandising construída em torno de uma série de televisão em live-action de super-heróis baseada na franquia japonesa Tokusatsu Super Sentai.'
            },
            {
                id: '',
                titulo: 'Smurf',
                url: './imgs/aleatorios/smurf.jpg',
                descricao: 'é um dos protagonistas do série animada dos Smurfs, que apareceu durante toda sua exibição, e personagem dos quadrinhos. '
            },
            {
                id: '',
                titulo: 'Krusty',
                url: './imgs/aleatorios/krusty.jpg',
                descricao: 'vive como palhaço para desgosto de seu pai. Seu nome verdadeiro é Hershel Krustofsky. Na frente das câmaras é um típico palhaço animador para crianças.'
            },
            {
                id: '',
                titulo: 'Tio Patinhas',
                url: './imgs/aleatorios/tio-patinhas.jpg',
                descricao: 'Tio Patinhas, surgiu nos quadrinhos em dezembro de 1947 em "Natal nas Montanhas", história escrita e desenhada por Carl Barks. Patinhas era um velho barbudo, de óculos e razoavelmente rico."..'
            },
            {
                id: '',
                titulo: 'Capitão Planeta',
                url: './imgs/aleatorios/capitao-planeta.jpg',
                descricao: 'é um amálgama consistente dos elementos componentes da natureza do mundo. Ele tem consciência de que não pode resolver os problemas ecológicos eternamente. Representa: A Terra.'
            },
            {
                id: '',
                titulo: 'Buzz Lightyear',
                url: './imgs/aleatorios/buzz.jpg',
                descricao: 'é um patrulheiro do espaço da Aliança intergaláctica e está estacionado no Quadrante Gama, Setor 4. Ele é o capitão da equipe da Aliança Lightyear.'
            }
        ];
    break;
    case 'aleatorios2':
        cartasDefault = [
            {
                id: '',
                titulo: 'Ciclope',
                url: './imgs/aleatorios/ciclope.jpg',
                descricao: 'foi um dos numerosos mutantes que se uniram para atacar os Inumanos depois que descobriu-se que a Nuvem Terrigen final passou semanas a ser completamente assimilada na atmosfera terrestre.'
            },
            {
                id: '',
                titulo: 'Crash Bandicoot',
                url: './imgs/aleatorios/crash.jpg',
                descricao: 'geneticamente alterado Crash, que luta para impedir o planos do cientista do mal Neo Córtex e seus lacaios. A história do jogo se passa nas fictícias Ilhas Wumpa.'
            },
            {
                id: '',
                titulo: 'Fly',
                url: './imgs/aleatorios/fly.jpg',
                descricao: 'é uma série em mangá de Kōji Inada e Riku Sanjō, lançada em 1991 para a Shonen Jump inspirado na série de vídeo game Dragon Quest sob a supervisão de Yūji Horii, criador da série.'
            },
            {
                id: '',
                titulo: 'O Máscara',
                url: './imgs/aleatorios/mascara.jpg',
                descricao: 'A máscara é uma relíquia simbiótica encontrada no continente africano, que impregna qualquer usuário com a fictícia realidade mágica e impermeabilidade física.'
            },
            {
                id: '',
                titulo: 'Spock',
                url: './imgs/aleatorios/spock.jpg',
                descricao: 'é um personagem da franquia de entretenimento Star Trek. Interpretado primeiramente por Leonard Nimoy na série Star Trek original.'
            },
            {
                id: '',
                titulo: 'Seiya de Pégaso',
                url: './imgs/aleatorios/pegasus.jpg',
                descricao: ' é o titular e principal protagonista do Mangá/Anime Saint Seiya do autor Musami Kurumada e o Cavaleiro de Bronze da constelação de Pégaso do século XX.'
            },
            {
                id: '',
                titulo: 'Ciclope',
                url: './imgs/aleatorios/ciclope.jpg',
                descricao: 'foi um dos numerosos mutantes que se uniram para atacar os Inumanos depois que descobriu-se que a Nuvem Terrigen final passou semanas a ser completamente assimilada na atmosfera terrestre.'
            },
            {
                id: '',
                titulo: 'Crash Bandicoot',
                url: './imgs/aleatorios/crash.jpg',
                descricao: 'geneticamente alterado Crash, que luta para impedir o planos do cientista do mal Neo Córtex e seus lacaios. A história do jogo se passa nas fictícias Ilhas Wumpa.'
            },
            {
                id: '',
                titulo: 'Fly',
                url: './imgs/aleatorios/fly.jpg',
                descricao: 'é uma série em mangá de Kōji Inada e Riku Sanjō, lançada em 1991 para a Shonen Jump inspirado na série de vídeo game Dragon Quest sob a supervisão de Yūji Horii, criador da série.'
            },
            {
                id: '',
                titulo: 'O Máscara',
                url: './imgs/aleatorios/mascara.jpg',
                descricao: 'A máscara é uma relíquia simbiótica encontrada no continente africano, que impregna qualquer usuário com a fictícia realidade mágica e impermeabilidade física.'
            },
            {
                id: '',
                titulo: 'Spock',
                url: './imgs/aleatorios/spock.jpg',
                descricao: 'é um personagem da franquia de entretenimento Star Trek. Interpretado primeiramente por Leonard Nimoy na série Star Trek original.'
            },
            {
                id: '',
                titulo: 'Seiya de Pégaso',
                url: './imgs/aleatorios/pegasus.jpg',
                descricao: ' é o titular e principal protagonista do Mangá/Anime Saint Seiya do autor Musami Kurumada e o Cavaleiro de Bronze da constelação de Pégaso do século XX.'
            }
        ];
    break;
    case 'default':
        cartasDefault = [
            {
                id: '',
                titulo: 'Bulbasaur',
                url: 'carta01.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Loki',
                url: 'carta02.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Luke Skywalker',
                url: 'carta03.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Squirtle',
                url: 'carta04.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Little Mermaid',
                url: 'carta05.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Princess Jasmine',
                url: 'carta06.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Bulbasaur',
                url: 'carta01.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Loki',
                url: 'carta02.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Luke Skywalker',
                url: 'carta03.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Squirtle',
                url: 'carta04.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Little Mermaid',
                url: 'carta05.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Princess Jasmine',
                url: 'carta06.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            }
        ];
        break;
    case 'ingles':
        cartasDefault = [
            {
                id: '',
                titulo: 'Laranja',
                url: './imgs/ingles/laranja.png',
                descricao: 'fruta cÃ­trica suculenta.'
            },
            {
                id: '',
                titulo: 'Ãgua',
                url: './imgs/ingles/agua.png',
                descricao: 'lÃ­quido sem cor nem sabor que se bebe.'
            },
            {
                id: '',
                titulo: 'Peixe',
                url: './imgs/ingles/peixe.png',
                descricao: 'animal aquÃ¡tico.'
            },
            {
                id: '',
                titulo: 'Brincar',
                url: './imgs/ingles/brincar.png',
                descricao: 'jogar, divertir-se.'
            },
            {
                id: '',
                titulo: 'Doce',
                url: './imgs/ingles/doce.png',
                descricao: 'Alimento preparado com aÃ§Ãºcar.'
            },
            {
                id: '',
                titulo: 'Correr',
                url: './imgs/ingles/correr.png',
                descricao: 'Deslocar-se ou mover-se rapidamente.'
            },
            {
                id: '',
                titulo: 'Orange',
                url: './imgs/ingles/laranja.jpg',
                descricao: 'a type of juicy citrus fruit with a thick reddish-yellow skin.'
            },
            {
                id: '',
                titulo: 'Water',
                url: './imgs/ingles/agua.jpg',
                descricao: 'a colourless/colorless, transparent liquid compound of hydrogen and oxygen, having no taste or smell, which turns to steam when boiled and to ice when frozen.'
            },
            {
                id: '',
                titulo: 'Fish',
                url: './imgs/ingles/peixe.jpg',
                descricao: 'a kind of creature that lives in water and breathes through gills.'
            },
            {
                id: '',
                titulo: 'To Play',
                url: './imgs/ingles/brincar.jpg',
                descricao: 'play act.'
            },
            {
                id: '',
                titulo: 'Candy',
                url: './imgs/ingles/doce.jpg',
                descricao: 'food prepared with sugar.'
            },
            {
                id: '',
                titulo: 'To Run',
                url: './imgs/ingles/correr.jpg',
                descricao: 'Move quickly.'
            }
        ];
        break;
    default:
        cartasDefault = [
            {
                id: '',
                titulo: 'Bulbasaur',
                url: 'carta01.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Loki',
                url: 'carta02.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Luke Skywalker',
                url: 'carta03.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Squirtle',
                url: 'carta04.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Little Mermaid',
                url: 'carta05.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Princess Jasmine',
                url: 'carta06.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Bulbasaur',
                url: 'carta01.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Loki',
                url: 'carta02.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Luke Skywalker',
                url: 'carta03.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Squirtle',
                url: 'carta04.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Little Mermaid',
                url: 'carta05.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            },
            {
                id: '',
                titulo: 'Princess Jasmine',
                url: 'carta06.jpg',
                descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
            }
        ];
}

/**
 * Embaralha os elementos de um array.
 * @param {Array} i
 */
const embaralharCartas = (arr) => {
    let novoArray = [];
    while (novoArray.length !== arr.length) {
        let i = Math.floor(Math.random() * arr.length);
        novoArray.indexOf(arr[i]) < 0 ? novoArray.push(arr[i]) : '';
    };
    return novoArray;
};

cartasDefault = embaralharCartas(cartasDefault);


for (let i = 0; i < cartasDefault.length; i++) {
    cartasDefault[i].id = `carta${i}` //adiciona o id das cartas dinamicamente.
    $containerCartas.insertAdjacentHTML('beforeend', //adiciona as cartas na tela.
        `
        <div class='cartas' id=${cartasDefault[i].id}>
            <div class='div-frente-verso front'>
                <img class='img-cartas' src='./imgs/${cartasDefault[i].url}' alt="">
            </div>
            <div class='div-frente-verso back'>
                <div class='img-cartas div-frente-verso'></div>
            </div>
        </div>
    `)
}

let arrayDuasCartas = [];

//adiciona um evento de click às cartas que adiciona/remove a classe flip aos elementos que possuem a classe "div-frente-verso"
for (let i = 0; i < cartasDefault.length; i++) {

    document.querySelector("#carta" + i).addEventListener('click', function () {
        let faces = this.getElementsByClassName('div-frente-verso')
        if (faces[0].classList.contains('flip') && faces[1].classList.contains('flip')) {
            return
        } else {
            faces[0].classList.toggle('flip');
            faces[1].classList.toggle('flip');

            document.querySelector('.section-descricao').innerHTML =
                `
            <img class='img-descricao'
            src="./imgs/${cartasDefault[i].url}"
            alt="">
            <div>
                <h3>${cartasDefault[i].titulo}<h3>
                <p>${cartasDefault[i].descricao}</p>                
            </div>
            `
            verificaPar(i)
        }
    }
    )
}


/**
 * Verifica se os pares de cartas escolhidos pelo usuário são iguais ou não. Verifica também se todos os pares foram encontrados.
 * @param {int} i
 */
function verificaPar(i) {
    arrayDuasCartas.length == 2 ? arrayDuasCartas = [] : '';

    if (arrayDuasCartas.length == 0) {
        arrayDuasCartas.push(cartasDefault[i])
        console.log(arrayDuasCartas)
    } else if (arrayDuasCartas.length == 1) {
        arrayDuasCartas.push(cartasDefault[i])
        let idElemento1 = `#${arrayDuasCartas[0].id}`;
        let idElemento2 = `#${arrayDuasCartas[1].id}`;
        let faceElemento1 = document.querySelector(idElemento1).getElementsByClassName('div-frente-verso');
        let faceElemento2 = document.querySelector(idElemento2).getElementsByClassName('div-frente-verso');
        if ((arrayDuasCartas[0].url.split('.'))[arrayDuasCartas[0].url.split('.').length-2] == (arrayDuasCartas[1].url.split('.'))[arrayDuasCartas[1].url.split('.').length-2]) {
            $audioMatch.play()
            $audioMatch.volume=.15;
            faceElemento1[0].style.opacity = '0.2';
            faceElemento1[1].style.opacity = '0.2';
            faceElemento2[0].style.opacity = '0.2';
            faceElemento2[1].style.opacity = '0.2';

            paresEncontrados++;

            document.querySelector('.pares-encontrados').innerHTML = `Pares encontrados: ${paresEncontrados}/6`
            setTimeout(() => {
                if (paresEncontrados === 6) {
                    $infosNaTela.style.display='block';
                    $audio.pause()
                    $audioWin.play()
                    $audioWin.volume=.5;
                    $h2InfosNaTela.innerHTML=`
                    <section class="nes-container is-dark container-final">
                          <section class="message -left">
                            <img class="nes-bcrikko" src='./imgs/logo_final.png'>
                            <div class="nes-balloon from-left is-dark">
                              <p>                    Fim de Jogo!
                              Seu tempo foi de: ${(mm < 10 ? "0" + mm : mm)}:${(ss < 10 ? "0" + ss : ss)}:${(ms < 10 ? "0" + ms : ms)}.</p>
                            </div>
                          </section>
                            <div class='div-btns-final'>
                                <button onclick="jogarNovamente()" id="btnJogarNovamente"
                                    class="btn-final nes-btn is-warning">Jogar Novamente</button>
                                <button onclick="voltarAoMenuInicial()" id="btnVoltarAoMenuInicial"
                                    class="btn-final nes-btn is-error">Voltar ao Menu Inicial</button>
                            </div>
                      </section>
`;
                    pausar()}}, 1000)
        } else {
            arrayDuasCartas = [];
            setTimeout(() => {
                faceElemento1[0].classList.toggle('flip')
                faceElemento1[1].classList.toggle('flip')
                faceElemento2[0].classList.toggle('flip')
                faceElemento2[1].classList.toggle('flip')
                document.querySelector('.section-descricao').innerHTML = '';
            }, 800)
        }
    }
}


function jogarNovamente(){
    location.reload()
}

function voltarAoMenuInicial(){
    location.href = 'index.html'
}
