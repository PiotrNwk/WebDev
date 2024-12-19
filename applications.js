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
