function validate() {
    var text = "";

    // Name Validate
        if(document.myForm.name.value == ""){
            text = "Name Can not be Empty";
            document.getElementById('result').innerHTML = text;
            document.myForm.name.focus();

            return false;
        }
        if(document.myForm.email.value == ""){
            text = "Email Can not be Empty";
            document.getElementById('result').innerHTML = text;
            document.myForm.email.focus();

            return false;
        }
        // Email Validate
        var emailId = document.myForm.email.value ;

        var atposn = emailId.indexOf("@");
        var dotposn = emailId.lastIndexOf(".");


        if(atposn < 1 || dotposn - atposn < 2 ) {
            text = "Please Enter Valid Email";
            document.getElementById('result').innerHTML = text;
            document.myForm.email.focus();

            return false;
        }

    //Date Validate
    let inputDate = document.myForm.date.value;
   
    if (inputDate == "") {
        text = "Date Can not be Empty or invalid date";
        document.getElementById('result').innerHTML = text;
        document.myForm.date.focus();
        return false;
    }

    let currentDate = new Date();
    
    let currentDay = currentDate.getDate();
    
    let currentMonth = currentDate.getMonth() + 1;
    
    let currentYear = currentDate.getFullYear();
   
    let currentFullDate = currentYear + "-" + currentMonth + "-" + currentDay;
    
    if (inputDate < currentFullDate) {
        text = "That Date is old Please Enter valide date ";
        document.getElementById('result').innerHTML = text;
        document.myForm.date.focus();
        return false;
    }


    //Time Validate

    const inputTime = document.myForm.time.value;

    if (inputTime == "") {
        text = "Time Can not be Empty or invalid time";
        document.getElementById('result').innerHTML = text;
        document.myForm.time.focus();
        return false;
    }



    //Number of People Validate
    const peopleNum = document.myForm.people.value;

    if (peopleNum == "" || peopleNum<=0 || isNaN(document.myForm.people.value)) {
        text = "Number of People Can not be Empty or invalid number";
        document.getElementById('result').innerHTML = text;
        document.myForm.people.focus();
        return false;
    }


}