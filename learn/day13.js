const {learners} = require(`./day05.js`);

const MinimumHours = Number(process.argv[2]) ;

if (Number.isNaN(MinimumHours)) {
    console.log(`用法:node day13.js <每周最少学习小时数>`);
}else {
    const activeNames = learners
    .filter((learner) => learner.weeklyHours >= MinimumHours)
    .map((learner) => learner.name);
    console.log(`每周至少${MinimumHours}小时的人：${activeNames.join(', ')}`);
}


