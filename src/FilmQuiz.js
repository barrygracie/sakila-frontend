import CountryComponent from "./CountryComponent";
import FilmComponent from "./FilmComponent";
import Quiz from "./quiz";

	export default function FilmQuiz(){

		return(Quiz(GenerateFQuiz()));
	}


 	function GenerateFQuiz(){

	
    const question1 = MakeFilmQuestion();
	const question2 = MakeFilmQuestion();


	//need to rearrange answers------------------------------------

	const questions = [...question1, question2];

    return(questions)
}

	function MakeFilmQuestion(){
	//need to change to one api call

    const allFilms = FilmComponent();

	const f1 = allFilms.slice(0,1).pop();

	console.log(f1);

	
    const question = [
		{
			questionText: 'f1.title',
			answerOptions: [
				{ answerText: 'b.description', isCorrect: true },
				{ answerText: 'c.description', isCorrect: false },
				{ answerText: 'a.description', isCorrect: false },
				{ answerText: 'a.description', isCorrect: false },
			],
		}
	];

	//need to check the sort

	//question.answerOptions.sort(function(){return 0.5 - Math.random()});

	return(question);

}