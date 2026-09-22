const { learners } = require(`./day05`);

let totalWeeklyHours = 0;

for (const learner of learners) {
    totalWeeklyHours += learner.weeklyHours;
}

const averageWeeklyHours = totalWeeklyHours / learners.length;

console.log(`总学习时长: ${totalWeeklyHours} 小时`);
console.log(`平均每周学习：${averageWeeklyHours.toFixed(2)} 小时`);

const activeNames = learners
  .filter((learner) => learner.weeklyHours >= 15)
  .map((learner) => learner.name);

console.log(`活跃学习者：${activeNames.join("、")}`);

for (const learner of learners) {
    let status;
    
    if(learner.weeklyHours >= 20) {
        status = '高强度学习';
    } else if (learner.weeklyHours >= 15) {
        status = '稳定学习';
    } else {
        status = '起步阶段';
    }

    console.log(`${learner.name}:${status}`);
}
