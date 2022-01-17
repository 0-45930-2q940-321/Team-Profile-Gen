const fs = require('fs');

const makeHtml = (teamArray) => {
    let employeeHtml = '';
    //The value of employee wont get written over when you're looping over and using +=
    teamArray.forEach(employee => {
        employeeHtml += `
            <div class="border-2 border-black">
                <h1>${employee.role}</h1>
                    <ul>
                        <li>${employee.name}</li>
                        <li>${employee.id}</li>
                        <li>${employee.email}</li>
                        <li>${employee.specificInfo}</li>
                    </ul>
            </div>
    `
    });
    finishedHtml(employeeHtml);
};

finishedHtml = employeeHtml => {
    const output = `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Builder</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="w-full h-screen bg-blue-100">
        <div class="lg:relative border-black bg-green-400 text-black text-center inset-96 w-2/4">
            ${employeeHtml}
        </div>
    </div>
</body>
</html>
    `;

    return new Promise((resolve, reject) => {

        //Will write a file into the directory with the given file name and type
        fs.writeFile('./dist/index.html', output, err => {

            if (err) {
                reject(err);
                return false;
            }
            resolve(output)
        });
    });
}

module.exports = makeHtml;