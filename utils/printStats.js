export const showStats = (player) => {
    let totalTime = 0;
    let timeAverage = 0;
    totalTime += (player.times[player.times.length -1] - player.times[0]);
    for(let i = 1; i < player.times.length; i++) {
        timeAverage += player.times[i]
        timeAverage /= player.times.length
    } console.log(`total time seconds: ${totalTime}, Time average seconds: ${timeAverage}`);
    
}