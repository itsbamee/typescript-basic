//함수에 전달되는 인수를 optional하게 지정가능하나
//함수 코드블록안에서 해당 값이 없을 때를 위한 분기처리를 해야됨
const test = (n1, n2, n3) => {
    // const result = n1 + n2 + n3;
    const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
    return result;
};
console.log(test(1, 2, 3));
