const learners = [
  {
    name: "0xLumen",
    weeklyHours: 18
  },
  {
    name: "小王",
    weeklyHours: 10
  },
  {
    name: "小李",
    weeklyHours: 25
  },
  {
    name: "小张",
    weeklyHours: 12
  },
]

if (require.main === module) {
  const activeLearners = [];

  for (const learner of learners) {
    if (learner.weeklyHours >= 15) {
      activeLearners.push(learner);
    }
  }

  console.log(activeLearners);
  console.log(activeLearners[0].weeklyHours);
}

module.exports = { learners };
