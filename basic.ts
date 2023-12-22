// const numbers: number[] = [1, 2, 3];
const numbers: Array<number> = [1, 2, 3];
const text: Array<string> = ['a', 'b', 'c'];

//제네릭(Generic)
//공통된 규칙인데 들어가는 자료형만 바뀔 떄
//일일이 타입을 따로 지정하는게 비효율적이므로 타입 지정을 호출할 때
//사용자로 하여금 지정하게 하는 틀

/*
  아래 코드의 경우 배열의 갯수값을 구하고 싶을 때
  똑같은 구조임에도 불구하고 배열에 들어가는 자료형에 타입을 다르게 지정해야 되기 때문에 함수를 또 생성하는 번거로움
*/

//아래와 같이 type을 any로 지정하면 사용가능하나
//any 타입은 우리 type을 지정하지 않았을 때 자동으로 설정되는 값이므로
//컴파일시 에러를 잡지 못함
//제네릭은 정의할 때 타입을 지정하는 것이 아닌 런타임에서 호출단계에 타입을 지정하는 구조
//<타입변수명>

const getLength = <type>(arr: type[]) => {
	return arr.length;
};

console.log(getLength<number>([1, 2, 3]));
console.log(getLength<string>(['a', 'b', 'c']));
console.log(getLength<string | number>([1, 'b', 'c']));
