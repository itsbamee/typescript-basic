//인터페이스로 지정된 객체로 구성된 배열 타입 지정 (실무에서 제일 많이 쓰이는 패턴 - api 리턴 값)
var data = [
    { name: 'Hanna', age: 20, isFemale: true, address: 'Seoul' },
    { name: 'Emily', age: 30, isFemale: false },
    { name: 'Michael', age: 40, isFemale: false }
];
//단순 문자타입으로 구성된 배열타입 지정
var data2 = ['red', 'green', 'blue'];
var getArrayInfo = function (arr) {
    console.log(arr);
};
//제네릭으로 호출 시 인터페이스 타입 지정해서 호출
getArrayInfo(data);
getArrayInfo(data2);
