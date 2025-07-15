// 간단한 계산기 함수들
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('0으로 나눌 수 없습니다');
    }
    return a / b;
}

// 메인 실행 부분
if (require.main === module) {
    console.log('계산기 앱이 시작되었습니다!');
    console.log('2 + 3 =', add(2, 3));
    console.log('10 - 4 =', subtract(10, 4));
    console.log('5 * 6 =', multiply(5, 6));
    console.log('15 / 3 =', divide(15, 3));
}

// 테스트를 위해 함수들 내보내기
module.exports = { add, subtract, multiply, divide };
