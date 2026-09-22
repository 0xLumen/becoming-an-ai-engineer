function calculateYearlyHours(hoursPerWeek, weeks){
    return hoursPerWeek * weeks;
}
const firstPlan = calculateYearlyHours(10,52);
console.log(firstPlan);

const secondPlan = calculateYearlyHours(20,52);
console.log(secondPlan);

const targetHoursPerWeek = 10;
if (targetHoursPerWeek >= 15) {
    console.log('学习节奏很好。');
}else {
    console.log('你可以从每周增加一小时开始。');
}

