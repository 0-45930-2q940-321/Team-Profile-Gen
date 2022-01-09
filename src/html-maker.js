const fs = require('fs');

const makeHtml = (employeeArray) => {
    let employeeHtml = '';

    employeeArray.forEach(employee => {
        employeeHtml += `
                <h1>${employee.role}</h1>
                <div>
                ${employee.name}
                ${employee.id}
                ${employee.email}
                ${employee.specificInfo}
                </div>
    `
    });
    writeToFile(employeeHtml);
};


const writeToFile = data => {
    return new Promise((resolve, reject) => {
        //Will write a file into the directory with the given file name and type
        fs.writeFile('./dist/index.html', data, err => {

            if (err) {
                reject(err);
                return false;
            }
            resolve(data)
        });
    });
}

module.exports = makeHtml;