// VARIABLEN
// Definition von den Variablen
var apples  = 5;
var nuts    = 17;
var lemons  = 9;

/* var apples = 5, nuts = 17, lemons = 9; --> geht auch */

console.log(apples,nuts,lemons);

// So wird die gesamte Eingabe als Objekt übergeben
console.log('Das Ergebnis: ' + apples * nuts);

// So werden die Zahlen als Indeger ausgegeben
console.log('Das Ergebnis', apples * nuts);

// In einer Variable ein Input-Tag einfügen
var inputTag = '<input type="email">';

/* console.log('<input type="email">'); */

// Escape \ muss dann verwendet werden, wenn in der Variable mehrer
// Hochkomma nacheinander kommen um das äußerste zu schließen
console.log('<input type="email" onclick="this.style.backgroundColor=\'black\' ">');

// Inhalt der Variable in der Console ausgeben
console.log(inputTag + inputTag);


// Das wäre eine Array - Definition eindimensional
var woche = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag'
];

var wochenende = new Array('Samstag','Sonntag');

// Zählt den Wochentag beginnend bei 0 = Montag!!!
console.log('Die Woche hat ' + woche.length + ' Tage.')

if (typeof woche[5] == undefined) {
  // Hier wird jetzt geschrieben, was passiert, wenn der 5 (also 6) Tag der Woche undefined ist
  console.log('Dieser Tag entfällt dieser Woche.');
} else {
  console.log('Heute ist der Wochentag ' + woche[4] + '.');
};


// ARRAYS
// Array wird einmal erstellt (leer) und dann werden Werte gesetzt
// Speicherplätze im Array werden frei gewählt -- assoziativ
var monat = [];
monat ['x'] = 'Jänner'
monat ['y'] = 'April';

// mehrdimensionale Arrays
var auto = [
  ['Rücklicht','Frontscheinwerfer'],
  ['Seitenspielgel', 'Rückspiegel'],
  ['Fahrer', 'Beifahrer', 'Geisel im Kofferraum']
];


// OBJEKT
var person = {
  alter:    24,
  vorname:  'Veronika',
  groesse:  161,
  anrede:   'Frau',
  nachname: 'Lackner', // ist kein Problem, wenn hier am Schluss noch ein Beistrich steht - ist sogar gut!!
};

console.log('Sehr geehrte ' + person.anrede + ' ' + person.nachname);

var auto = {
  leuchten: [
    'Frontscheinwerfer',
    'Rücklicht',
  ],
  insassen: [
    'Fahrer',
    'Beifahrer',
  ]
};

console.log(auto);


// FUNKTIONEN
var tier = function(vieh) {
  return 'Schöner ' + vieh;
};

// Hier liefert der Log-Eintrag durch () den Eintrag der Function
// Würde man diese weglassen, dann würde die gesamte Function ausgegeben werden
console.log(tier('Vogel'));

var wieIstDeinName = function(person) {
  return person.vorname;
};

console.log(wieIstDeinName(person));


// OPERATOREN - ermöglichen Dinge miteinander zu vergleichen
var note = 1;

if( note === 1 ){
  console.log('WOW');
} else if( note == 3 ){
  console.log('OK');
} else {
  console.log('NAJA');
};

// Begebenheit klären folgende Operatoren - Vergleichsoperatoren
// Umkehrungszeichen "!" --> Kehre das Ergebnis aus der Klammer um if( !(tomate >= melone))
// oder auch wie in SQL ungleich !=
// || = ODER Bedingung stellt eine zusätzliche Überprüfung da (wenn erste zutrifft, wird zweite nicht geprüft)
// && = UND Bedingung
var tomate = 5.0;
var melone = 23.5;

if( tomate != melone || tomate > melone) {
  console.log('true');
} else {
  console.log('false');
};

// Break muss angeführt werden, denn sonst beendet er die Anweisung beim Zutreffn der Variable nicht
switch (melone) {
  case 23.5:
    console.log('true');
    break;
    case 15:
      console.log('fast');
    break;
  default:
    console.log('false');
}


// LOOP (auch WHILE läuft so lange durch, bis die Bedingung nicht mehr zutrifft ACHTUNG Dauerschleife)
// Zuerst der Anfangswert, dann der Vergleich bzw. die Prüfung und dann was ausgeführt werden soll
// i+=2 = wird nur bei jedem zweiten Mal ausgeführt
for(var i = 0; i < 10; i++){
  console.log(i);
}
