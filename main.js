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
// *함수를 만드는 목적은 중복을 줄여주는 것이다.
// 함수는 코드를 묶어서 재사용 가능한 코드를 만들 수 있다.
// console, alert, confirm 내장함수

// 함수(function) 정의

// function(함수) sayHello(함수명)(name)(매개변수&인수){
// function sayHello(name){
//     console.log(`Hello, ${name}`); // ` `(물결 표시 밑 ` 그레이브 키) 사용하면 문자열 안에 변수를 사용할 수 있다.
// }

// sayHello('Mike');

// 함수 작성

// function showError(){
//     alert('에러가 발생했습니다. 새로고침 해주세요.'); // 에러 문구를 수정해 주세요. 라고 요청하면 10,000 군데를 수정하는게 아니라 이부분만 수정하면됨.
// }

// showError();

// 매개변수가 있는 함수

// function sayHello(name){
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// }

// sayHello('Mike');
// sayHello('Tom');
// sayHello('Jane');

// 만약 매개변수가 없다면?

// let msg = `Hello`; // 전역 변수 (global variable)
// console.log('함수 호출 전');
// console.log(msg);

// function sayHello(name){
//     // console.log(name); // undefined
//     // let msg = `Hello`; // 변수가 바뀌면 let을 사용하는게 좋다. // msg 함수내에서 사용하는 지역변수
//     if(name){
//         // msg = `Hello, ${name}`; // 방법 1
//         // msg += ', ' + name; // 방법 2
//         msg += `, ${name}`; // 방법 3
//     }
// console.log('함수 내부');
//     // 지역 변수 (local variable)
//     console.log(msg);
// }

// // sayHello();
// sayHello('Mike');
// console.log('함수 호출 후');
// console.log(msg); // msg는 함수 내에서만 사용할 수 있다. 전역변수로 사용할 수 없다.

// 전역 변수와 지역 변수

// let msg = "welcome";
// console.log(msg);

// function sayHello(name){
//     let msg = "Hello";
//     console.log(msg + ' ' + name);
// }

// sayHello('Mike');
// console.log(msg);

// 함수에 특화된 지역 변수 사용을 지향하는 것이 좋다.(전역 변수가 많아 지면 관리가 힘들다.)

// let name = "Mike";

// function sayHello(name){ // 매개변수로 가는 값은 복사된 후 지역 변수에 저장된다.
//     console.log(name);
// }

// sayHello();
// sayHello('Jane');

// OR

// function sayHello(name){
//     let newName = name || 'friend'; // 매개변수가 없으면 'friend'를 사용한다.
//     let msg = `Hello, ${newName}`;
//     console.log(msg);
// }

// sayHello();
// sayHello('Jane');

// default value

// function sayHello(name = 'friend'){ // name 에 default value를 준다.
//     let msg = `Hello, ${name}`;
//     console.log(msg);
// }

// sayHello();
// sayHello('Jane');

// return 으로 값 반환

// function add(num1, num2){
//     return num1 + num2;
// }

// const result = add(2, 3);
// console.log(result);

// return 값을 사용하지 않는 함수

// function showError(){
//     alert('에러가 발생했습니다.');
//     return; // 함수를 종료하는 목적으로도 사용됨.
//     alert('이 코드는 절대 실행되지 않습니다.');
// }

// const result = showError();
// console.log(result);

// 함수(function)
// - 한번에 한 작업에 집중
// - 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
// showError // 에러를 보여줌
// getName // 이름을 얻어옴
// getAge // 나이를 얻어옴
// getGender // 성별을 얻어옴
// createUserData // 유저 데이터를 생성함
// checkLogin // 로그인 여부를 체크

// # 함수 선언문 vs 함수 표현식

// function sayHello(){ // 함수 선언문 - 어디서든 호출 할수 있다. 
//     console.log('Hello');
// }

// sayHello(); // 함수 전에 실행을 해도 된다. 함수 선언문(자바스크립트) 호이스팅(hoisting) - 사용 가능 범위.

// let sayHello = function(){ // 함수 표현식 - 코드에 도달하면 생성된다.
//     console.log('Hello');
// }

// sayHello();

// 그래서 뭐가 더 좋을까요? 함수 선언문이 더 좋다.
// 함수 표현식을 사용하면 코드가 더 짧아진다.

// # 화살표 함수

// let add = function(num1, num2){
//     return num1 + num2;
// }

// let add = (num1, num2) => num1 + num2; // 화살표 함수
// let sayHello = name => `Hello, ${name}`; // 화살표 함수

// let showError = () => alert('에러가 발생했습니다.'); // 화살표 함수
// showError();

// const sayHello = (name) => { // 화살표 함수
//     let msg = `Hello, ${name}`;
//     console.log(msg);
// }

// sayHello('Mike');

// const add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// };

// const add = (num1, num2) => num1 + num2; // 화살표 함수 - return 이 한줄일 경우 한줄로 줄일 수 있다.
// const result = add(2, 3);

// console.log(result);

// *함수 표현식 보다는 함수 선언문이 자유롭다.
// 화살표 함수는 ES6 이후에 추가되었다.

// # 객체(object)

// Superman
// name : clark
// age : 33

const superman = {
    name: 'Clark',
    age: 33,
}

// 12 - 객체(object) 스터디 할 차례입니다.
// 내일도 열심히 하자!!
