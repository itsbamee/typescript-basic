// const numbers: number[] = [1, 2, 3];
const numbers = [1, 2, 3];
const text = ['a', 'b', 'c'];
//제네릭(Generic)
//공통된 규칙인데 들어가는 자료형만 바뀔 떄
//일일이 타입을 따로 지정하는게 비효율적이므로 타입 지정을 호출할 때
//사용자로 하여금 지정하게 하는 틀
/*
  아래 코드의 경우 배열의 갯수값을 구하고 싶을 때
  똑같은 구조임에도 불구하고 배열에 들어가는 자료형에 타입을 다르게 지정해야 되기 때문에 함수를 또 생성하는 번거로움
*/
const getLength = (arr) => {
    return arr.length;
};
const getLength2 = (arr) => {
    return arr.length;
};
console.log(getLength([1, 2, 3]));
console.log(getLength2(['a', 'b', 'c']));
