const learner = {
    name:'0xLumen',
    weeklyHours:20,
    goal:"成为一名优秀的AI工程师",
};

console.log(learner.name);
console.log(learner.weeklyHours);
console.log(learner.goal);

learner.weeklyHours = 18;
console.log(`调整后，每周学习${learner.weeklyHours}小时`);
learner.completedLessons = 4;
console.log(`目前完成了${learner.completedLessons}节课程`);
