function ageCount() {
    var now =new Date();                            //getting current date
    var currentY= now.getFullYear();                //extracting year from the date
    var currentM= now.getMonth();                   //extracting month from the date
      
    var dobget =document.getElementById("birthday").value; //getting user input
    var dob= new Date(dobget);                             //formatting input as date
    var prevY= dob.getFullYear();                          //extracting year from input date
    var prevM= dob.getMonth();                             //extracting month from input date
      
    var ageY =currentY - prevY;
    var ageM =Math.abs(currentM- prevM);          //converting any negative value to positive
      
    document.getElementById('demo').innerHTML = ageY +' years ' + ageM +' months';
    }

    function submitBday() {
        var Q4A = "Your birthday is: ";
        var Bdate = document.getElementById('bday').value;
        var Bday = +new Date(Bdate);
        Q4A += Bdate + ". You are " + ~~ ((Date.now() - Bday) / (31557600000));
        var theBday = document.getElementById('resultBday');
        theBday.innerHTML = Q4A;
        
    }