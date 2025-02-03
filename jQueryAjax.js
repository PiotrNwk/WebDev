
    <title>AJAX z jQuery</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <div>
        <p>Aktualna wartość: <span id="value">0</span></p>
        <button id="updateButton">Zwiększ wartość</button>
    </div>

    <script>
        $(document).ready(function() {
            $("#updateButton").click(function() {
                $.ajax({
                    url: "/update-value",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ action: "increment" }),
                    success: function(response) {
                        $("#value").text(response.newValue);
                    },
                    error: function(xhr, status, error) {
                        console.error("Błąd:", error);
                    }
                });
            });
        });
    </script>

</body>
</html>
