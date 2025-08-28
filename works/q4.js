// Q4:if Statement - Check if a person is an adult

const prompt = require(`prompt-sync`)();

let age = prompt(`Enter your age : `);
if (age >= 18) {
    console.log(`You are an adult`);
    
}