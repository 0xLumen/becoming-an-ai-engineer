const {learners} = require(`./day05.js`);

function getActiveLearners(learners, minimumHours) {
    return learners
    .filter((learner) => learner.weeklyHours >= minimumHours)
    .map((learner) => learner.name);
}

const stableLearners = getActiveLearners(learners,15);
const highIntensityLearners = getActiveLearners(learners, 20);

console.log(`每周至少15小时：${stableLearners.join(', ')}`);
console.log(`每周至少20小时：${highIntensityLearners.join(', ')}`);