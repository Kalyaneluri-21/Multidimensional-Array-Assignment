let N=5;
for(let i=1;i<=N;i++){
  let bag="";
  if(i===1||i===N){
    for(let j=1;j<=N;j++){
      bag+="*"+" ";
    }
    console.log(bag);
  }
  else{
    console.log("*");
  }
}
