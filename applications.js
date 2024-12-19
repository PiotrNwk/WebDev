function prepareRawTableData(headers){
    rawTableData = [];
    environments.forEach(element => {
        headers.forEach(header => {
            rawTableRow.push( element[header] );
        } );
        console.log("applications")
        console.log(applications)
        applications.forEach(application => {
            if (element['APPLICATIONS'][application[0]]){
                rawTableRow.push(element['APPLICATIONS'][application[0]]);
            }
            else{
                rawTableRow.push(blankApplication);
            }
        });  
        rawTableData.push(rawTableRow); 
        rawTableRow=[];
    });      
