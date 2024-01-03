let heroi = ['José', 10900];
let valores = [1000, 2000, 5000, 7000, 8000, 9000, 10000, Infinity];
let niveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];

for (let i = 0; i < valores.length; i++) {
    if (heroi[1] < valores[i]) {
        console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[i]}`);
        break;
    }
}

