 function showTime(){
   	   	   	 var date = new Date();
   	   	   	 var h = date.getHours(); //0-23
   	   	   	 var m = date.getMinutes(); //0-59
   	   	   	 var s = date.getSeconds(); //0-59
             var session = "AM";

             if(h ==0){
             	 h=12;
             }

             if(h > 12){
             	 h = h - 12;
             	 session = "PM";
             }

             

   	   	   	 var time = h + ":" + m + ":" + s;
   	   	   	 document.getElementById("MyClockDisplay").innerText = time;
   	   	   	 document.getElementById("MyClockDisplay").textContent = time;

   	   	   	 setTimeout(showTime, 1000);
   	   	   }

           showTime();

var home = getElementById('after');
