import PixelArt from '../images/PixelArt.png';
import TriviaProject from '../images/TriviaProject.png';
import Tunes from '../images/Tunes.png';
import TodoList from '../images/TodoList.png';

export const variables = ['DOM', 'Frontend', 'Backend', 'All'];

const projects = [
  {
    name: 'Pixel Art',
    deploy: 'https://natalia-brs.github.io/projeto-pixels-art/',
    image: PixelArt,
    type: 'DOM',
    tech: ['JavaScrip, CSS, HTML'],
  },
  {
    name: 'Trivia',
    deploy: 'https://jogo-trivia-ten.vercel.app/',
    image: TriviaProject,
    type: 'Frontend',
    tech: ['JavaScrip, React,Redux, RTL, React Router, CSS'],
  },
  {
    name: 'Tunes',
    deploy: 'https://music-oyj8wh0qp-natalia-brs.vercel.app/',
    image: Tunes,
    type: 'Frontend',
    tech: ['JavaScrip, React, Props, React Router, Tailwind'],
  },
  {
    name: 'To Do List',
    deploy: 'https://todo-list-6lodunyej-natalia-brs.vercel.app/',
    image: TodoList,
    type: 'Frontend',
    tech: ['JavaScrip, React, Context API, Vite, React Router, Tailwind'],
  },
  {
    name: 'Talk Manager',
    deploy: 'https://github.com/Natalia-brs/talkManager',
    type: 'Backend',
    tech: ['Docker, Express, NodeJS'],
  },
  {
    name: 'Blogs API',
    deploy: 'https://github.com/Natalia-brs/blogsSPI',
    type: 'Backend',
    tech: ['Docker, mySQL, NodeJS, Express, Sequelize'],
  },
  {
    name: 'Store Manager',
    deploy: 'https://github.com/Natalia-brs/storeManager',
    type: 'Backend',
    tech: ['Docker, mySQL, NodeJS, Express, Chai/Sinon'],
  },
];

export default projects;
