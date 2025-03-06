<?php
// Path to the file on the DFS share
$filePath = '/mnt/dfs/shared/example.txt'; // Linux mount point
// Or '\\company.local\dfs\shared\example.txt' on Windows (escaped as '\\\\company.local\\dfs\\shared\\example.txt')

// Data to write
$data = "Hello, DFS world!\n";

// Open the file for writing (append mode 'a' preserves existing content)
$handle = fopen($filePath, 'a');
if ($handle === false) {
    die("Error: Could not open file. Check path and permissions.");
}

// Write the data
$bytesWritten = fwrite($handle, $data);
if ($bytesWritten === false) {
    die("Error: Could not write to file.");
}

// Close the file handle
fclose($handle);

echo "Successfully wrote $bytesWritten bytes to $filePath";
?>