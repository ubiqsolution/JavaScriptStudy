'use strict'; // 에러 검사를 위해서 사용합니다.

// 자바스크립트 스터디!!

// 라인 끝에 꼭!!! ; 붙이기!!!

// # 변수
// 첫째, 변수는 문자와 숫자, $와 _만 사용
// 둘째, 첫글자는 숫자가 될 수 없습니다.
// 셋째, 예약어는 사용할 수 없습니다. let let = 99; X
// 넷째, 가급적 상수는 대문자로 알려주세요. const MAX_SIZE = 99;
// 다섯째, 변수명은 읽기 쉽고 이해할 수 있게 선언 let a = 1; / let userNumber = 3;

// 자바스크립트에서 변수를 선언할때는,
// 변하지 않는 값은 const,
// 변할 수 있는 값은 let 으로 선언하세요.

// let name = "si gi kim";
// let age = 47;
// const PI = 3.14;
// const SPEED_LIMIT = 30;
// const BIRTH_DAY = "2022-01-01";

// alert(name);
// console.log(name, age, PI, SPEED_LIMIT, BIRTH_DAY);

// 자료형
// # 문자형 String

// const name1 = "si gi kim";
// const name2 = 'si gi kim';
// const name3 = `si gi kim`;

// const massage = "I'm a boy.";
// const massage2 = 'I\'m a boy.';

// const massage3 = `My name is ${name}`;
// console.log(massage3);

// const massage4 = `나는 ${40 + 7}살 입니다.`;
// console.log(massage4);

// # 숫자형 Number

// const age = 30;
// const PI = 3.14;

// console.log(1 + 2); // 더하기
// console.log(10 - 2); // 빼기
// console.log(3 * 2); // 곱하기
// console.log(6 / 3); // 나누기
// console.log(6 % 4); // 나머지

// const name = "Mike";
// const y = name / 2;

// console.log(y);
// NaN = Not a number

// # Boolean

// const a = true; // 참
// const b = false; // 거짓

// const name = "Mike";
// const age = 30;

// console.log(name == 'Mike');
// console.log(age > 40);

// # null 과 undefined

// let age; // undefined 변수 값 미할당
// let user = null // user 는 존재하지 않는다.
// console.log(age);

// # 객체형
// # 심볼형

// # typeof 연산자 / 파이썬의 type()

// const name = "Mike";

// console.log(typeof 3); // 숫자
// console.log(typeof name); // 문자
// console.log(typeof true); // boolean
// console.log(typeof "xxx"); // 문자
// console.log(typeof null); // 오브젝트 null은 객체가 아님!
// console.log(typeof undefined); // undefined

// const massage3 = `My name is ${name}`;
// console.log(massage3);

// const massage4 = "My name is ${name}"; // `` 아니 "" 사용시 변수명 노출 주의!!
// console.log(massage4);

// const name = "Mike";

// const a = "나는 ";
// const b = " 입니다.";

// console.log(a + name +b);

// const age = 30; // Number
// console.log(a + age + "살" + b);

// # alert 알려줌 메세지 팝업!
// const name = "Mike";
// alert(name);

// # prompt 입력 받음
// const name = prompt("이름을 입력하세요.");
// alert("환영합니다. " + name + "님");

// const name = prompt("이름을 입력하세요.");
// alert(`안녕하세요, ${name}님. 환영합니다.`);

// const name = prompt("이름을 입력하세요."); // 이름을 입력하지 않고 취소를 누르면 null 값 적용.
// console.log(name);

// const name = prompt("예약일을 입력해주세요.", "2022-03-");
// console.log(name);

// # confirm 확인 받음
// const isAdult = confirm("당신은 성인 입니까?");
// console.log(isAdult);

// # Type 형 변환
// String() 문자형으로 변환
// Number() 숫자형으로 변환
// Boolean() 불린형으로 변환

// 형 변환 예제
// const mathScore = prompt("수학 몇점: "); // prompt 입력 받은 값은 무조건 문자형.
// const engScore = prompt("영어 몇점: "); // prompt 입력 받은 값은 무조건 문자형.
// "3060" / 2 = 1530
// "6" / "2" = 3 자동 형변환

