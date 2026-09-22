const{ learners } = require('./day05');

const activeLearners = learners
    .filter(learner => learner.weeklyHours >= 15)
    .map(learner => learner.name);

console.log(activeLearners);