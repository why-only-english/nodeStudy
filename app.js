const express = require('express');

// 관습적으로 객체 app이라고 부름
const app = express();

let members = require('./members');

app.get('/api/members', (req, res) => {
    res.send(members);
});

app.get('/api/members/:id', (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    const member = members.find((m) => m.id === Number(id));
    if (member) {
        res.send(member);
    } else {
        res.status(404).send({message : 'There is no such member'});
    }
});

app.listen(3000, () => {
    console.log('Server is listening...');  //  서버가 정상적으로 실행되는지 확인
});   // 포트번호 3000