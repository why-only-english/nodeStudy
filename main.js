// events 코어 모듈
const EvenEmitter = require('events');

// EvenEmitter 클래스로 myEmitter 객체 생성
const myEmitter = new EvenEmitter;

const obj = {type: 'text', data: 'hello', date: '2023-02-06'};

// on 메소드 호출, 이벤트 발생했을때 실행할 콜백 등록
myEmitter.on('test', (info) => {
    console.log(info);
})

// emit 메소드 호출, 발생시킬 이벤트
myEmitter.emit('test', obj);
