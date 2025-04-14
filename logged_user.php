<?php
// Example: assuming you've stored the username in a session variable
session_start();
$username = $_SESSION['username']; // Get logged-in user's name
?>
<!DOCTYPE html>
<html>
<head>
    <title>My App</title>
</head>
<body>
    <script>
        // Now JavaScript has access to the username
        const username = <?php echo json_encode($username); ?>;
        console.log("Logged in as:", username);
    </script>
</body>
</html>