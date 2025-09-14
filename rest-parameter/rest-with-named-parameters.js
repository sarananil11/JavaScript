function greet(firstname,lastname,...titles) {
    console.log(`Name : ${firstname} ${lastname}`);
    console.log(`Titles : ${titles.join(` , `)}`);
    
}

greet(`Saran`,`Anil`,`BCA`,`Software Engineer`,`Volleyball Player`);