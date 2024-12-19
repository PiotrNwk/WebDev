const applications = [
    ['app1'], 
    ['app2'], 
    ['app3']
];

const blankApplication = "No Data"; // Placeholder for missing application data

const data = [
    {
        APPLICATIONS: {
            app1: "Application 1 Data",
            app2: "Application 2 Data"
        }
    },
    {
        APPLICATIONS: {
            app2: "Application 2 Data for Row 2",
            app3: "Application 3 Data for Row 2"
        }
    },
    {
        APPLICATIONS: {
            app1: "Application 1 Data for Row 3"
        }
    }
];

const rawTableData = [];

data.forEach(element => {
    const rawTableRow = [];
    applications.forEach(application => {
        if (element['APPLICATIONS'][application[0]]) {
            rawTableRow.push(element['APPLICATIONS'][application[0]]);
        } else {
            rawTableRow.push(blankApplication);
        }
    });
    rawTableData.push(rawTableRow);
});

console.log(rawTableData);
