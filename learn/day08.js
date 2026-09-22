const learnerName = process.argv[2];
const hoursPerWeek = Number(process.argv[3]);

if(!learnerName || Number.isNaN(hoursPerWeek)) {
    console.log('用法:node day08.js <学习者姓名> <每周学习小时数>');
}else{
 const yearlyHours = hoursPerWeek * 52;
    console.log(`${learnerName}计划一年学习${yearlyHours}小时`);
}
