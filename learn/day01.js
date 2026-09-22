const name ="0xLumen";
const hoursPerWeek = 20;
const weeks = 52;

const yearlyHours = hoursPerWeek * weeks;
const hoursPerDay = yearlyHours / (weeks * 7);

console.log(`${name} 计划一年学习 ${yearlyHours} 小时编程。`)
console.log(`${name} 每天平均学习 ${hoursPerDay.toFixed(2)} 小时。`)
console.log(`${name} 每周平均学习 ${hoursPerWeek} 小时。`) 
