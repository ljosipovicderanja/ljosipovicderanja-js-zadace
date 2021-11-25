let studenti = [
    {
    ime: "Marko",
    prezime: "Marković",
    grad: "Pula"
    },
    {
    ime: "Iva",
    prezime: "Ivić",
    grad: "Našice"
    },
    {
    ime: "Lucija",
    prezime: "Lucić",
    grad: "Zagreb"
    },
    {
    ime: "Nikola",
    prezime: "Nikolić",
    grad: "Rijeka"
    }
];

function napredna_pretraga(lista, pojam) {
    let ls_rijeci = pojam.split(" ");
    let flag = 0;
    
    for (let i = 0; i < lista.length; i++){
        for (let j = 0; j < ls_rijeci.length; j++){
            if (lista[i].ime.toLowerCase().includes(ls_rijeci[j].toLowerCase()) || lista[i].prezime.toLowerCase().includes(ls_rijeci[j].toLowerCase()) || lista[i].grad.toLowerCase().includes(ls_rijeci[j].toLowerCase())) 
                flag++;
        }
        if (flag >= ls_rijeci.length) return i;
        flag = 0;
    }
    return 404;
}