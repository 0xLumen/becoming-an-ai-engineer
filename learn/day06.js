const {learners} = require('./day05.js');

function findActiveLearners(learners, minimumHours) {
    const result = [];
    for (const learner of learners) {
        if (learner.weeklyHours >= minimumHours) {
            result.push(learner);
        }
    }

    return result;
}

const activeLearners = findActiveLearners(learners, 15);

console.log(activeLearners);
console.log(activeLearners.length);
