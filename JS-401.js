const provjeri = (lista, pojam) => {
    for (let i = 0; i < lista.length; i++) {
       if (lista[i].ime == pojam || lista[i].prezime == pojam || lista[i].upisan) return true;
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
 
 console.log(provjeri(studenti, 'Marić'));
 console.log(provjeri(studenti, 'Dina'));
 console.log(provjeri(studenti, 'Ella'));
 