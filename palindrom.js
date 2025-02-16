// Palindrom 16/02/2025

function isPalindrome(str) {
    // Usuwamy spacje i konwertujemy na małe litery
    str = str.toLowerCase().replace(/\s/g, '');
    
    // Porównujemy ciąg znaków z jego odwróconą wersją
    return str === str.split('').reverse().join('');
}

// Testy
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("Kajak")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true