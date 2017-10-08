var server = localStorage.getItem("Server");
$(function(){
connection();
$("#innbody").css("height",$( window ).height()-20);
$("#order").load(server+"loadOrder.php?oid="+localStorage.getItem("Order"));
$("#notifications").load(server+"notificationscustomer.php");
$("#leftmenu").load(server+"leftcustomer.php");
$("#ordercreate").on('submit', function(e){
    e.preventDefault();
    $("#cby").val(localStorage.getItem("User"));
     var fdata = $("#ordercreate").serialize();
     $.ajax({
        url:server+"previewOrderCustomer.php",
        data:fdata,
        type:"post",
        beforeSend:function(){
          $("#ploader").show();
        },
        success: function(str){
          $("#ploader").hide();
          $("#preview").html(str);
        },
        error: function(xhr){
           alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        }
     });
  });

$("#orders_customer tbody").html("");
var url2 = server+"orders_customer.php?cid="+localStorage.getItem("User");
$.getJSON(url2,function(data){
   $.each(data.users, function(i,user){
     var newRow=
      "<tr onclick='showOrder(\""+user.OrderId+"\");'>"
      +"<td>"+(i+1)+"</td>"
      +"<td>"+user.OrderId+"</td>"
      +"<td>"+user.CreateBy+"</td>"
      +"<td>"+user.Division+"</td>"
      +"<td>"+user.Customer+"</td>"
      +"<td>"+user.Industry+"</td>"
      +"<td align='right'>"+user.Amount+"</td>"
      +"</tr>";
      $(newRow).appendTo("#orders_customer tbody");
   });
});

// var url4 = server+"industriescustomer.php?cid="+localStorage.getItem("User");
// $("#industryorder").html("");
// var newRow= "<option value=''>SELECT INDUSTRY</option>";
// $(newRow).appendTo("#industryorder");
// $.getJSON(url4,function(data){
//    $.each(data.users, function(i,indus){
//       var newRow=
//       "<option value='"+indus.Sno+"'>"+indus.Industry+"</option>";
//       $(newRow).appendTo("#industryorder");
//    });
// });

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

function showOrderForm(inds){
  if(inds != ''){
    var fdata = {"inds":inds};
   $.ajax({
      url:server+"orderform.php",
      data:fdata,
      type:"post",
      success: function(str){
        $("#oform").html(str);
      }
   });
  }
}

function changePassword(){
  var npass = $("#npass").val();
  var cnpass = $("#cnpass").val();
  var fdata = {"npass":npass,"cnpass":cnpass,"user":localStorage.getItem("User"),"table":"customers"};
  $.ajax({
     url:server+"changePassword.php",
     data:fdata,
     type:"post",
     beforeSend: function(){
       $("#preloader").show();
     },
     success: function(str){
       $("#preloader").hide();
       if(str == "Success"){
         $("#emsg").hide();
         $("#smsg").show();
       }else{
         $("#emsg").show();
       }
     }
  });
}

function showOrder(oid){
localStorage.setItem("Order",oid);
 location.href="ViewOrder.html";
}