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
                
                let result = jsoned.find(item => item[0] === "get_calculator");
                if (result) {
                    result[4] = status;  // Update the status
                    console.log("Updated Status: ", result[4]);

                    // Save the updated JSON back to the DOM
                    element[0].innerHTML = JSON.stringify(jsoned);

                    // If there is a visible element displaying the status, update it
                    $('#status_display').text(status);
                } else {
                    console.error("Item not found in the JSON data.");
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