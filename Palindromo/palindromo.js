//solução 1

function verificaPalindromo(string) {
    if (!string) return "String inexistente.";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

//solução 2

function verificaPalindromo(string) {
    if (!string) return "String inexistente.";

    for (let index = 0; index < string.length / 2; index++) {
            if (string[index] !== string[string.length - 1 - index]) return false;
    }
    return true;
}

console.log(verificaPalindromo("ovo"))
