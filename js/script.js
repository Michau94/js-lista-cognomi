/* Consegna:
 1. chiedi all’utente il cognome
 - richiesta cognome attraverso prompt 
 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
 - creazione array contenente i seguenti nomi
 3. stampa la lista ordinata alfabeticamente sia in console che in pagina
 4. scrivi anche la posizione "umana"(partendo da 1) della lista in cui il nuovo utente si trova
 */
//display

var display = document.getElementById('lastname-list');
var lastAdded = document.getElementById('lastAdd');

//Creazione array cognomi

var lastName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

//richiesta cognome all'utente e push nell'array esistente

var userLastname = prompt('Inserisci il tuo cognome', 'Wadowski');

// Invio del cognome ad array esistente
lastName.push(userLastname);

console.log(lastName);

// Ordine della lista
lastName.sort();

var listDisplayed = "";

for (i = 0; i < lastName.length; i++) {
    listDisplayed += '<li>' + lastName[i] + '</li>';
}


// Stampa indice nella lista
var indexLastname = lastName.indexOf(userLastname) + 1;
console.log(indexLastname, userLastname);

// stampa nome + posizione

var message = "L'ultimo cognome inserito è: ";


// OUTPUT

//stampa lista cognomi su html
display.innerHTML = listDisplayed;

// STAMPA ULTIMO COGNOME INSERITO + INDICE 
lastAdded.innerHTML = message + userLastname + ' in posizione ' + indexLastname;




