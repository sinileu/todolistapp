function checkFunction() {
    
    var check = document.getElementsByTagName("input");
    var count =  0;
    let myPromise = new Promise(function(myReject) {
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            count++;
            if(count ==5){
                alert("5 tasks successfully completed.");
                return true;
            }
            else {
                console.log("")
              myReject("Error");
           }
        }
       
    }
   });
  }