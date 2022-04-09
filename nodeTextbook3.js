const condition = true; //true면 resolve, false면 reject
const promise = new Promise((resolve, reject)=>{
  if(condition){
    resolve('성공');
  }else{
    reject('실패');
  }
});


Promise
.then((message)=>{
  console.log(message);//성공 resolve 한 경우
})
.catch((error)=>{
  console.log(error);//실패 reject 한 경우
})
.finally(()=>{//끝나고 무조건 실행
  console.log('무조건');
})
