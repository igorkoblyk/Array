// завдання по JS:
// Створіть масив із 7 користувачів із віком та полями імен. Напишіть код, який фільтрує користувачів за наступними критеріями: а) вік <18; б) вік від діапазону [18, 35]; в) вік> 35
//     1. Create array of 7 users with age and name fields. Write code that filters users by next criteria:     a) age < 18; b) age from range [18, 35]; c) age > 35
let users = [
    {name:'Oleg', age: 41},
{name: "Igor", age: 35},
{name: 'Zina', age: 63},
{name: 'Anastasia', age: 2},
{name: 'Lyba', age: 63},
{name: 'Sergij', age: 45},
{name: 'Maria', age: 11},
]

for (let i = 0; i < users.length; i++) {
    if (users[i].age < 18) {
        console.log("users age less 18:", users[i]);
    }
}

for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18 && users[i].age <= 35) {
        console.log("users  age 18-35:", users[i]);
    }
}

for (let i = 0; i < users.length; i++) {
    if (users[i].age > 35) {
        console.log("user age 35:", users[i]);
    }
}


// 16. Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];

for( let i = 0; i < users.length; i++){
    console.log(users[i]);
    for (let k = 0; k < users[i].skills.length; k++){
        console.log(users[i].skills[k])
    }
}



2. Write code that counts 2 to power 23 (піднести 2 до 23 степені, так як 2 у квадраті - 2*2, 2 в кубі - 2*2*2, а це до 23 степені)
                    ----Math----
console.log(Math.pow(2, 23));
                    ----while----
let a=b=2, i = 23;
while(--i)b*=a;
console.log (b);
                    ----for----
function pow(a, n) {
    let b = a;
    for (let i = 1; i < n; i++) {
        b *= a;
    }
    return b;
}
alert(pow(2, 23));
document.write(pow(2, 23));
console.log (pow(2, 23));