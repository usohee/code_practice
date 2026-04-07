function solution(array) {
    const counts = {}; // 각 숫자가 나온 횟수를 담을 바구니
    
    // 1. 각 숫자가 몇 번 나왔는지 세기
    array.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    let maxCount = 0;      // 가장 많이 나온 횟수
    let mode = 0;          // 그때의 숫자(최빈값)
    let isDuplicate = false; // 최빈값이 중복인지 확인

    // 2. 기록된 데이터를 하나씩 확인하기
    for (const num in counts) {
        const currentCount = counts[num];
        
        if (currentCount > maxCount) {
            // 현재 숫자가 지금까지의 최고 기록보다 많이 나왔다면?
            maxCount = currentCount;
            mode = Number(num);
            isDuplicate = false; // 새로운 단독 선두 등장!
        } else if (currentCount === maxCount) {
            // 최고 기록과 똑같은 횟수가 또 나왔다면?
            isDuplicate = true; // 공동 선두 발생!
        }
    }

    // 3. 공동 선두가 있으면 -1, 아니면 최빈값 반환
    return isDuplicate ? -1 : mode;
}