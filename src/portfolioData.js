import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiRedux,
  SiHtml5,
} from "react-icons/si";

const IMAGEs = {
  numberGuesser: require("./assets/imgs/NumberGuesser.jpeg"),
  weatherApp: require("./assets/imgs/WeatherApp.jpeg"),
  todoApp: require("./assets/imgs/TodoApp.jpeg"),
  githubFinder: require("./assets/imgs/GithubFinder.png"),
};

export const MY_SKILLS = [
  {
    id: 1,
    name: "React Native",
    icon: SiReact,
  },
  {
    id: 2,
    name: "Expo",
    icon: SiExpo,
  },
  {
    id: 3,
    name: "React JS",
    icon: SiReact,
  },
  {
    id: 4,
    name: "Redux",
    icon: SiRedux,
  },
  {
    id: 5,
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: 6,
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: 7,
    name: "CSS",
    icon: SiCss3,
  },
  {
    id: 8,
    name: "HTML",
    icon: SiHtml5,
  },
];

export const MY_WORK = [
  {
    id: 1,
    name: "Github Finder",
    image: IMAGEs.githubFinder,
    link: "https://github.com/thekevinportela/GithubFinderRN",
  },
  {
    id: 2,
    name: "Weather App",
    image: IMAGEs.weatherApp,
    link: "https://github.com/thekevinportela/weather-app",
  },
  {
    id: 3,
    name: "Number Guesser",
    image: IMAGEs.numberGuesser,
    link: "https://github.com/thekevinportela/NumberGuesser",
  },
  {
    id: 4,
    name: "Todo App",
    image: IMAGEs.todoApp,
    link: "https://github.com/thekevinportela/todo-app",
  },
];
