import cienAniosImage from "../assets/images/books/cien-anos-de-soledad.jpg";
import donQuijote from "../assets/images/books/don-quijote-de-la-mancha.jpg";
import ficciones from "../assets/images/books/ficciones.jpg";
import sombraViento from "../assets/images/books/la-sombra-del-viento.jpg";
import tiemposColera from "../assets/images/books/el-amor-en-los-tiempos-del-colera.jpg";
import rayuela from "../assets/images/books/rayuela.jpg";
import pedroParamo from "../assets/images/books/pedro-paramo.jpg";
import detectivesSalvajes from "../assets/images/books/los-detectives-salvajes.jpg";
import casaEspiritus from "../assets/images/books/la-casa-de-los-espiritus.jpg";
import tregua from "../assets/images/books/la-tregua.jpg";

const books = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    year: 1967,
    publisher: "Editorial Sudamericana",
    country: "Colombia",
    price: 19.99,
    image: cienAniosImage,
  },
  {
    id: 2,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    year: 1605,
    publisher: "Francisco de Robles",
    country: "España",
    price: 24.99,
    image: donQuijote,
  },
  {
    id: 3,
    title: "Ficciones",
    author: "Jorge Luis Borges",
    year: 1944,
    publisher: "Editorial Sur",
    country: "Argentina",
    price: 17.49,
    image: ficciones,
  },
  {
    id: 4,
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    year: 2001,
    publisher: "Planeta",
    country: "España",
    price: 21.99,
    image: sombraViento,
  },
  {
    id: 5,
    title: "El amor en los tiempos del cólera",
    author: "Gabriel García Márquez",
    year: 1985,
    publisher: "Editorial Oveja Negra",
    country: "Colombia",
    price: 18.99,
    image: tiemposColera,
  },
  {
    id: 6,
    title: "Rayuela",
    author: "Julio Cortázar",
    year: 1963,
    publisher: "Editorial Losada",
    country: "Argentina",
    price: 22.49,
    image: rayuela,
  },
  {
    id: 7,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    year: 1955,
    publisher: "Editorial Fondo de Cultura Económica",
    country: "México",
    price: 14.99,
    image: pedroParamo,
  },
  {
    id: 8,
    title: "Los detectives salvajes",
    author: "Roberto Bolaño",
    year: 1998,
    publisher: "Anagrama",
    country: "Chile",
    price: 23.49,
    image: detectivesSalvajes,
  },
  {
    id: 9,
    title: "La casa de los espíritus",
    author: "Isabel Allende",
    year: 1982,
    publisher: "Editorial Plaza & Janés",
    country: "Chile",
    price: 20.99,
    image: casaEspiritus,
  },
  {
    id: 10,
    title: "La tregua",
    author: "Mario Benedetti",
    year: 1960,
    publisher: "Editorial ALDUS",
    country: "Uruguay",
    price: 16.49,
    image: tregua,
  },
];

export default books;
