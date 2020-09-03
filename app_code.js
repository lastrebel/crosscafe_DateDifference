// 
// Calculator of Dates
// by Jozef Scensny and Brano Valasek
//

var txt_show_msg;

//show instructions into text field for result
document.getElementById("txt_result").innerHTML='Enter both dates for calculation.';

// add EventLisener to button
btn_calculate_result.addEventListener('click', calculateClick);


// MyDate class
/// Year - 
function MyDate(year, month, day) {
    this.Year = year;
    this.Month = month;
    this.Day = day;
}

MyDate.prototype.getDaysFromBase = function () {

}



//var start_date = 'bchg';


function calculateClick(){
    // DOM variables and add HTML DOM EventListener for a button
    var start_date = document.getElementById("frm_start_date").value,
        end_date = document.getElementById("frm_end_date").value;
        
    //#1 verify that values are given, not empty
    console.log('button pressed, function called');
    if (start_date == '') {
        txt_show_msg='No data provided.';
    } else {
        verifyDates(start_date);
        
    }
    document.getElementById("txt_result").innerHTML= txt_show_msg;
}


function verifyDates(date) {
    //#2.1 verify given format YYYY-MM-DD by checking if value has 10characters
        if (date.length != 10){
            txt_show_msg='Date is not in correct format, use YYYY-MM-DD - not 10 digits';
            console.log(' - not 10 digits');
        } else {
            console.log(' - OK 10 digits');
            //#2.2 make object and set parameters 
            date = {
                year: date.substring(0,4),
                month: date.substring(5,7),
                day:date.substring(8,10)}
            console.log(date);

            //#2.3 and check if all parameters are numbers only
            if (! (   !isNaN(date.year)  && !Boolean(console.log('OK year'))
                   && !isNaN(date.month) && !Boolean(console.log('OK month'))
                   && !isNaN(date.day)   && !Boolean(console.log('OK day'))))
            {
                console.log('is not a number');
                txt_show_msg='is not a number.';
            } else {
                console.log('Format is good.');
                txt_show_msg='Format is good.';
                return true;
                //#3 main function
            }
        }
    return false;
}


function getDays ()
/*
Start datum bude mat id "frm_start_date",
End datum ma id "frm_end_date",
Tlacitko pre vypocet ma id "btn_calculate_result"
Vysledny text ma id "txt_result".
*/