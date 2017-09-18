var server = "http://mukthasis.com/boorugu/";
$(function(){
connection();
$("#innbody").css("height",$( window ).height()-20);
$("#order").load(server+"loadOrder.php?oid="+localStorage.getItem("Order"));
$("#ordercreate").on('submit', function(e){
    e.preventDefault();
    $("#cby").val(localStorage.getItem("User"));
     var fdata = $("#ordercreate").serialize();
     $.ajax({
        url:server+"ordercreate_sales.php",
        data:fdata,
        type:"post",
        beforeSend:function(){
          $("#ploader").show();
        },
        success: function(str){
          $("#ploader").hide();
          $("#smsg").show();
          $("#ordercreate")[0].reset();
          $("#submit").prop('disabled',false);
        },
        error: function(xhr){
           alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        }
     });
  });

  $("#customercreate").on('submit', function(e){
    e.preventDefault();
     var fdata = $("#customercreate").serialize();
     $.ajax({
        url:server+"create.php",
        data:fdata,
        type:"post",
        beforeSend:function(){
          $("#ploader").show();
        },
        success: function(str){
          $("#ploader").hide();
          $("#smsg").show();
          $("#customercreate")[0].reset();
        },
        error: function(xhr){
           alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        }
     });
  });


$("#orders_sales tbody").html("");
var url2 = server+"orders_sales.php?sid="+localStorage.getItem("User");
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
      $(newRow).appendTo("#orders_sales tbody");
   });
});

var url4 = server+"industries.php";
$("#industryorder").html("");
var newRow= "<option value=''>SELECT INDUSTRY</option>";
$(newRow).appendTo("#industryorder");
$.getJSON(url4,function(data){
   $.each(data.users, function(i,indus){
      var newRow=
      "<option value='"+indus.Sno+"'>"+indus.Industry+"</option>";
      $(newRow).appendTo("#industryorder");
   });
});

$("#customers tbody").html("");
var url2 = server+"customers.php";
$.getJSON(url2,function(data){
   $.each(data.users, function(i,user){
      var newRow=
      "<tr>"
      +"<td>"+(i+1)+"</td>"
      +"<td>"+user.Name+"</td>"
      +"<td>"+user.Type+"</td>"
      +"<td>"+"BPMC0"+user.Sno+"</td>"
      +"<td>"+atob(user.Password)+"</td>"
      +"<td>"+user.Address1+","+user.Address2+"</td>"
      +"<td>"+user.City+"</td>"
      +"<td>"+user.State+"</td>"
      +"<td>"+user.StateCode+"</td>"
      +"<td>"+user.Phone+"</td>"
      +"<td>"+user.Fax+"</td>"
      +"<td>"+user.Email+"</td>"
      +"<td>"+user.Cperson+"</td>"
      +"<td>"+user.Cpdesignation+"</td>"
      +"<td>"+user.Cpemail+"</td>"
      +"<td>"+user.Pan+"</td>"
      +"<td>"+user.Gst+"</td>"
      +"<td>"+user.Plist+"</td>"
      +"<td>"+user.Industry+"</td>"
      +"</tr>";
      $(newRow).appendTo("#customers tbody");
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

function ShowCustomers(ind){
  var fdata={"ind":ind};
  $.ajax({
     url:server+"showCustomers.php",
     data:fdata,
     type:"post",
     success: function(str){
       $("#cus").html(str);
     }
  });
}
function changePassword(){
  var npass = $("#npass").val();
  var cnpass = $("#cnpass").val();
  var fdata = {"npass":npass,"cnpass":cnpass,"user":localStorage.getItem("User"),"table":"sales"};
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
         $("#npass").val('');
         $("#cnpass").val('');
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