function createMultiplyTable(start,end){
    let result=''
    if(start>end||start<1||start>1000||end<1||end>1000){
        result=null;
        return result;
    }
    for(let i=start;i<=end;i++){
        for(let j=start;j<=i;j++){
            result+=j+'*'+i+'='+i*j+'  ';
        }
        result+='\n'
    }
    return result;
}
it ('should createMultiplyTable two numbers', () => {
    expect(createMultiplyTable(0, 4)).toBe(null);
});
it ('should createMultiplyTable two numbers', () => {
    expect(createMultiplyTable(8, 4)).toBe(null);
});
it ('should createMultiplyTable two numbers', () => {
    expect(createMultiplyTable(2, 4)).toBe('2*2=4  \n2*3=6  3*3=9  \n2*4=8  3*4=12  4*4=16  \n');
});
it ('should createMultiplyTable two numbers', () => {
    expect(createMultiplyTable(1, 1001)).toBe(null);
});
