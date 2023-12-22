/*
const add = (n1: number, n2: number): number => {
 	return n1 + n2;
};
*/
//공통의 인수와 리턴타입을 가지고 있는 함수는 Interface로 함수의 타입도 지정가능
interface Calc {
	(n1: number, n2: number): number | void;
}

const add: Calc = (n1, n2) => {
	//return n1+n2;
	console.log(n1 + n2);
};

const minus: Calc = (n1, n2) => {
	return n1 - n2;
};

const multiply: Calc = (n1, n2) => {
	return n1 * n2;
};

const divider: Calc = (n1, n2) => {
	return n1 / n2;
};
