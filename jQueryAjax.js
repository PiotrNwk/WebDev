function updateJobStatus(jobName, status) {
    $.ajax({
        url: "broker_update.php",
        type: "POST",
        data: { jobName: jobName, status: status },
        success: function (data) {
            let element = $('#hidden_application_data');
            let arr = element[0].innerHTML.trim(); // Trim whitespace
            
            try {
                let jsoned = JSON.parse(arr);
                
                let result = jsoned.find(item => item[0] === jobName);  // Find matching job
                if (result) {
                    result[4] = status;  // Update the status in JSON
                    console.log("Updated Status: ", result[4]);

                    // Save the updated JSON back to the hidden data
                    element[0].innerHTML = JSON.stringify(jsoned);

                    // **Find the correct `.table_row` that meets all conditions**
                    $(".table_row").each(function () {
                        let row = $(this);
                        let firstColText = row.find(".table_matrix_first_col").text().trim();
                        let headerText = row.find(".div_table_header").text().trim();

                        // Update only if it contains "get_calculator" AND has a "status" header
                        if (firstColText === "get_calculator" && headerText === "status") {
                            row.find(".table_matrix_td0").text(status);  // Update only in this row
                        }
                    });

                } else {
                    console.error("Job not found in JSON data.");
                }
            } catch (e) {
                console.error("Error parsing JSON data: ", e);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("AJAX request failed: ", textStatus, errorThrown);
        }
    });
}