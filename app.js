const express = require('express');

// 관습적으로 객체 app이라고 부름
const app = express();

app.get('/hello', (req, res) => {
    res.send('<h1>Hello Express<h1>');
});

app.listen(3000, () => {
    console.log('Server is listening...');  //  서버가 정상적으로 실행되는지 확인
});   // 포트번호 3000