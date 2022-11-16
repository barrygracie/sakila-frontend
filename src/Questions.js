import CountryComponent from "./CountryComponent";
import FilmComponent from "./FilmComponent";


export default function Questions(){

	
    const question1 = MakeFilmQuestion();
	const question2 = MakeFilmQuestion();


	//need to rearrange answers------------------------------------

	const questions = [...question1, question2];

    return(questions)
}

function MakeFilmQuestion(){
	//need to change to one api call

    const a = FilmComponent();

	console.log(a);

	
    const question = [
		{
			questionText: 'a[0].title',
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