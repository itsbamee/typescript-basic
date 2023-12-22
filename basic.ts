type score = 'A' | 'B' | 'C' | 'D' | 'F';
type grade = 'first' | 'second' | 'third' | 'fourth';
// type Grade = Record<1 | 2 | 3 | 4, score>;

type OptionsFlags<Type> = {
	[Property in keyof Type]: score;
};

interface Student {
	readonly name: string;
	age: number;
	isFemale: boolean;
	address?: string;
	grades: { [key in Grade]: score };
	//property의 키로 들어오는 자료형은 알고있지만 key의 이름을 산정할 수 없을 때
}

let student1: Student = {
	name: 'Andy',
	age: 40,
	isFemale: false,
	second: 'B'
};
