import CountryComponent from "./CountryComponent";
import FilmComponent from "./FilmComponent";


export default function Questions(){

	//need an error catch

    const a = FilmComponent();
	const b = FilmComponent();
	const c = FilmComponent();
	const d = FilmComponent();
	

	console.log(a.title);
	console.log(b.title);
	console.log(c.title);
	console.log(d.title);

    const question = [
		{
			questionText: a.title,
			answerOptions: [
				{ answerText: a.description, isCorrect: true },
				{ answerText: b.description, isCorrect: false },
				{ answerText: c.description, isCorrect: false },
				{ answerText: d.description, isCorrect: false },
			],
		},
	];

	const questions = [...question,{
		questionText: a.title,
		answerOptions: [
			{ answerText: a.description, isCorrect: true },
			{ answerText: b.description, isCorrect: false },
			{ answerText: c.description, isCorrect: false },
			{ answerText: d.description, isCorrect: false },
		],
	}];



    return(questions)
}