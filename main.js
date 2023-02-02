const fs = require('fs');

// console.log('Start');

// 동기 실행 함수
// let content = fs.readFileSync('./new', 'utf8');
// console.log(content);

// console.log('Finish');

console.log('Start');

// 비동기 실행 함수
fs.readFile('./new', 'utf8', (error, data) => {
    console.log(data);
})

console.log('Finish');
