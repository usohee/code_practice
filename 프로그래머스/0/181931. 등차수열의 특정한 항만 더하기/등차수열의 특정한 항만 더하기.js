function solution(a, d, included) {
    var answer = 0;

    for (let i = 0; i < included.length; i++) {
        const currentTerm = a + (i * d);
        
        if (included[i]) {
            answer += currentTerm;
        }
    }

    return answer;
}