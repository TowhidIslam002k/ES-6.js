const ages = [10, 20, 30, 40];
const ages2 = [15, 25, 35, 45];
const ages3 = [17, 27, 37, 47];
//age, age2, age3 arrey k ekta array hisabe output dekhanor jonno(analog method).
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);
//age, age2, age3 arrey k ekta array hisabe output dekhanor jonno(ES-6/update method).
const allAges2 = [...ages, ...ages2, ...ages3, 234];
console.log(allAges2);


const business = 700;
const minister = 800;
const sochib = 600;
const income = [500, 600, 400, 200];
const maximum = Math.max(business, minister, sochib);
console.log(maximum);
const maximum2 = Math.max(...income);
console.log(maximum2);