// const mathScore = 30;
// const engScore = 60;
// const result = (mathScore + engScore) / 2; // 괄호 안이 먼저 계산됨.

// console.log(result);

// # 명시적 형변환 - String()
// console.log(
// String(3),
// String(true),
// String(false),
// String(null),
// String(undefined)
// )

// # 명시적 형변환 - Number()
// console.log(
// Number("1234"), // 문자형 1234 가 숫자로 변환
// Number(true), // true = 1 으로 변환
// Number(false) // false = 0 으로 변환
// )

// # 명시적 형변환 - Boolean()
// false - 숫자 0, 빈 문자열 '', null, undefined, NaN

// console.log(
// Boolean(0),
// Boolean(""),
// Boolean(null),
// Boolean(undefined),
// Boolean(NaN)
// )

// 주의사항 - 아래 내용은 그냥 외워야함
// Number(null) -> 0 
// Number(undefined) -> NaN

// 주의사항 - 아래 내용은 그냥 외워야함
// Boolean(0) -> false
// Boolean('0') -> true

// Boolean('') -> false
// Boolean(' ') -> true

// # 기본 연산자
// + - * / % 더하기, 빼기, 곱하기, 나누기, 나머지

// 나머지(%)를 어디에 쓸까?
// 홀수: X % 2 = 1
// 짝수: Y % 2 = 0

// 어떤 값이 들어와도 5를 넘기면 안돼
// X % 5 = 0~4 사이의 값만 반환

// const num = 2**3; // 2의 3승
// console.log(num); // 8

// 우선 순위
// * / > + - (* / 우선순위)

// 연산자 줄여서 쓰기

// let num = 10;
// num = num + 5;
// num += 5;
// num *= 5;
// num -= 5;
// num %= 5;
// console.log(num);

// 증가 연산자, 감소 연산자
// let num = 10;
// let result = num++; // 증가 시키기 전 값을 result에 저장
// let result = ++num; // num = num + 1; 증가 시킨 값을 result에 저장
// num++;
// num--;
// console.log(result);

// # 비교 연산자
// <, >, <=, >=, ==, !=
// a != 3 // true or false
// console.log(10 > 5); // true
// console.log(10 == 5); // false 동등연산자
// console.log(10 != 5); // true
// console.log(10 < 5); // false

// 동등연산자
// const a = 1;
// const b = "1";
// console.log(a == b); // true
// console.log(a === b); // type 까지 비교 === 일치 연산자

// # 조건문
// if, else, else if
// 추가요구사항:
// 19살이면 수능 잘치세요 라는 문구를 보여주세요.
// age === 19

// const age = 19;

// if(age > 19){
//     console.log('환영합니다.');
// }

// if(age <= 19){
//    console.log('안녕히 가세요.');
// }

// console.log('---------------------------');

// if(age > 19){ // if문이 true 일 경우 else 다음줄 실행.
//     console.log('환영합니다.');
// } else if(age === 19){
//     console.log('수능 잘치세요.');
// } else {
//     console.log('안녕히 가세요.');
// }

// console.log('---------------------------');

// # 논리 연산자(AND, OR, NOT)
// && AND, || OR, ! NOT

// || (OR) 여러개 중 하나라도 true 이면 true
// 즉, 모든값이 false 일때만 false 를 반환

// && (AND) 모든값이 true 면 true
// 즉, 하나라도 false 면 false 를 반환

// ! (NOT) true 면 false
// false 면 true

// 스티브잡스는 한국인 이거나 || OR, 남자이다. true
// 스티브잡스는 한국인이거나 && AND, 남자이다. false
// 스티브잡스는 한국인이거나 ! NOT, 남자이다. false

// 평가
// OR는 첫번째 true를 발견하는 즉시 평가를 멈춤
// AND는 첫번째 false를 발견하는 즉시 평가를 멈춤

// 운전면허(전체 군인의 80%)가 있고 시력(전체 군인의 60%)이 좋은 여군(전체 군인의 7%)을 찾는 프로그램을 제작하시오.
// 순서도 -> 여군인데 시력이 좋고 운전면허가 있는 사람 // 프로그램 작성하기 쉬움(성능 최적화)

