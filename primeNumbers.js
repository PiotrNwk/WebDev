// Funkcja sprawdzająca, czy liczba jest pierwsza
function isPrime(num) {
    if (num <= 1) return false; // Liczby mniejsze lub równe 1 nie są pierwsze
    if (num === 2) return true; // 2 jest liczbą pierwszą
    if (num % 2 === 0) return false; // Parzyste większe od 2 nie są pierwsze

    // Sprawdzamy nieparzyste dzielniki do pierwiastka z liczby
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Tworzymy tablicę liczb od 1 do 20
const array = Array.from({ length: 20 }, (_, i) => i + 1);

// Liczymy liczby pierwsze w tablicy
function countPrimes(arr) {
    let primeCount = 0;
    arr.forEach(num => {
        if (isPrime(num)) {
            primeCount++;
        }
    });
    return primeCount;
}

// Wyświetlamy wynik
const primeCount = countPrimes(array);
console.log(`Liczba liczb pierwszych w tablicy od 1 do 20: ${primeCount}`);

// Opcjonalnie: wyświetlamy same liczby pierwsze
const primes = array.filter(num => isPrime(num));
console.log(`Liczby pierwsze: ${primes}`);