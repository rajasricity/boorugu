var server = "http://mukthasis.com/boorugu/";
$(function(){
connection();
//localStorage.removeItem("User");
//localStorage.removeItem("Role");
if(localStorage.getItem('User') && localStorage.getItem("Role")){

}else{
  location.href="index.html";
}
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
  $("#increate").on('submit', function(e){
    e.preventDefault();
     var fdata = $("#increate").serialize();
     $.ajax({
        url:server+"createindustry.php",
        data:fdata,
        type:"post",
        success: function(str){
          alert(str);
          $("#smsg").show();
          $("#increate")[0].reset();
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
 $("#productcreate").on('submit', function(e){
    e.preventDefault();
     var fdata = $("#productcreate").serialize();
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
          $("#productcreate")[0].reset();
        },
        error: function(xhr){
           alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        }
     });
  });

$("#emps tbody").html("");
var url = server+"employeesList.php";
$("#emps tbody").html("");
$.getJSON(url,function(data){
   $.each(data.users, function(i,user){
      var newRow=
      "<tr>"
      +"<td>"+(i+1)+"</td>"
      +"<td>"+user.Name+"</td>"
      +"<td>"+user.Designation+"</td>"
      +"<td>"+user.Mobile+"</td>"
      +"<td>"+atob(user.Password)+"</td>"
      +"</tr>";
      $(newRow).appendTo("#emps tbody");
   });
});

$("#industry tbody").html("");
var url1 = server+"industries.php";
$.getJSON(url1,function(data){
   $.each(data.users, function(i,user){
      var newRow=
      "<tr>"
      +"<td>"+(i+1)+"</td>"
      +"<td>"+user.Industry+"</td>"
      +"</tr>";
      $(newRow).appendTo("#industry tbody");
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

$("#products tbody").html("");
var url2 = server+"products.php";
$.getJSON(url2,function(data){
   $.each(data.users, function(i,user){
      var newRow=
      "<tr>"
      +"<td>"+(i+1)+"</td>"
      +"<td>"+user.ProductId+"</td>"
      +"<td>"+user.Name+"</td>"
      +"<td>"+user.Supplier+"</td>"
      +"<td>"+user.Uom+"</td>"
      +"<td>"+user.HsnCode+"</td>"
      +"<td>"+user.Tax+"</td>"
      +"<td>"+user.AdjustmentPrice+"</td>"
      +"<td>"+user.MinQty+"</td>"
      +"<td>"+user.Emails+"</td>"
      +"<td>"+user.Commoditive+"</td>"
      +"<td>"+user.Industry+"</td>"
      +"</tr>";
      $(newRow).appendTo("#products tbody");
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