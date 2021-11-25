const provjeri = (lista, pojam, status) => {
    for (let i = 0; i < lista.length; i++) {
       if (lista[i].upisan == status) {
          if (lista[i].ime.includes(pojam) || lista[i].prezime.includes(pojam))
             return true;
       }
    }
    return false;
 };
 
 const studenti = [
    {
       ime: 'Iva',
       prezime: 'Ivić',
       upisan: false,
    },
    {
       ime: 'Karlo',
       prezime: 'Marić',
       upisan: true,
    },
    {
       ime: 'Ana',
       prezime: 'Lipovac',
       upisan: true,
    },
    {
       ime: 'Emma',
       prezime: 'Jukić',
       upisan: true,
    },
    {
       ime: 'Majda',
       prezime: 'Vičić',
       upisan: true,
    },
    {
       ime: 'Dina',
       prezime: 'Pilić',
       upisan: true,
    },
    {
       ime: 'Ana',
       prezime: 'Anić',
       upisan: false,
    },
    {
       ime: 'Tara',
       prezime: 'Tadić',
       upisan: false,
    },
    {
       ime: 'Mira',
       prezime: 'Ivanov',
       upisan: false,
    },
    {
       ime: 'Katja',
       prezime: 'Katić',
       upisan: false,
    },
 ];
 console.log(provjeri(studenti, 'Ivić', true));
console.log(provjeri(studenti, 'Tara', true));
console.log(provjeri(studenti, 'Lipovac', false));
console.log(provjeri(studenti, 'Katja', false));
