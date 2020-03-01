
function myFunction() {
          var x = document.getElementById("input").value;
          if (x=="")
          {
              alert("Please provide the valid input");
          }
          else{
              var li = document.createElement("li");
                var rule = document.createTextNode(x);
                li.appendChild(rule);
              document.getElementById("input").value = "";
          }
         
        }
        