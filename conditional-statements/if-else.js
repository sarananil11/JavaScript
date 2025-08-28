const prompt = require(`prompt-sync`)();
let age = prompt(`Enter the age:`);
if (age >= 18) {
    console.log('you can vote 😂');

}
else {
    console.log(`you can't vote 🙃`);

}