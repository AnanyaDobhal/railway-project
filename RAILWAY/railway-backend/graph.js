const railwayGraph = {
  Dehradun: [
    ["Haridwar", 53.5], ["Rishikesh", 33.8], ["Roorkee", 70], ["Kotdwar", 116], ["Delhi", 250],
  ],
  Haridwar: [
    ["Dehradun", 53.5], ["Rishikesh", 20], ["Roorkee", 30], ["Kotdwar", 116], ["Delhi", 200], ["Lucknow", 500],
  ],
  Rishikesh: [
    ["Dehradun", 33.8], ["Haridwar", 20], ["Roorkee", 60], ["New Delhi", 270], ["Kotdwar", 100],
  ],
  Roorkee: [
    ["Dehradun", 70], ["Haridwar", 30], ["Delhi", 220], ["Rishikesh", 60], ["Lucknow", 480],
  ],
  Kotdwar: [
    ["Haridwar", 116], ["Dehradun", 116], ["Delhi", 230], ["Rishikesh", 100], ["Lucknow", 510],
  ],
  Kathgodam: [
    ["Haldwani", 5], ["Lalkuan", 26], ["Lucknow", 350], ["Roorkee", 400],
  ],
  Haldwani: [
    ["Kathgodam", 5], ["Lalkuan", 21], ["Lucknow", 340], ["Haridwar", 390],
  ],
  Lalkuan: [
    ["Kathgodam", 26], ["Haldwani", 21], ["Lucknow", 320], ["Roorkee", 380],
  ],
  Lucknow: [
    ["Kathgodam", 350], ["Haldwani", 340], ["Lalkuan", 320], ["Delhi", 520], ["Roorkee", 480], ["Haridwar", 500],
  ],
  Delhi: [
    ["Dehradun", 250], ["Haridwar", 200], ["Roorkee", 220], ["Kotdwar", 230], ["Lucknow", 520], ["New Delhi", 10],
  ],
  "New Delhi": [
    ["Rishikesh", 270], ["Delhi", 10], ["Agra", 210], ["Bhopal", 490],
  ],
  Agra: [
    ["Delhi", 200], ["Lucknow", 300], ["Jaipur", 260], ["Indore", 600],
  ],
  Jaipur: [
    ["Delhi", 280], ["Lucknow", 400], ["Bhopal", 550], ["Agra", 260],
  ],
  Bhopal: [
    ["Delhi", 500], ["Lucknow", 600], ["Jaipur", 550], ["Indore", 200], ["Mumbai", 800],
  ],
  Indore: [
    ["Bhopal", 200], ["Lucknow", 550], ["Delhi", 600], ["Agra", 600], ["Pune", 400],
  ],
  Mumbai: [
    ["Delhi", 1500], ["Bhopal", 800], ["Lucknow", 1100], ["Pune", 150], ["Chennai", 1200], ["Kolkata", 1700],
  ],
  Pune: [
    ["Mumbai", 150], ["Indore", 400], ["Chennai", 700],
  ],
  Chennai: [
    ["Mumbai", 1200], ["Pune", 700],
  ],
  Kolkata: [
    ["Delhi", 1500], ["Mumbai", 1700], ["Lucknow", 1300],
  ],
};

module.exports = railwayGraph;
