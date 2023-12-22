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

//제네릭으로 호출 시 인터페이스 타입 지정해서 호출
getArrayInfo<Student>(data);
getArrayInfo<string>(data2);
