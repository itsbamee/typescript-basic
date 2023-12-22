//인터페이스로 지정된 객체로 구성된 배열 타입 지정 (실무에서 제일 많이 쓰이는 패턴 - api 리턴 값)
const data = [
    { name: 'Hanna', age: 20, isFemale: true, address: 'Seoul' },
    { name: 'Emily', age: 30, isFemale: false },
    { name: 'Michael', age: 40, isFemale: false }
];
//해당 인터페이스의 배열값 뿐 아니라 인터페이스 객체 자체도 전달받도록 유니온 타입 지정
const getInfo = (arr) => {
    console.log(arr);
};
//제네릭으로 호출 시 인터페이스 타입 지정해서 호출
getInfo(data);
//아래처럼 배열이 아닌 student 타입의 객체로 인수로 전달가능
getInfo(data[0]);
