import PixelArt from '../images/PixelArt.png';
import TriviaProject from '../images/TriviaProject.png';
import Tunes from '../images/Tunes.png';
import TodoList from '../images/TodoList.png';
import Talker from '../images/TalkerManager.png'
import Blogs from '../images/BlogsAPI.png';
import Store from '../images/StoreManager.png';

export const variables = ['DOM', 'Frontend', 'Backend', 'All'];

const projects = [
  {   
    id: '1',
    name: 'Pixel Art',
    deploy: 'https://natalia-brs.github.io/projeto-pixels-art/',
    image: PixelArt,
    type: 'DOM',
    tech: ['JavaScrip, CSS, HTML'],
    details: `Implementação de uma pagina web que contem uma paleta de cores funcional. Manipulando o DOM 
    (JavaScript), além de HTML para estrutura da pagina e CSS para estilização.`,
    github: 'https://github.com/Natalia-brs/projeto-pixels-art',
  },
  {
    id: '2',
    name: 'Trivia',
    deploy: 'https://jogo-trivia-ten.vercel.app/',
    image: TriviaProject,
    type: 'Frontend',
    tech: ['JavaScrip, React,Redux, RTL, React Router, CSS'],
    details: `O projeto consiste em um jogo de perguntas e respostas, 
    onde um timer que marca o tempo que o usuario tem para responder,
     as respostas certas são  adicionadas em um placar somando a quantidade de 
     pontos do usuario, após o fim do jogo uma tela com o ranking 
     com as pontuaçoes mais altas pode ser consultada. Foi utilizada 
     uma API para realizar a requisição das perguntas, que são geradas aleatoriamente.`,
     github: 'https://github.com/Natalia-brs/jogoTrivia',
  },
  {
    id: '3',
    name: 'Tunes',
    deploy: 'https://music-oyj8wh0qp-natalia-brs.vercel.app/',
    image: Tunes,
    type: 'Frontend',
    tech: ['JavaScrip, React, Props, React Router, Tailwind'],
    details: `Utilizando o conceito de classes, projeto desenvolvido 
    utilizando a API da Apple music e props, onde podemos procurar o 
    artista desejado e listar todos os seus albuns com suas musicas, 
    alem de adicionar as favoritas. É possivel escutar uma intro da 
    musica por um player de audio renderizado na tela.`,
    github: 'https://github.com/Natalia-brs/musicApp'
  },
  {
    id: '4',
    name: 'To Do List',
    deploy: 'https://todo-list-6lodunyej-natalia-brs.vercel.app/',
    image: TodoList,
    type: 'Frontend',
    tech: ['JavaScrip, React, Context API, Vite, React Router, Tailwind'],
    details: `Foi desenvolvido uma to do list onde o usuario é capaz de 
    realizar o login, adicionar e remover atividades da lista e tambem 
    edita-las. Os itens salvos ficam no localStorage, permitindo assim 
    a consulta mesmo após fechar o navegador.`,
    github: 'https://github.com/Natalia-brs/musicApp',
  },
  {
    id: '5',
    name: 'Talk Manager',
    deploy: 'https://github.com/Natalia-brs/talkManager',
    image: Talker,
    type: 'Backend',
    tech: ['Docker, Express, NodeJS'],
    details: `API para controle de palestrantes utilizando funçoes nativas do NodeJS, 
    realizando um CRUD. Com as rotas feitas utlizando express, nele os palestrantes são 
    salvos em arquivo JSON e retornados para o usuario por meio de endpoints. 
    Tambem foi utilizado middlewares para algumas validações.`,
    github: 'https://github.com/Natalia-brs/talkManager',
  },
  {
    id: '6',
    name: 'Blogs API',
    deploy: 'https://github.com/Natalia-brs/blogsSPI',
    image: Blogs,
    type: 'Backend',
    tech: ['Docker, mySQL, NodeJS, Express, Sequelize'],
    details: `Neste projeto desenvolvi uma API e um banco de dados para a produção 
    de conteúdo para um blog! A aplicação roda em Node.js e express usando o banco de 
    dados MySQL e sequelize como ORM para fazer um CRUD de posts.`,
    github: 'https://github.com/Natalia-brs/blogsSPI',
  },
  {
    id: '7',
    name: 'Store Manager',
    deploy: 'https://github.com/Natalia-brs/storeManager',
    image: Store,
    type: 'Backend',
    tech: ['Docker, mySQL, NodeJS, Express, Chai/Sinon'],
    details: `Projeto consiste em uma API de gerenciamento de vendas em que será 
    possível criar, visualizar, deletar e atualizar produtos e vendas. Foram criandos 
    endpoints onde são feitas as requisições para se obter as informações desejadas. 
    A API foi construida seguindo o padrão REST, onde os verbos HTTP são adequados 
    para cada operação, garantindo que os endpoints retornem uma resposta, havendo 
    sucesso nas operações ou não, agrupando e padronizando suas URL em cada recurso 
    e retornando codigos de status corretos.`,
    github: 'https://github.com/Natalia-brs/storeManager',
  },
];

export default projects;
