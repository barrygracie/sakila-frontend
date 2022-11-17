import { useEffect, useState } from "react";
import filmComponent from "./FilmComponent";
import Quiz from "./quiz";

let questions = [];

export default function DescriptionQuiz() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function genDQuiz() {
      questions = await generateDQuiz();
      setLoading(false);
    }
    genDQuiz();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <Quiz questions={questions} />;
}

async function generateDQuiz() {

  const question1 = await makeDQuestion();
  const question2 = await makeDQuestion();
  const question3 = await makeDQuestion();
  const question4 = await makeDQuestion();
  const question5 = await makeDQuestion();

  const questions = [question1, question2, question3, question4, question5];

  return questions;
}

async function makeDQuestion() {

  const allFilms = await filmComponent();

  const f1 = allFilms.slice(0, 1).pop();
  const f2 = allFilms.slice(1, 2).pop();
  const f3 = allFilms.slice(2, 3).pop();
  const f4 = allFilms.slice(3, 4).pop();


  const question = {
    questionText: f1.description,
    answerOptions: [
      { answerText: f1.title, isCorrect: true },
      { answerText: f2.title, isCorrect: false },
      { answerText: f3.title, isCorrect: false },
      { answerText: f4.title, isCorrect: false },
    ],
  };
  
  //basic shuffle of answers so its not always a that is right

  question.answerOptions.sort(() => (Math.random() > .5) ? 1 : -1);

  return question;
}