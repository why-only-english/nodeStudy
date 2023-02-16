const express = require('express');

// 관습적으로 객체 app이라고 부름
const app = express();

const db = require('./models');

const { Member } = db;

app.use(express.json());  // middleware
app.use((req,res, next) => {
    console.log(req.query);
    next();
  });

app.get('/api/members', async (req, res) => {
    const { team } = req.query;
    if (team) {
        const teamMembers = await Member.findAll({ where: { team }});
        res.send(teamMembers);
    } else {
        const members = await Member.findAll();
        res.send(members);
    }
});

app.get('/api/members/:id', async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    const member = await Member.findOne({ where: { id }});  // 특정 직원 정보 조회
    if (member) {
        res.send(member);
    } else {
        res.status(404).send({message : 'There is no member with the id!'});
    }
});

app.post('/api/members', async(req, res) => {
    const newMember = req.body;   // POST 리퀘스트에선 body가 필요
    const member = Member.build(newMember);
    await member.save();
    res.send(member);
});

// app.put('/api/members/:id', (req, res) => {
//     const { id } = req.params;
//     const newInfo = req.body;
//     const member = members.find((m) => m.id === Number(id));
//     if(member) {
//         Object.keys(newInfo).forEach((prop) => {
//             member[prop] = newInfo[prop];
//         });
//         res.send(member);
//     } else {
//         res.status(404).send({ message : 'There is no member with the id!'});
//     }
// });

// 기존 직원 정보 수정
app.put('/api/members/:id', async (req, res) => {
    const { id } = req.params;
    const newInfo = req.body;
    const result = await Member.update(newInfo, { where: { id } });
    if (result[0]) {
        res.send({ message: `${result[0]} row(s) affected`});
    } else {
        res.status(404).send({ message: 'There is no member with id!'});
    }
});

// app.delete('/api/members/:id', (req,res) => {
//     const { id } = req.params;
//     const memberCount = members.length;
//     members = members.filter((member) => member.id !== Number(id));
//     if(members.length < memberCount) {
//         res.send({ message: 'Deleted'});
//     } else {
//         res.status(404).send({ message: 'There is no member with the id!'});
//     }
// });

// 기존 직원 정보 삭제하기
app.delete('/api/members/:id', async (req,res) => {
    const { id } = req.params;
    const deletedCount = await Member.destroy({ where: { id }});
    if(deletedCount) {
        res.send({ message: `${deletedCount} row(s) deleted`});
    } else {
        res.status(404).send({ message: 'There is no member with the id!'});
    }
});

app.listen(3000, () => {
    console.log('Server is listening...');  //  서버가 정상적으로 실행되는지 확인
});   // 포트번호 3000