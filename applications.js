const environments = [
    {
        id: 1,
        name: "Environment A",
        type: "Development",
        APPLICATIONS: {
            app1: "App1 Data",
            app2: "App2 Data"
        }
    },
    {
        id: 2,
        name: "Environment B",
        type: "Production",
        APPLICATIONS: {
            app2: "App2 Data B",
            app3: "App3 Data B"
        }
    }
];

const headers = ["id", "name", "type"];

const applications = [["app1"], ["app2"], ["app3"]];

const blankApplication = "No Data";

let rawTableRow = [];
let rawTableData = [];

rawTableData = [];
environments.forEach(element => {
    headers.forEach(header => {
        rawTableRow.push(element[header]);
    });
    console.log("applications");
    console.log(applications);
    applications.forEach(application => {
        if (element['APPLICATIONS'][application[0]]) {
            rawTableRow.push(element['APPLICATIONS'][application[0]]);
        } else {
            rawTableRow.push(blankApplication);
        }
    });
    rawTableData.push(rawTableRow);
    rawTableRow = [];
});

console.log(rawTableData);
