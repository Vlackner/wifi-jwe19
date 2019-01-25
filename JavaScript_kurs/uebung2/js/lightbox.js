var $lightboxWrapper = $('.lightbox-wrapper');

for (var i = 1; i <= 23; i++) {

  // Dateierweiterung
  var src = '.jpg';

  if (i.toString().length == 1) {
    // Wenn der Index nur 1-stellig ist, dann wir mit 00 aufgefüllt
    src = '00' + i + src;
  } else if (i.toString().length == 2) {
    // Wenn der Index nur 2-stellig ist, dann wir mit 0 aufgefüllt
    src = '0' + i + src;
  } else {
    // Wenn der Index nur 3-stellig ist, dann wir i ausgegeben
    src = i + src;
  }

  // Erstellen des HTML-Tags
  var htmlTag = '<img src="img/thumbnails/' +
    src + '" class="lightbox-img" data-fullscreen="img/fullscreen/' +
    src + '">';

  // console.log(htmlTag);

  $lightboxWrapper.append(htmlTag);
};

$('.lightbox-img').click(function() {
  // Das richtige Bild ermitteln
  var $currentClickedImage = $(this);
  var imageTag = '<img src="' + $currentClickedImage.attr('data-fullscreen') + '" alt="">';

  // Bild wird hier in einen im HTML Markup befindlichen DIV-Container geladen
  // Anschließend wird der DIV-Container (Modal) eingeblendet

  $('#MyModal .modal-body').html(imageTag);
  $('#MyModal').modal('show');
});
