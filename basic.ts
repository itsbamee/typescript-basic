//함수에 전달되는 인수를 optional하게 지정가능하나
//함수 코드블록안에서 해당 값이 없을 때를 위한 분기처리를 해야됨
const test = (n1: number, n2: number, n3?: number): number => {
	// const result = n1 + n2 + n3;
	// const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
	// 위의 식의 코드 가독성이 안 좋으므로 아래처럼 ||를 이용해서 값이 없을 때 대체값 처리
	// null병합 연산자 : 대체값 처리시 좌항의 값이 undefined, null 일때만 대체값 처리
	// || 연산자 : 좌항의 값이 falsy 인식되는 모든값을 대체처리 함
	const result = n1 + n2 + (n3 || 0);
	return result;
};
console.log(test(1, 2));

const inform = (txt1?: string): void => {
	// console.log(`안녕하세요 제 이름은 ${txt1 || '홍길동'}입니다.`);
	console.log(`안녕하세요 제 이름은 ${txt1 ?? '홍길동'}입니다.`);
};
//인수로 의도적으로 빈문자같이 false로 인식되는 값을 안쪽 코드에서 활용하고 싶을 때
//null병합 연산자를 이용하면 예외처리가 되지 않으면서 해당 값을 안쪽에서 활용 가능

inform(''); //'',0
