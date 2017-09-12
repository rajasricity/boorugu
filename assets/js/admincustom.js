var server = "http://mukthasis.com/boorugu/";
$(function(){
connection();
  $("#innbody").css("height",$( window ).height()-20);
  $("#srcreate").on('submit', function(e){
    e.preventDefault();
     var fdata = $("#srcreate").serialize();
     $.ajax({
        url:server+"createSr1.php",
        data:fdata,
        type:"post",
        success: function(str){
          $("#smsg").show();
          $("#srcreate")[0].reset();
        },
        error: function(xhr){
           alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        }
     });
  });
});
function connection(){
  $.ajax({
     url:server+"checkConnection.php",
     success: function(str){
       $("#connectloader").modal("hide");
     },
     error: function(xhdr){
       $("#connectloader").modal("show");
     }
  });
}