let arr=[[1,2,3],[4,5,6],[7,8,9]];
let bag="";
for(let j=arr.length-1;j>=0;j--){
    bag+=arr[j][0]+" ";
}
for(let i=0;i<arr.length-1;i++){
  for(let j=1;j<arr.length;j++){
    if(i==0||j==arr.length-1)
    bag+=arr[i][j]+" ";
  }
}
for( let j=arr.length-1;j>0;j--){
  bag+=arr[arr.length-1][j]+" ";
}
console.log(bag);