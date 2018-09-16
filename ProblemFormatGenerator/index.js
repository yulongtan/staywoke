const args = process.argv.slice(2);

if (args.length < 1) {
    console.log('Invalid arguments.');
} else {
    const problemName = args.join(' ');
    const result = generateMarkdown(problemName);
    console.log(result);
}

function generateMarkdown(problemName) {
    var result = `#### ${problemName}  
- [Link]()  
- **Date:** \`${new Date().toISOString().substring(0, 10)}\`  
- **Difficulty:**  
- **Description:**  
- **Solutions:**`  ;
    return result;
}