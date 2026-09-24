const { learners } = require(`./day05`);

function calculateTotalWeeklyHours(learners) {
    let totalHours = 0;

    for (const learner of learners) {
        totalHours += learner.weeklyHours;
    }

    return totalHours;
}

const totalWeeklyHours = calculateTotalWeeklyHours(learners);
console.log(`总学习时长: ${totalWeeklyHours} 小时`);

function calculateAverageWeeklyHours(learners) {
    const totalHours = calculateTotalWeeklyHours(learners);

    return totalHours / learners.length;
}

const averageWeeklyHours = calculateAverageWeeklyHours(learners);
console.log(`平均每位学习者每周学习时长: ${averageWeeklyHours.toFixed(2)} 小时`);

function createLearningReport(learners) {
    const totalHours = calculateTotalWeeklyHours(learners);
    const averageHours = calculateAverageWeeklyHours(learners);
    const activeNames = getActiveLearners(learners, 15);

    return {
        learnersCount: learners.length,
        totalWeeklyHours: totalHours,
        averageWeeklyHours: averageHours,
        activeNames: activeNames
    };
}

function getActiveLearners(learners, minimumHours) {
    return learners
    .filter(learner => learner.weeklyHours >= minimumHours)
    .map(learner => learner.name);
}

const report = createLearningReport(learners);

console.log(`学习报告:`);
console.log(`学习者总数: ${report.learnersCount}`);
console.log(`总学习时长: ${report.totalWeeklyHours} 小时`);
console.log(`平均每位学习者每周学习时长: ${report.averageWeeklyHours.toFixed(2)} 小时`);

console.log(`活跃学习者：${report.activeNames.join("、")}`);
