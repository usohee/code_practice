function solution(money) {
    let cup = Math.floor(money / 5500); 
    let change = money % 5500; 
    
    return [cup, change];
}