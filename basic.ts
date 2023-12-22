//같은 타입으로 인수가 전달되긴 하지만 인수의 갯수를 산정하기 힘들 때 rest 파라미터 타입처리
interface Calc {
	(...n: number[]): number;
}

const add: Calc = (n1, n2) => {
	return n1 + n2;
};

console.log(add(2, 4));
console.log(add(2, 3, 4));
console.log(add(1, 2, 3, 4, 5, 6, 7));
