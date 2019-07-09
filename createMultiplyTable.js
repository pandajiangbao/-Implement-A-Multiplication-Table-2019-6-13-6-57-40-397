let start=2;
let end=4;
let result=''
if(start>end||(start<1&&start>1000)||(end<1&&end>1000)){
    console.log(null);
}
for(let i=start;i<=end;i++){
    for(let j=start;j<=i;j++){
        result+=j+'*'+i+'='+i*j+'  ';
    }
    result+='\n'
}
console.log(result);
