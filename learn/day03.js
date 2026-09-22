const weeklyHours = [10,20,15];

console.log(weeklyHours);
console.log(weeklyHours[0]);
console.log(weeklyHours[1]);
console.log(weeklyHours.length);

weeklyHours.push(25);
console.log(weeklyHours[3]);
console.log(weeklyHours.length);

let totalHours = 0;
for (const hours of weeklyHours) {
    console.log(`本周计划学习 ${hours} 小时编程。`);
    totalHours += hours;
}

console.log(`本周计划学习编程总计 ${totalHours} 小时。`);