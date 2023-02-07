const http = require('http');

const express = require('express'); 

const app = express();

const users = ['Tom', 'Andy', 'Jessica', 'Paul']; 

app.get('/', (request, response) => {
    response.end('<h1>Welcome!</h1>');
});

app.get('/users', (request, response) => {
    response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
    // console.log(request.params);  // split 메소드를 사용하지 않아도 됨
    const usersName = users[request.params.id - 1];
    response.end(`<h1>${usersName}</h1>`);
});

app.get('*', (request, response) => {
    response.end('<h1>404</h1>');
});

app.listen(3000);