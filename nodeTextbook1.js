function first(){
  second();
  console.log('첫번째');
}
function second(){
  third();
  console.log('두번째');
}
function third(){
  console.log('세번째');
}
first();

console.log('-------------');

function run(){
  console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');
