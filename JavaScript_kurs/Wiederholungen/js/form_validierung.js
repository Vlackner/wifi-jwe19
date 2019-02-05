 $('.btn-primary.accept').hide();

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
   countValide()
 });


 // Validierung von Input - Text Feldern
 // Vorname und Nachname
 // Der Name muss länger wie 0 Zeichen sein, darf keine Zahlen beinhalten
 // und muss auch Klein- und Großbuchstaben bestehen

 /* $('.personID').keyup(function() {
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
 }); */

 $('.personID').keyup(function() {
   var inputID = $(this).val();
   var richtig = 0;

   if (inputID.length > 0 && inputID.match(/[A-z]/) && inputID.match(/[A-Z]/)) {
     richtig++;
   }
   if (inputID.match(/[!@#$%\^&*(){}[\]<>?/|\-+]/) || inputID.match(/\d/)) {
     richtig = 0;
   }
   if (richtig == 1) {
     $(this).addClass('valide');
     $(this).css('border', '2px solid green');
     $(this).removeClass('invalide');
   } else {
     $(this).removeClass('valide');
     $(this).addClass('invalide');
     $(this).css('border', '2px solid red');
   }
   countValide()
 });

 // Telefonnummer
 // Die Eingabe darf nur Zahlen und ein + und ein / beinhalten

 /* $('#validationCustom03').keyup(function() {
   var telefon = $('#validationCustom03').val();
   var regexTel = /[0-9 -()+]+$/;

   if (regexTel.test(telefon)) {
     $('#validationCustom03').addClass('valide');
     $(this).css('border', '2px solid green');
     $('#validationCustom03').removeClass('invalide');
   } else {
     $('#validationCustom03').addClass('invalide');
     $(this).css('border', '2px solid red');
     $('#validationCustom03').removeClass('valide');
   }
   countValide()
 }); */

 $('#validationCustom03').keyup(function() {
   var telefon = $('#validationCustom03').val();
   var regexTel = /(^(\+?[0-9]+)?((\s|\-|\.)[0-9]+)+$)|(^[0-9]+$)/i;

   if (regexTel.test(telefon)) {
     $('#validationCustom03').addClass('valide');
     $(this).css('border', '2px solid green');
     $('#validationCustom03').removeClass('invalide');
   } else {
     $('#validationCustom03').addClass('invalide');
     $(this).css('border', '2px solid red');
     $('#validationCustom03').removeClass('valide');
   }
   countValide()
 });

 // E-Mail Adresse
 // Die Eingabe darf sämtliche Zeiten beinhalten und muss ein @ Zeichen beinhalten

 $('#validationCustom04').keyup(function() {
   var mail = $('#validationCustom04').val();
   var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (regexMail.test(mail)) {
     $('#validationCustom04').addClass('valide');
     $(this).css('border', '2px solid green');
     $('#validationCustom04').removeClass('invalide');
   } else {
     $('#validationCustom04').addClass('invalide');
     $(this).css('border', '2px solid red');
     $('#validationCustom04').removeClass('valide');
   }
   countValide()
 });




 // Passwort überprüfen, ob die Kriterien erfüllt wurden
 // Mindestlänge von 8 Zeichen
 // Mindestens 1 Klein- und 1-Großbuchstabe
 // Mindestens 1 Sonderzeichen
 // Mindestens 1 Ziffern

 $('.kb-password').keyup(function() {
   var kbpw = $(this);
   var correct = 0;

   console.log($(this).val());

   if (kbpw.val().length >= 8 /*&& kbpw.match(/[A-z]/) && kbpw.match(/[A-Z]/) && kbpw.match(/[!@#$%\^&*(){}[\]<>?/|\-+]/) && kbpw.match(/\d/)*/ ) {
     correct++;
   }
   if (kbpw.val().match(/[A-z]/)) {
     correct++;
   }
   if (kbpw.val().match(/[A-Z]/)) {
     correct++;
   }
   if (kbpw.val().match(/[!@#$%\^&*(){}[\]<>?/|\-+]/)) {
     correct++;
   }
   if (kbpw.val().match(/\d/)) {
     correct++;
   }
   console.log(correct);
   if (correct == 5) {
     $(this).addClass('valide');
     $(this).css('border', '2px solid green');
     $(this).removeClass('invalide');
   } else {
     $(this).removeClass('valide');
     $(this).addClass('invalide');
     $(this).css('border', '2px solid red');
   }
   countValide()
 });

 // Passwort überprüfung, ob Wiederholung ident
 /*  $('#validationCustom05').keyup(function() {
   var originalPW = $('#validationCustom05').val();
   var validationPW = $('#validationCustom06').val();

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
 */

 $('.kb-password').keyup(function() {
   var originalPW = $('#validationCustom05').val();
   var validationPW = $('#validationCustom06').val();

   if (originalPW === validationPW && originalPW != "") {
     $('.kb-password').addClass('valide');
     $(this).css('border', '2px solid green');
     $('.kb-password').removeClass('invalide');
   } else {
     $('.kb-password').removeClass('valide');
     $('.kb-password').addClass('invalide');
     $(this).css('border', '2px solid red');
   }
   countValide()
 });

 // Datumsüberprüfung

 $('#datetime').on('keyup change', function() {
   var dateinput = $(this).val();
   var regexDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
   var regexDateSlash = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

   if (regexDate.test(dateinput) || regexDateSlash.test(dateinput) || dateinput != "") {
     $('#datetime').addClass('valide');
     $(this).css('border', '2px solid green');
     $('#datetime').removeClass('invalide');
   } else {
     $('#datetime').removeClass('valide');
     $('#datetime').addClass('invalide');
     $(this).css('border', '2px solid red');
   }
 });

 /*  if ($('#datetime').val() != "") {
     $('#datetime').addClass('valide');
     $(this).css('border', '2px solid green');
     $('#datetime').removeClass('invalide');
   } else {
     $('#datetime').removeClass('valide');
     $('#datetime').addClass('invalide');
     $(this).css('border', '2px solid red');
   }
 }); */

 $(document).ready(function() {
   var date_input = $('input[name="date"]'); //our date input has the name "date"
   var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
   var options = {
     format: 'dd/mm/yyyy',
     container: container,
     todayHighlight: true,
     autoclose: true,
   };
   date_input.datepicker(options);
 });

 // Checkbox AGB zustimmen

 $('#invalidCheck').on('click change', function() {
   if ($(this).prop("checked")) {
     $('#invalidCheck').addClass('valide');
     $('#invalidCheck').removeClass('invalide');
   } else {
     $('#invalidCheck').addClass('invalide');
     $(this).css('border', '2px solid red');
     $('#invalidCheck').removeClass('valide');
   }
   countValide()
 });


 // Function mit der Überprüft wird, ob nun alle notwendigen Felder mit
 // der Classe "valide" gefüllt sind, nur dann wird der Button sichtbar

 function countValide() {
   var countClass = 0;

   $('.container-fluid input').each(function() {
     if ($(this).hasClass('valide')) {
       countClass++
     }
   });
   console.log(countClass);
   console.log($('.container-fluid input').length);

   if (countClass == $('.container-fluid input').length - 3) {
     $('.btn-primary.accept').show();
   } else {
     $('.btn-primary.accept').hide();
   }
 };
