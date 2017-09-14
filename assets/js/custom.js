var server = "http://mukthasis.com/boorugu/";
$(function(){
connection();
if(localStorage.getItem("User")){
  if(localStorage.getItem("Role") == 'Admin'){
    location.href='AdminDashboard.html';
  }else if(localStorage.getItem("Role") == 'Customer'){
    location.href='Customer/Dashboard.html';
  }else if(localStorage.getItem("Role") == 'Sales'){
    location.href='Sales/Dashboard.html';
  }
}else{

}
  $("#innbody").css("height",$( window ).height()-20);
	$("#adminlogin").on('submit',function(e){
		e.preventDefault();
		var fdata = $("#adminlogin").serialize();
        $.ajax({
           url:server+"adminlogin.php",
           data:fdata,
           type:"post",
           beforeSend:function(){
           $("#ploader").show();
           },
           success: function(str){
           $("#ploader").hide();
           if(str != '0'){
             localStorage.setItem("User",str.AdminId);
             localStorage.setItem("Role","Admin");
             location.href='AdminDashboard.html';
           }else{
             $("#emsg").show();
           }
           },
           error: function(xhdr){
            $("#connectloader").modal("show");
           }
        });
	});

    $("#customerlogin").on('submit',function(e){
		e.preventDefault();
		var fdata = $("#customerlogin").serialize();
        $.ajax({
           url:server+"customerlogin.php",
           data:fdata,
           type:"post",
           beforeSend:function(){
           $("#ploader").show();
           },
           success: function(str){
           $("#ploader").hide();
           if(str != '0'){
             localStorage.setItem("User",str.CustomerId);
             localStorage.setItem("Role","Customer");
             location.href='Customer/Dashboard.html';
           }else{
             $("#emsg").show();
           }
           },
           error: function(xhdr){
            $("#connectloader").modal("show");
           }
        });
	});

    $("#saleslogin").on('submit',function(e){
		e.preventDefault();
		var fdata = $("#saleslogin").serialize();
        $.ajax({
           url:server+"saleslogin.php",
           data:fdata,
           type:"post",
           beforeSend:function(){
           $("#ploader").show();
           },
           success: function(str){
           $("#ploader").hide();
           if(str != '0'){
             localStorage.setItem("User",str.CustomerId);
             localStorage.setItem("Role","Sales");
             location.href='Sales/Dashboard.html';
           }else{
             $("#emsg").show();
           }
           },
           error: function(xhdr){
            $("#connectloader").modal("show");
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