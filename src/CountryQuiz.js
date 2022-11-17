import { useEffect, useState } from "react";
import countryComponent from "./CountryComponent";
import Quiz from "./quiz";

let questions = [];

export default function CountryQuiz() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function genCQuiz() {
      questions = await generateCQuiz();
      setLoading(false);
    }
    genCQuiz();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <Quiz questions={questions} />;
}

async function generateCQuiz() {

  const question1 = await makeCountryQuestion();
  const question2 = await makeCountryQuestion();
  const question3 = await makeCountryQuestion();
  const question4 = await makeCountryQuestion();
  const question5 = await makeCountryQuestion();

  const questions = [question1, question2, question3, question4, question5];

  return questions;
}

async function makeCountryQuestion() {

  const allCountry = await countryComponent();

  const c1 = allCountry.slice(0, 1).pop();
  const c2 = allCountry.slice(1, 2).pop();
  const c3 = allCountry.slice(2, 3).pop();
  const c4 = allCountry.slice(3, 4).pop();

  const randomIndex = Math.floor(Math.random() * c1.city.length);

  const city = c1.city[randomIndex];

  console.log(city.city);
  console.log(c2);
  console.log(c3);
  console.log(c4);


  const question = {
    questionText: city.city,
    answerOptions: [
      { answerText: c1.country, isCorrect: true },
      { answerText: c2.country, isCorrect: false },
      { answerText: c3.country, isCorrect: false },
      { answerText: c4.country, isCorrect: false },
    ],
  };
  
  //basic shuffle of answers so its not always a that is right

  question.answerOptions.sort(() => (Math.random() > .5) ? 1 : -1);

  return question;
}