
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming lanaguage?"
];

const ask = (i = 0) => {
    // standard output
    process.stdout.write(`\n\n\n ${questions[i]}`);
    
};

ask();


// TAKE IN DATA AS INPUT AND OUTPUT IT STANDARD INPUT
const answers = [];
process.stdin.on("data", data => {
    
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);

    } else {
        process.exit();    
    }

})




process.on("exit", () => {
    const [name, activity, lang] = answers;
    console.log(`
    Thank you for your Answers
    Go ${activity} ${name} you can write ${lang} code later!!!
    `)
})


