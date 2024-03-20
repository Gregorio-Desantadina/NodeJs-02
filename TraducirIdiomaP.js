let frase = "Hola, soy una frase traducida";
let frase2 = traducirAPIdiomaP(frase);
console.log(frase2);
function traducirAPIdiomaP(frase) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let frase2 = "";
    for (let i = 0; i < frase.length; i++) {
        let char = frase.charAt(i);
        if (vocales.includes(char.toLowerCase())) {
            frase2 += char.toLowerCase() + 'p' + char.toLowerCase();
        } else {
            frase2 += char;
        }
    }
    return frase2;
}