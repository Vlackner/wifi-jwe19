// Allgemeine Funktion, mit der die Class Valide gesetzt wird
function setValide(selector) {
    selector.addClass('valide');
    selector.removeClass('invalide');
  }

// Allgemeine Funktion, mit der die Class Invalide gesetzt wird
  function setInvalide(selector) {
    selector.addClass('invalide');
    selector.removeClass('valide');
  }

// Allgemeine Funktion, mit der die Validen Class gezählt werden

function countValide() {
  var countValideClass = 0;

  $('.formular_inputfields input').each(function () {
      if ($(this).hasClass('valide')){
      countValideClass++
    }
  });

 //console.log($('.formular_inputfields input').length);

  var inputs = $('input[name="cf_salutation"]').first().length
           + $('input[type="text"]').length
           + $('input[type="email"]').length
           + $('input[type="password"]').length
           + $('input[type="checkbox"]').length;

  console.log(inputs);
  console.log(countValideClass);

  if (countValideClass == inputs) {
 /*if (countValideClass == $('.formular_inputfields input').length){*/
    $('.btn').removeAttr('disabled');
  } else {
    $('.btn').attr('disabled');
  }
};

// Prüft, ob ein Ratio Button aktiviert wurde
 $('input[name="cf_salutation"]').on('click change', function() {

  console.log($('input[name="cf_salutation"]:checked').length);

  if ($('input[name="cf_salutation"]:checked').length == 1) {
    setValide($('input[name="cf_salutation"]:checked'))
  } else {
    setInvalide($('input[name="cf_salutation"]'))
  }
  countValide()
});


/* $('input[name="cf_salutation"]').on('click change', function() {

  if ($(this).prop("checked")) {
    setValide($('input[name="cf_salutation"]'));
} else {
    setInvalide($('input[name="cf_salutation"]'));
}
}); */

// Validierung des Vor- und Nachnamen
// Es dürfen keine Sonderzeichen oder Zahlen vorkommen

$('.personID').on('click keyup', function() {
    var personInput  = $(this);
    var richtig      = 0;

    if (personInput.val().length >= 2 && personInput.val().match(/[A-z]/) && personInput.val().match(/[A-Z]/)) {
      richtig++;
    }
    else {
      richtig == 0;
    }
    if (richtig == 1) {
      setValide($(this));
    } else {
      setInvalide($(this));
    }
    countValide()
});


// Validierung der E-Mail-Adresse
// Es muss ein @ Zeichen vorkommen und ein . vor dem Ende

$('#cf_email').on('click keyup', function (){
    var emailInput   = $(this);
    var regexMail    = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexMail.test(emailInput.val())) {
      setValide($('#cf_email'));
    } else {
      setInvalide($('#cf_email'));
    }
    countValide()
});

// Passwort muss mindestens 6 Zeichen haben
// 1 Sonderzeichen, 1 Großbuchstabe, 1 Kleinbuchstaben und 1 Ziffer

$('.kb_passwort').on('click keyup', function(){
    var pwInput  = $(this);
    var correct  = 0;

    console.log($(this).val());

    if (pwInput.val().length >= 6) {
      correct++;
    }
    if (pwInput.val().match(/[A-z]/)) {
      correct++;
    }
    if (pwInput.val().match(/[A-Z]/)) {
      correct++;
    }
    if (pwInput.val().match(/\d/)) {
      correct++;
    }
    if (pwInput.val().match(/[!@#$%\^&*(){}[\]<>?/|\-+]/)) {
      correct++;
    }
    if (correct == 5) {
      setValide($(this));
    } else {
      setInvalide($(this));
    }
    countValide()
});

// Passwort Wiederholung muss ident sein wie das Passwort davor

$('.kb_passwort').keyup(function() {
    var originalPW      = $('#cf_pwd');
    var confirmationPW  = $('#cf_pwd_confirmation');

    console.log($('#cf_pwd').val());
    console.log($('#cf_pwd_confirmation').val());

    if (confirmationPW.val() === originalPW.val() && originalPW.val() != "") {
      setValide($('.kb_passwort'));
    } else {
      setInvalide($('.kb_passwort'));
    }
    countValide()
});

// Prüfen ob das Datum ausgewählt wurde

$('#cf_date').on('keyup change',function() {
    var dateInput      = $(this).val();
    var regexDateDot   = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
    var regexDateSlash = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

    if(regexDateDot.test(dateInput) || regexDateSlash.test(dateInput)) {
      setValide($('#cf_date'));
    } else {
      setInvalide($('#cf_date'));
    }
    countValide()
});

// Prüfen, ob die Datenschutzbestimmungen abgehackt wurden

$('#cf_policy').click(function () {
  if ($(this).prop("checked")) {
    setValide($('#cf_policy'));
  } else {
    setInvalide($('#cf_policy'));
  }
  countValide()
});
