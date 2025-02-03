function updateJobStatus(jobName, status) {
                    $.ajax({
                        url: "broker_update.php",
                        type: "POST",
                        data: { jobName: jobName, status: status },
                        success: function (data) {
                            let arr = $('#hidden_application_data')[0].innerHTML;
                            try {
                                let jsoned = JSON.parse(arr);
                                let result = $.grep(jsoned, function (item) {
                                    return item[0] === "get_calculator";
                                });
                                if (result.length > 0) {
                                    result[0][4] = status;
                                    console.log(result[0][4]);
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
