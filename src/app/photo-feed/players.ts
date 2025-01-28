import { StaticImageData } from "next/image";
import virat from "./photo/vk.jpg";
import abd from "./photo/abd360.jpg";
import thala from "./photo/thala.jpg";
import babar from "./photo/babar.jpg";
import cook from "./photo/cook.jpg";
import hardik from "./photo/hardik.jpg";
import messi from "./photo/messi.jpg";
import heist from "./photo/professor.jpg";
import r7 from "./photo/r7.jpg";
import sunil from "./photo/sunil.jpg";

export type Players = {
  id: string;
  name: string;
  field: string;
  src: StaticImageData;
  location: string;
};

const players: Players[] = [
  {
    id: "1",
    name: "Virat Kohali",
    field: "Cricket",
    src: virat,
    location: "India",
  },
  {
    id: "2",
    name: "AB de Villiers",
    field: "Cricket",
    src: abd,
    location: "South Africa",
  },
  {
    id: "3",
    name: "MS Dhoni",
    field: "Cricket",
    src: thala,
    location: "India",
  },
  {
    id: "4",
    name: "Babar Azam",
    field: "Cricket",
    src: babar,
    location: "Pakistan",
  },
  {
    id: "5",
    name: "A Cook",
    field: "Cricket",
    src: cook,
    location: "England",
  },
  {
    id: "6",
    name: "Hardik Pandya",
    field: "Cricket",
    src: hardik,
    location: "India",
  },
  {
    id: "7",
    name: "Messi",
    field: "Football",
    src: messi,
    location: "Argentina",
  },
  {
    id: "8",
    name: "Sergio Marquina",
    field: "Actor",
    src: heist,
    location: "Spain",
  },
  {
    id: "9",
    name: "C Ronaldo",
    field: "Football",
    src: r7,
    location: "Portugal",
  },
  {
    id: "10",
    name: "Sunil Chhertri",
    field: "Football",
    src: sunil,
    location: "India",
  },
];

export default players;
