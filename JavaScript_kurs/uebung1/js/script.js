// Öffne Dialogfesnster mit "Mein erster Alert" als text
alert('Mein erster ALERT');

// erstellen einer Variable mit einem text
var consolenTest = 'Hallo Veronika';

// ausgeben der Variable
console.log(consolenTest);

// überschreiben der Variable mit neuem Inhalt
consolenTest = 'Ciao Veronika';

// ausgeben des neuen Inhaltes
console.log(consolenTest);

if(consolenTest === 'Ciao Veronika') {
  alert('Ciao');
}

var externalLink = $('a[href^="https://"], a[href^="http://"]');
// Performance technisch wird geprüft ob überhaupt Links auf der Seite vorkommen
if(externalLink.length > 0) {
  externalLink.attr('target', '_blank');
}
