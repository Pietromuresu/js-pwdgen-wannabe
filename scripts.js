/*  Generare la password di un utente tramite i suoi dati 

1. salvare il nome in una variabile
2. salvare il cognome in una variabile
3. salvare il suo colore preferito in una variabile 
4. stampare in pagina una password composta da nome+cognome+colorepreferito+23

*/

const name = prompt('Come ti chiami?');
const surname = prompt('Quale è il tuo cognome?');
const favouriteColor = prompt('Quale è il tuo colore preferito?');
const password = name + surname + favouriteColor + 23;
console.log(name, surname, favouriteColor, password);



