// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Hello everyone!' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'green',
      'background-color': 'blue'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.kyusan-u.ac.jp">HSU</a></p>' );
    $( 'footer a' ).css( 'color','red' );
  });

  $( '#buttonaside' ).click( function() {
  $( 'aside' ).css( 'background-color','blue' );
});

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });

  $('#buttonchange').click( function() {
     $('main').css('flex-direction','column-reverse');
   });


});
