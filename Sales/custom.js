var server = "http://mukthasis.com/boorugu/";
$(function(){
connection();
//localStorage.removeItem("User");
//localStorage.removeItem("Role");
if(localStorage.getItem('User') && localStorage.getItem("Role")){

}else{
  location.href="../index.html";
}
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
function logout(){
  localStorage.removeItem("Users");
  localStorage.removeItem("Role");
  location.href="../index.html";
}