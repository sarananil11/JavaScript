//useful when comparing single value against multiple condition.

const prompt = require(`prompt-sync`)();

let day = prompt(`Enter a day : `);
// day = String(day);
switch (day) {
    case `monday`:
        console.log(`first day`);


        break;
    case `tuesday`:
        console.log(`second day`);


        break;
    case `wednesday`:
        console.log(`third day`);


        break;
    case `thursday`:
        console.log(`fourth day`);


        break;
    case `friday`:
        console.log(`mosque day`);


        break;
    case `saturday`:
        console.log(`last working day`);


        break;
    case `sunday`:
        console.log(`holliday`);


        break;

    default:
        console.log(`day not found`);

        break;
}