import { useEffect, useState } from "react";
import filmComponent from "./FilmComponent";
import Quiz from "./quiz";

let questions = [];

export default function FilmQuiz() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function genFQuiz() {
      questions = await generateFQuiz();
      setLoading(false);
    }
    genFQuiz();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <Quiz questions={questions} />;
}

async function generateFQuiz() {

  const question1 = await makeFilmQuestion();
  const question2 = await makeFilmQuestion();
  const question3 = await makeFilmQuestion();
  const question4 = await makeFilmQuestion();
  const question5 = await makeFilmQuestion();

  const questions = [question1, question2, question3, question4, question5];

  return questions;
}

async function makeFilmQuestion() {

  const allFilms = await filmComponent();

  const f1 = allFilms.slice(0, 1).pop();
  const f2 = allFilms.slice(1, 2).pop();
  const f3 = allFilms.slice(2, 3).pop();
  const f4 = allFilms.slice(3, 4).pop();


  const question = {
    questionText: f1.title,
    answerOptions: [
      { answerText: f1.description, isCorrect: true },
      { answerText: f2.description, isCorrect: false },
      { answerText: f3.description, isCorrect: false },
      { answerText: f4.description, isCorrect: false },
    ],
  };
  
  //basic shuffle of answers so its not always a that is right

  question.answerOptions.sort(() => (Math.random() > .5) ? 1 : -1);

  return question;
}