function caesarCypher(message, key) {
    if (key < 0) return caesarCypher(message, key + 26);

    let newMessage = '';
    const alphabet = 'abcdefghijklmnopqrstubwxyz';
    message = message.toLowerCase();

    for (const char of message) {
        let newChar = char;
        const charIndexAtAlphabet = alphabet.indexOf(char);
        if (charIndexAtAlphabet >= 0) {
            newChar = alphabet.charAt((charIndexAtAlphabet + key) % 26);
            newMessage += newChar;
        }
    }

    return newMessage;
}

const key = 3;
const message = 'Hello world';
const encrypted = caesarCypher(message, key);
const decrypted = caesarCypher(encrypted, -key);

console.log(encrypted);
console.log(decrypted)