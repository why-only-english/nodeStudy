// events 코어 모듈
const EvenEmitter = require('events');

// EvenEmitter 클래스로 myEmitter 객체 생성
const myEmitter = new EvenEmitter;

// on 메소드 호출, 이벤트 발생했을때 실행할 콜백 등록
myEmitter.on('test', () => {
    console.log('Success!');
})

// emit 메소드 호출, 발생시킬 이벤트
myEmitter.emit('test');
