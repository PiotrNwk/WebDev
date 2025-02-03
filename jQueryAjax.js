 let statusCol = $(".table_matrix_td0, .table_matrix_td1").filter(function () {
                                            let text = $(this).text().trim();
                                            return statusList.includes(text);
                                        });
