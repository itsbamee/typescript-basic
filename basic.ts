//기본타입
let text: string = 'hello';
let num: number = 0;
let isFemale: boolean = 'true';

//참조형 타입
let like: string[] = ['drama', 'music', 'clean'];
let unlike: Array<string> = ['dirty', 'liar', 'war'];
let odd: number[] = [1, 3, 5];
let even: number[] = [2, 4, 6];

//tuple: 배열에 들어가는 타입이 다를 때
let combined: [number, string, boolean] = [3, 'clean', false];
let random: Array<string | number> = [4, 'apple', 5];

//Interface : 객체타입을 key별로 자료형을 지정하기 위한 구조적인 틀 (직접 커스텀 타입을 생성)
interface Student {
	readonly name: string; //해당 타입의 property를 수정불가하게 읽기 전용으로 지정
	age: number;
	isFemale: boolean;
	address?: string; //해당 property를 선택사항으로 지정 가능
}
let student1: Student = {
	name: 'Kirstin',
	age: 35,
	isFemale: true,
	address: 'LA'
};
let student2: Student = {
	name: 'Emily',
	age: 23,
	isFemale: true
};
