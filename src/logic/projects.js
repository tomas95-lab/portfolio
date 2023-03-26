import pr1 from '../assets/pr1.png';
import ig from '../assets/ig.png';
import poke from '../assets/poke.png';
import tic from '../assets/tic.png';
import qr from '../assets/qr.png';
import weather from '../assets/weather.png';
import calc from '../assets/calc.png';
import unplash from '../assets/unplash.png';
import codeLive from '../assets/CodeLive.png';

import html5 from '../assets/logoHTML.svg';
import css from '../assets/logoCSS.svg';
import js from '../assets/logoJS.svg';
import react from '../assets/logoReact.svg';

export var projects = [
    {
        name: "Rock Paper and Scissors",
        description: "This is a the classic game of Rock paper and scissors.",
        languagesPrograms: [ html5, css, js ],
        github: "https://github.com/tomas95-lab/rock-paper-scissors",
        live: "https://tomas95-lab.github.io/rock-paper-scissors/",
        img: pr1
    },
    {
        name: "Instagram clone",
        description: "Instagram clone",
        languagesPrograms: [ html5, css, js ],
        github: "https://github.com/tomas95-lab/InstagramClone",
        live: "https://tomas95-lab.github.io/InstagramClone/",
        img: ig

    },
    {
        name: "Pokedex",
        description: "Pokedex using Pokemon Api.",
        languagesPrograms: [ html5, css, js ],
        github: "https://github.com/tomas95-lab/pokedex",
        live: "https://tomas95-lab.github.io/pokedex/index.html",
        img: poke

    },
    {
        name: "Qr maker",
        description: "This is a qr generator, here you will can make a qr with a text.",
        languagesPrograms: [ html5, css, js ],
        github: "https://github.com/tomas95-lab/qr-generator.git",
        live: "https://glistening-malabi-933646.netlify.app/",
        img: qr

    },
    {
        name: "Code Live (beta)",
        description: "This is an online code editor where you can write, edit, and preview HTML, CSS, and JavaScript code in real- time.",
        languagesPrograms: [ html5, css, js ],
        github: "https://github.com/tomas95-lab/codeLive",
        live: "https://comforting-begonia-dea919.netlify.app",
        img: codeLive

    },
    {
        name: "Tic-Tac-Toe",
        description: "This is a simple tic-tac-toe game!",
        languagesPrograms: [ react, css, js ],
        live: "https://superlative-baklava-7b8122.netlify.app/",
        img: tic

    },
    {
        name: "Weather App",
        description: "A weather app for your city that consumes the OpenWeather api",
        languagesPrograms: [ react, css, js ],
        live: "https://weather-api-d3e5.vercel.app/",
        img: weather
    },
    {
        name: "Calculator",
        description: "This is a simple calcultor made with React Js.",
        languagesPrograms: [ react, css, js ],
        live: "https://meek-speculoos-efcca0.netlify.app/",
        img: calc

    },
    {
        name: "Unplash",
        description: "This is an example homepage created using React and responsive design techniques.",
        languagesPrograms: [ html5, css, js ],
        github: "https://github.com/tomas95-lab/unplashApp",
        live: "https://cosmic-medovik-8405da.netlify.app",
        img: unplash
    },

];