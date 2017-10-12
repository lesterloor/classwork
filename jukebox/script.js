SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

var nameContent

$( document ).ready(function() {

    $(".liResult").on( "click", function(){
      console.log("clicked ")
    });
    $("#playBTN").on( "click", function(){
      if($("#playClass" ).attr( "class") == "fa fa-play"){
        $("#playClass" ).attr( "class", "fa fa-pause")
      }else{
        $("#playClass" ).attr( "class", "fa fa-play")
      }
    })
  
    $('#submit').click(function(e){
      e.preventDefault()
      $( ".ulResult" ).empty();
      var enteredName = document.getElementById('input_name').value;
      SC.get('/tracks', {
        genres: enteredName ,limit: 10
      }).then(function(tracks) {
        console.log(tracks);
        for(var i = tracks.length - 1; i >= 0; --i){
              $('.ulResult').append(
              $('<li class="liResult">')
              .html("<span class='spanResult' name="+tracks[i].title.substring(0,30)+" id="+tracks[i].id+">"+tracks[i].title.substring(0,30)+"</span>")
              )
        }

        $(".liResult").on( "click", function(){
          $( ".currenttitlenow" ).empty();


         var songID =  $(".spanResult" ).attr( "id");
         var songtitlecurrent =  $(".spanResult" ).text().substring(0,20);
         $('#currenttrack').append(
         $('<p class="currenttitle">')
         .html("<span class='currenttitlenow'>"+songtitlecurrent+"</span>")
         )
         SC.stream('/tracks/'+songID).then(function(player){
           player.play();
         });
        });
      });
     });




});