// OR
// 이름이 TOM 이거나, 성인이면 통과
// const name = 'Mike';
// const age = 30;

// if(){}
// if(name === 'Tom' || age > 19){
//     console.log('통과');
// }

// AND
// 이름이 Mike 이고, 성인이면 통과
// const name = 'Mike';
// const age = 30;

// if(){}
// if(name === 'Mike' && age > 19){
//     console.log('통과');
// } else {
//     console.log('돌아가.');
// }

// NOT
// 나이를 입력받아 성인 아니면 돌아가라고... 

// const age = prompt('나이가..?');
// const isAdult = age > 19;

// if(!isAdult){
//     console.log('돌아가..');
// } else {
//     console.log('통과');
// }

// console.log('---------------------------');

// 우선 순위 AND -> OR -> NOT
// 남자이고, 이름이 Mike 이거나 성인이면 통과

//const gender = 'F';
// const gender = 'M';
// const name = 'Jane';
// const isAdult = true;

// // if(gender === 'M' && name === 'Mike' || isAdult){
// // if((gender === 'M' && name === 'Mike') || isAdult){ // 위와 동일한 내용임.
// if(gender === 'M' && (name === 'Mike' || isAdult)){ // 우선순위 () 로 변경 
//     console.log('통과')
// } else {
//     console.log('돌아가.')
// }

// # 반복문(for, while, do while)
// for 동일한 작업을 여러번 반복
// let i = 0 초기값, i < 10 조건(false가 되면 멈춤), i++ 증가식(코드 실행 후 작업)
// for (let i = 0; i < 10; i++){ 
    // 반복할 코드
// }
// 위 for문 실행 순서
// i = 0
// i 가 10보다 작으므로
// 코드실행
// i 값 1 증가

// i = 1
// i 가 10보다 작으므로
// 코드실행
// i 값 1 증가

// (반복...)

// 1부터 10까지 로그

// for (let i = 0; i < 10; i++){
//     console.log(i + 1); // 1부터 10까지 로그
// }

// # while

// let i = 0;

// while(i < 10){
//    console.log(i);
//    i++;
// }

// # do while
// let i = 0;

// do{
//     // 코드실행
//     i++;
// } while(i < 10);

// # forEach
// const arr = [1, 2, 3, 4, 5];
// arr.forEach(function(item, index){
//     console.log(item, index);
// });

// # break, continue
// break 특정 조건이 되었을때 멈춤

// while(true){
//     let answer = confirm('계속 할까요?');
//     if (!answer){
//         break;
//     }
// }

// continue 특정 조건이 되었을때 다음 코드로 넘어가기
// 짝수만

// for(let i = 0; i < 10; i++){
//     if(i % 2 ){
//         continue;    
//     }
//     console.log(i)
// }

// 명확한 횟수 for문 사용
// 그외 while문 사용

// # switch == if else
// switch(평가){
//     case A:
//     // A일때 코드
//     case B:
//     // B일때 코드
//     ...
// }

// if(평가 == A){
//     // A일때 코드
// } else if(평가 == B){
//     // B일때 코드
// }

// 사과 : 100원
// 바나나 : 200원
// 키위 : 300원
// 멜론 : 500원
// 수박 : 500원
// 사고 싶은 과일을 물어보고 가격 알려주기 switch 문 예제

// let fruit = prompt('무슨 과일을 사고 싶나요?');

// switch(fruit){
//     case '사과':
//         console.log('100원');
//         break;
//     case '바나나':
//         console.log('200원');
//         break;
//     case '키위':
//         console.log('300원');
//         break;
//     // case '멜론':
//     //     console.log('500원');
//     //     break;
//     case '멜론': // 위와 동일한 코드
//     case '수박':
//         console.log('500원');
//         break;
//     default :
//         console.log('그런 과일은 없습니다.');
// }

// # 함수(function)
// 함수는 코드를 묶어서 재사용 가능한 코드를 만들 수 있다.
// console, alert, confirm 내장함수

console.log('함수를 배울 차례입니다.');
