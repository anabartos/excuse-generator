/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //let randomNumber = Math.random()*10;
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  //write your code here
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoum = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possesion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];
  let image = [
    "https://picsum.photos/id/1/367/267",
    "https://picsum.photos/id/1010/367/267",
    "https://picsum.photos/id/1027/367/267",
    "https://picsum.photos/id/1036/367/267"
  ];

  let pronoumIndex = Math.floor(Math.random() * pronoum.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  let imageIndex = Math.floor(Math.random() * image.length);

  document.querySelector(
    "#image"
  ).innerHTML = `<img src="${image[imageIndex]}"/>`;
  return (
    pronoum[pronoumIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possesion[possesionIndex] +
    " " +
    where[whereIndex]
  );
};
