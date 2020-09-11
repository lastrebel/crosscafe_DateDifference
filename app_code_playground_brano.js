// 
// Calculator of Dates
// by Jozef Scensny and Brano Valasek
//
console.log('JS script loaded.');
var txt_show_msg,
    daysOfStartDate = Number,
    daysOfEndDate = Number;


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

//-------------------------------//
//----------- functions ---------//
//-------------------------------//
function verifyDates(date) {
    originalDate = date;
    NonObjectMonth = parseInt(date.substring(5,7));
    /*if (NonObjectMonth > 12) {
        
    }*/
    //#2.1 verify given format YYYY-MM-DD by checking if value has 10characters
        if ((date.length != 10) || (NonObjectMonth > 12)) {
            txt_show_msg='Date is not in correct format, use YYYY-MM-DD - not 10 digits';
            alert('error ' + NonObjectMonth);
            alert(txt_show_msg);
            console.log(date + ' - not 10 digits ' + typeof(NonObjectMOnth) + ' ' + NonObjectMOnth);
        } else {
            //#2.2 make object and set parameters
            date = new MyDate (
                date.substring(0,4),
                date.substring(5,7),
                date.substring(8,10)
            );
            //console.log(MyDate + ' - OK 10 digits');

            //#2.3 and check if all parameters are numbers only
            if (! (!isNaN(date.Year)  && !Boolean(console.log('OK year'))
                   && !isNaN(date.Month) && !Boolean(console.log('OK month'))
                   && !isNaN(date.Day)   && !Boolean(console.log('OK day')))){
                console.log(date.Year + 'is not a number');
                //txt_show_msg='is not a number.';
            } else {
                console.log(originalDate + 'Format is good.');
                txt_show_msg='Format is good.';
                return true;
                //#3 main function
            }
        }
    return false;
}


function getMonthsInDays(finalMonth){
        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        sum = 0;
        var monthsSums = new Array(12);

        for (let i = 0; i < finalMonth; i++) {
            sum += months[i];
            monthsSums[i]=sum;
            console.log(monthsSums[i]);
        }
    Result_monthsSums = parseInt(monthsSums[finalMonth-1]);
    }


var Result_monthsSums;
function calculateDates(date){
    //1.0 pracuj so Start Date najskor, zisti kolko dni ubehlo od zaciatku roku
    //1.1 zisti pocet mesiacov zo start date
    date = new MyDate (
                date.substring(0,4),
                date.substring(5,7),
                date.substring(8,10)
            ),
    getMonthsInDays(date.Month);
    
        
    //1.2 pripocitaj k vysledku pocet dni
    DateInDaysFromZero = 365*parseInt(date.Year) + Result_monthsSums + parseInt(date.Day);
    
    console.log(date.Year + date.Month + date.Day + 'vysledok mesiacov v dnoch je' + Result_monthsSums);
    console.log(typeof(parseInt(date.Day)));
    console.log(typeof(Result_monthsSums));
    console.log(DateInDaysFromZero);
    return DateInDaysFromZero;
    //2.0 pracuj so Start date
}




function calculateClick(){
    // DOM variables and add HTML DOM EventListener for a button
    var start_date = document.getElementById("frm_start_date").value,
        end_date = document.getElementById("frm_end_date").value;
        
    //#1 verify that values are given, not empty
    console.log('button pressed, function called');
    if (start_date == '' || end_date == '' ) {
        txt_show_msg='Provide correct data.';
        alert(txt_show_msg);
        return;
    } 
    if (verifyDates(start_date) && verifyDates(end_date)) {
        //alert(txt_show_msg);
        console.log('dojde to sem');
        
        daysOfStartDate = parseInt(calculateDates(start_date));
        daysOfEndDate = parseInt(calculateDates(end_date));
        
        dateDifference = daysOfEndDate - daysOfStartDate;
    document.getElementById("txt_result").innerHTML=dateDifference;

        console.log('vysledok rozdiel dni mam a je ' + dateDifference);
        console.log('NonObjectMonth je ' + NonObjectMonth);
        return;
    };
    
    
}

/*
Start datum bude mat id "frm_start_date",
End datum ma id "frm_end_date",
Tlacitko pre vypocet ma id "btn_calculate_result"
Vysledny text ma id "txt_result".
*/