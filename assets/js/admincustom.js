var server = localStorage.getItem("Server");
$(function(){
connection();
$("#inds").load(server+"allindustries.php");
$("#industryorder").load(server+"allindustries.php");
$("#notifications").load(server+"notifications.php");
$("#leftmenu").load(server+"adminleft.php");
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

   $("#ordercreate").on('submit', function(e){
    e.preventDefault();
    $("#cby").val(localStorage.getItem("User"));
     var fdata = $("#ordercreate").serialize();
     $.ajax({
        url:server+"previewOrder.php",
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

  // var url = server+"employeesList.php";
// $("#emps tbody").html("");
// $.getJSON(url,function(data){
//    $.each(data.users, function(i,user){
//       var newRow=
//       "<tr>"
//       +"<td>"+(i+1)+"</td>"
//       +"<td>"+user.Name+"</td>"
//       +"<td>"+user.Designation+"</td>"
//       +"<td>"+user.Mobile+"</td>"
//       +"<td>"+atob(user.Password)+"</td>"
//       +"</tr>";
//       $(newRow).appendTo("#emps tbody");
//    });
// });

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

// $("#customers tbody").html("");
// var url2 = server+"customers.php";
// $.getJSON(url2,function(data){
//    $.each(data.users, function(i,user){
//       var newRow=
//       "<tr>"
//       +"<td>"+(i+1)+"</td>"
//       +"<td>"+user.Name+"</td>"
//       +"<td>"+user.Type+"</td>"
//       +"<td>"+"BPMC0"+user.Sno+"</td>"
//       +"<td>"+atob(user.Password)+"</td>"
//       +"<td>"+user.Address1+","+user.Address2+"</td>"
//       +"<td>"+user.City+"</td>"
//       +"<td>"+user.State+"</td>"
//       +"<td>"+user.StateCode+"</td>"
//       +"<td>"+user.Phone+"</td>"
//       +"<td>"+user.Fax+"</td>"
//       +"<td>"+user.Email+"</td>"
//       +"<td>"+user.Cperson+"</td>"
//       +"<td>"+user.Cpdesignation+"</td>"
//       +"<td>"+user.Cpemail+"</td>"
//       +"<td>"+user.Pan+"</td>"
//       +"<td>"+user.Gst+"</td>"
//       +"<td>"+user.Plist+"</td>"
//       +"<td>"+user.Industry+"</td>"
//       +"</tr>";
//       $(newRow).appendTo("#customers tbody");
//    });
// });

// $("#products tbody").html("");
// var url2 = server+"products.php";
// $.getJSON(url2,function(data){
//    $.each(data.users, function(i,user){
//       var newRow=
//       "<tr>"
//       +"<td>"+(i+1)+"</td>"
//       +"<td>"+user.ProductId+"</td>"
//       +"<td>"+user.Name+"</td>"
//       +"<td>"+user.Supplier+"</td>"
//       +"<td>"+user.Uom+"</td>"
//       +"<td>"+user.HsnCode+"</td>"
//       +"<td>"+user.Tax+"</td>"
//       +"<td>"+user.AdjustmentPrice+"</td>"
//       +"<td>"+user.MinQty+"</td>"
//       +"<td>"+user.Emails+"</td>"
//       +"<td>"+user.Commoditive+"</td>"
//       +"<td>"+user.Industry+"</td>"
//       +"</tr>";
//       $(newRow).appendTo("#products tbody");
//    });
// });

// $("#orders tbody").html("");
// var url2 = server+"orders.php";
// $.getJSON(url2,function(data){
//    $.each(data.users, function(i,user){
//      var newRow=
//       "<tr onclick='showOrder(\""+user.OrderId+"\");'>"
//       +"<td>"+(i+1)+"</td>"
//       +"<td>"+user.OrderId+"</td>"
//       +"<td>"+user.CreateBy+"</td>"
//       +"<td>"+user.Division+"</td>"
//       +"<td>"+user.Customer+"</td>"
//       +"<td>"+user.Industry+"</td>"
//       +"<td align='right'>"+user.Amount+"</td>"
//       +"</tr>";
//       $(newRow).appendTo("#orders tbody");
//    });
// });

var url3 = server+"customerlist.php";
$("#customer").html("");
var newRow= "<option value=''>SELECT CUSTOMER</option>";
$(newRow).appendTo("#customer");
$.getJSON(url3,function(data){
   $.each(data.customers, function(i,customer){
      var newRow=
      "<option value='"+customer.Sno+"'>"+customer.Name+"</option>";
      $(newRow).appendTo("#customer");
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

function showComment(val,id){
    if(val != ''){
      $("#"+id).show();
    }else{
    $("#"+id).hide();
    }
}
function logout(){
  localStorage.removeItem("Users");
  localStorage.removeItem("Role");
  location.href="index.html";
}
function showOrder(oid){
localStorage.setItem("Order",oid);
 location.href="ViewOrder.html";
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