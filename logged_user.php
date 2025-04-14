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

<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['username'])) {
    echo json_encode(['username' => $_SESSION['username']]);
} else {
    echo json_encode(['error' => 'Not logged in']);
}
?>

fetch('/api/userinfo.php')
    .then(res => res.json())
    .then(data => {
        if (data.username) {
            console.log("Logged in as:", data.username);
        } else {
            console.log("User not logged in.");
        }
    });

