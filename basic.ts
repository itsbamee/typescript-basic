//인터페이스를 지정한 객체로 구성된 배열 타입 지정
interface Student {
	name: string;
	age: number;
	isFemale: boolean;
	address?: string;
}

//인터페이스로 지정된 객체로 구성된 배열 타입 지정 (실무에서 제일 많이 쓰이는 패턴 - api 리턴 값)
const data: Student[] = [
	{ name: 'Hanna', age: 20, isFemale: true, address: 'Seoul' },
	{ name: 'Emily', age: 30, isFemale: false },
	{ name: 'Michael', age: 40, isFemale: false }
];

//단순 문자타입으로 구성된 배열타입 지정
const data2: string[] = ['red', 'green', 'blue'];

const getArrayInfo = <type>(arr: type[]) => {
	console.log(arr);
};

const getTest = (arr: number[]) => {
	console.log(arr);
};

//제네릭으로 호출 시 인터페이스 타입 지정해서 호출
getArrayInfo<Student>(data);
getArrayInfo<string>(data2);

const custom = [
	{ name: 'Paul', age: '30', isFemale: false },
	{ name: 'Mark', age: 23, isFemale: false }
];

//아래와 같이 함수 호출시 Generic으로 지정한 타입과 다른 값이 들어가면 에러발생
//잠재적인 오류를 미연에 방지 가능 (제네릭을 쓰는 이유)

getArrayInfo<Student>(custom);
// getArrayInfo(Student[]);

//아래 코드에서는 숫자값만 담긴 배열이 인수로 넘어가도록 제네릭을 설정했지만
//문자값이 포함되어 있는 배열을 인수로 전달해서 제네릭이 호출 시 에러 발생

const custom2 = [1, 2, '3'];
getArrayInfo<number>(custom2);
// getArrayInfo(number[])
