<?php
session_start();

// Fake login for demo (in real app, user logs in somewhere else)
$_SESSION['username'] = 'john_doe';

// If this is a POST request, handle DB update
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate session
    if (!isset($_SESSION['username']) || $_SESSION['username'] !== $data['username']) {
        http_response_code(403);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }

    // DB connection (adjust credentials)
    $pdo = new PDO("mysql:host=localhost;dbname=mydb", "user", "pass");

    // Update DB
    $stmt = $pdo->prepare("UPDATE users SET score = :score WHERE username = :username");
    $success = $stmt->execute([
        ':score' => $data['score'],
        ':username' => $data['username']
    ]);

    echo json_encode(['success' => $success]);
    exit;
}

// If GET request, render the page
$username = $_SESSION['username'] ?? null;
?>
<!DOCTYPE html>
<html>
<head>
    <title>Update Page</title>
</head>
<body>
    <h1>Welcome, <?php echo htmlspecialchars($username); ?></h1>
    <button onclick="sendUpdate()">Update Score</button>

    <script>
        const username = <?php echo json_encode($username); ?>;

        function sendUpdate() {
            fetch("", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    score: 150 // Example new value
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("Score updated successfully!");
                } else {
                    alert("Update failed.");
                }
            });
        }
    </script>
</body>
</html>