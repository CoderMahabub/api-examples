const data = { result: [{ userName: { title: 'Mr.', name: "sakib khan" } }] };
// console.log(data.result[0].userName.name)

const p = [1, 2, 3];
const q = p.map(n => Math.pow(n, 3));
// console.log(p);

const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`;
// console.log(bondCode);

fetch(url).then(res => res.json()).then(data => console.log(data).then(error => console.log(error))