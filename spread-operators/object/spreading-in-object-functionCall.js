// homework
function aboutMe({name,age,stream}) { // pass an object as parameter
    return `I am ${name}, my age is ${age}, and I study in ${stream}.`;
}
const myObject = {
    name :`Saran`,
    age : 20,
    stream: `Mern stack`
};
console.log(aboutMe({...myObject}));
