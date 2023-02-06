// http(통신규약, 프로토콜) 코어 모듈
const http = require('http');

// createServer 메소드 : server 역할을 하는 객체 하나를 생성
let server = http.createServer();
server.listen(3000);