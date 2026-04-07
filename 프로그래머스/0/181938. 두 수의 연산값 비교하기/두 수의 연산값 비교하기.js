function solution(a, b) {
    const ab = Number(`${a}${b}`);
    
    const c=2*a*b;
    
    return Math.max(ab, c);

}