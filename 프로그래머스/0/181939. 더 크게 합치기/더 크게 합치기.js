function solution(a, b) {
    const ab=String(a)+String(b);
    const ba=String(b)+String(a);
    
    const numab=Number(ab);
    const numba=Number(ba);
    
    return numab >= numba ? numab :numba;
}