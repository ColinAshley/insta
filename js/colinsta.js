/* Name: colinsta.js (JavaScript practise)
   Date: 30th Jan 2018
   Description: A viewport on my Instagram account #:o)
*/

/* Populate the 'instafeed' division with my instagram feed */
/* I added a customer 'after' function to randomly rotate the photos */
let userFeed = new Instafeed({
   get: 'user',
      userId: '211682409',
      accessToken: '211682409.76afedd.d34e2b3ffd604a04853c2d76c236fd94',
      after: function() {
         pinImages();
      },
      limit: 50,
});

function pinImages () {
   $('*').each( function() {
      if ( $(this).is('img') ) {
         let degs=Math.floor(Math.random() * 30);
         $(this).css({'transform': 'rotate('+degs+'deg)'});
      }
   });
}
