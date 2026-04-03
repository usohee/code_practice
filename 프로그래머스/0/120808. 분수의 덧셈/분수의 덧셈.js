function solution(numer1, denom1, numer2, denom2) {
    //통분
    let top = numer1*denom2 + denom1*numer2;
    let bottom = denom1*denom2;
    
    //기약분수로 만들기 위해 최대공약수 구하기
    let gcd=1;
    for (let i = 1; i<=top; i++) {
        if (top%i===0 && bottom%i===0) {
            gcd=i;
        
        }
    }
    return [top/gcd, bottom/gcd];
}