const { add, subtract, multiply, divide } = require('../src/app');

function runTests() {
    console.log('테스트 시작...');
    
    // 덧셈 테스트
    console.log('덧셈 테스트:', add(2, 3) === 5 ? '✅ 통과' : '❌ 실패');
    
    // 뺄셈 테스트
    console.log('뺄셈 테스트:', subtract(10, 4) === 6 ? '✅ 통과' : '❌ 실패');
    
    // 곱셈 테스트
    console.log('곱셈 테스트:', multiply(5, 6) === 30 ? '✅ 통과' : '❌ 실패');
    
    // 나눗셈 테스트
    console.log('나눗셈 테스트:', divide(15, 3) === 5 ? '✅ 통과' : '❌ 실패');
    
    // 0으로 나누기 테스트
    try {
        divide(10, 0);
        console.log('0으로 나누기 테스트: ❌ 실패 (예외가 발생해야 함)');
    } catch (error) {
        console.log('0으로 나누기 테스트: ✅ 통과 (예외 발생)');
    }
    
    console.log('모든 테스트 완료!');
}

runTests();
