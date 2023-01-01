const student = {id:'01', name: 'Sami Jaman', Roll: '45', class:'7', FatherName: 'Kolimuddin' }
// console.log(student.Roll);


// const roll = student.Roll;
// console.log(roll);
// const FatherName = student.FatherName;
// console.log(FatherName);


const {Roll, FatherName} = student;
console.log(Roll, FatherName);

const ages = ['45', '56', '76', '49'];
const [firstAges, ...lastAges] = ages;
console.log(lastAges);


const innerText = {
    name: 'Towhid',
    info: {
        id: '101',
        roll: '10'
    }
}
const {roll} = innerText.info;
console.log(roll);