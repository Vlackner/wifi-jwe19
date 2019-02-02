$('.btn-primary').hide();

// Validierung von Checkboxen
// Geschlecht bzw. Firma
// Wenn eine der Checkboxen gesetzt ist, dann sind alle valide

console.log($('.custom-radio').val());

$('.custom-radio').on('click change', function() {
  console.log($(this).val());

  if (typeof $(this).val() != 0) {
    $('.custom-radio').addClass('valide');
    $('.custom-radio').removeClass('invalide');
  } else {
    $('.custom-radio').addClass('invalide');
    $('.custom-radio').removeClass('valide');
  }
});


// Validierung von Input - Text Feldern
// Vorname und Nachname
// Der Name muss länger wie 0 Zeichen sein, darf keine Zahlen beinhalten
// und muss auch Klein- und Großbuchstaben bestehen

$('.personID').keyup(function() {
  var inputID = $(this).val();
  var richtig = 0;
  var falsch = 0;

  if (inputID.length > 0) {
    richtig++;
  }
  if (inputID.match(/[A-z]/)) {
    richtig++;
  }
  if (inputID.match(/[A-Z]/)) {
    richtig++;
  }
  if (inputID.match(/[!@#$%\^&*(){}[\]<>?/|\-+]/)) {
    falsch++;
  }
  if (inputID.match(/\d/)) {
    falsch++;
  }
  if (richtig == 3 && falsch == 0) {
    $(this).addClass('valide');
    $(this).removeClass('invalide');
  } else {
    $(this).removeClass('valide');
    $(this).addClass('invalide');
  }
});

// Telefonnummer
// Die Eingabe darf nur Zahlen und ein + und ein / beinhalten

$('#validationCustom03').keyup(function() {
  var telefon = $('#validationCustom03').val();
  var regexTel = /[0-9-()+]+$/;

  if (regexTel.test(telefon)) {
    $('#validationCustom03').addClass('valide');
    $('#validationCustom03').removeClass('invalide');
  } else {
    $('#validationCustom03').addClass('invalide');
    $('#validationCustom03').removeClass('valide');
  }
});

// E-Mail Adresse
// Die Eingabe darf sämtliche Zeiten beinhalten und muss ein @ Zeichen beinhalten

$('#validationCustom04').keyup(function() {
  var mail      = $('#validationCustom04').val();
  var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regexMail.test(mail)) {
    $('#validationCustom04').addClass('valide');
    $('#validationCustom04').removeClass('invalide');
  } else {
    $('#validationCustom04').addClass('invalide');
    $('#validationCustom04').removeClass('valide');
  }
});

// Passwort überprüfen, ob die Kriterien erfüllt wurden
// Mindestlänge von 8 Zeichen
// Mindestens 1 Klein- und 1-Großbuchstabe
// Mindestens 1 Sonderzeichen
// Mindestens 1 Ziffern

$('.kb-password').keyup(function() {
    var kbpw     = $(this).val();
    var correct  = 0;

    console.log($(this).val());

  if (kbpw.length >= 8){
    correct++;
  }
  if (kbpw.match(/[A-z]/)) {
    correct++;
  }
  if (kbpw.match(/[A-Z]/)) {
    correct++;
  }
  if (kbpw.match(/[!@#$%\^&*(){}[\]<>?/|\-+]/)) {
    correct++;
  }
  if (kbpw.match(/\d/)) {
    correct++;
  }
  if (correct != 5) {
    $(this).addClass('valide');
    $(this).removeClass('invalide');
  } else {
    $(this).removeClass('valide');
    $(this).addClass('invalide');
  }
});

// Passwort überprüfung, ob Wiederholung ident
$('#validationCustom05').keyup(function() {
  var originalPW = $('#validationCustom05').val();
  var validationPW = $('#customControlValidation06').val();

  if (originalPW === validationPW) {
    $('#validationCustom05').addClass('valide');
    $('#validationCustom05').removeClass('invalide');
  } else {
    $('#validationCustom05').removeClass('valide');
    $('#validationCustom05').addClass('invalide');
  }
});

$('#validationCustom06').keyup(function() {
  var originalPW = $('#validationCustom05').val();
  var validationPW = $('#validationCustom06').val();

  if (originalPW === validationPW) {
    $('#validationCustom06').addClass('valide');
    $('#validationCustom06').removeClass('invalide');
  } else {
    $('#validationCustom06').removeClass('valide');
    $('#validationCustom06').addClass('invalide');
  }
});


// Function mit der Überprüft wird, ob nun alle notwendigen Felder mit
// der Classe "valide" gefüllt sind, nur dann wird der Button sichtbar

function countValide() {
  var countClass = 0;

  $('.container-fluid input').selector(function() {
    if ($(this).hasClass('valide')) {
      countClass++
      console.log(countClass);
    }
  });

  if (countClass == $('.container-fluid input').length) {
    $('.btn-primary').show();
  } else {
    $('.btn-primary').hide();
    $(this).css('border', '2px solid red');
  }
};
