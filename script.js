"use strict"

let regexp= /^\+7\s\(\d{3}\)\s\d{3}(-\d{2}){2}$/;

let str1 = ' +7(123)456-78-90';
console.log( regexp.test(str1) );

let str2 = '7123456-78-90';
console.log( regexp.test(str2) );

let str3 = '8 123 456 78 90';
console.log( regexp.test(str3) );

let str4 = '380904005060';
console.log( regexp.test(str4) );

let str5 = 'asd +7 (123) 456-78-90 asd';
console.log( regexp.test(str5) );

let str6 = '+7 (123) 456-78-90';

function testStr(str6) {
    let result = regexp.test(str6);

    console.log(`
Строка: '${str6}'
РВ: ${String(regexp)}
Результат: ${result}
    `);
}

testStr(str6);