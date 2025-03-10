<?php
// Define the path to the DFS share file
$filePath = "\\\\domain\\dfs\\share\\folder\\example.txt";

// Check if the file is accessible
if (is_writable($filePath)) {
    // Option 1: Overwrite the file with new content
    $newContent = "This is the new content for the file.\n";
    file_put_contents($filePath, $newContent);
    echo "File updated successfully.";
    
    // Option 2: Append to the file
    $additionalContent = "This line will be appended.\n";
    file_put_contents($filePath, $additionalContent, FILE_APPEND);
    echo "Content appended successfully.";
} else {
    echo "Error: Cannot write to the file. Check permissions or path.";
}

// Read the file to verify changes
if (file_exists($filePath)) {
    $content = file_get_contents($filePath);
    echo "<pre>Current file content:\n$content</pre>";
} else {
    echo "Error: File not found.";
}
?>