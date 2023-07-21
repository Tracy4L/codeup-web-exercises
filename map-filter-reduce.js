const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//
const usersWithAtLeast3Languages= users.filter((user) => user.languages.length >= 3);
const usersEmail= users.map((user) => user.email);
// const userYears = users.reduce((total) => user.years)
const userYearss = users.reduce((total, person) => {
    return total + person.sales;});

const userYears = users.reduce((accumalator,user,index,) => {
    return accumalator += ;});
// console.log(usersWithAtLeast3Languages);
console.log(usersEmail);
console.log(userYears);
//
// const users = [
//     { name: 'John', experience: 5 },
//     { name: 'Jane', experience: 7 },
//     { name: 'Mike', experience: 3 },
//     { name: 'Emily', experience: 10 },
// ];
//
// // Use .reduce() to calculate the total years of experience
// const totalYearsOfExperience = users.reduce((total, user) => total + user.experience, 0);
//
// console.log('Total years of experience:', totalYearsOfExperience);