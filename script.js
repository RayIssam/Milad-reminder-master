
let wakingUpStatu=['late','not-late','late','late','late','not-late',
                    'not-late','not-late','not-late','not-late','late','late','late','late',
                    'not-late','not-late','not-late','late','late','not-late']

let dayStatus=['offday', 'workday','“workday', 'workday', 'workday','offday','offday', 
                 'offday','workday','workday', 'workday', 'workday', 'workday',
                'offday', 'offday', 'workday', 'workday', 'workday', 'workday','offday']



let lateMessages=['I will be late today, Sorry &#128378 ',
                    'I have to take my kids to school, I will be late &#128106 ',
                    'I have a doctor appointment this morning, I will be late &#128567',
                    'My car broke down, I will be late! &#128663']

let emergencyStatus = ['critical1' ,'non-critcal','non-critcal','critical3','non-critcal',
                        'non-critcal', 'critical4','critical3','critical2', 'non-critcal',
                         'non-critcal','non-critcal','non-critcal','non-critcal','critical1', 
                         'critical1','non-critcal','non-critcal', 'critical2','critical4']          

 const critical1 = { mohamed : 100, }               
 const critical2 = { action : 200,}
 const critical3 = {action : 180,}
 const critical4 = {action : 500 }
 let miladSalary =1000;


                    //click event listener 
   document.getElementById("button").addEventListener("click", miladProgram);
   document.getElementById("get-report").addEventListener("click",salarDeduction)
   document.getElementById("reset").addEventListener("click",reset)

    function reset(){
        document.getElementById("work-days").innerHTML="";
        document.getElementById("table").innerHTML="";
    }

   function salarDeduction() {
    document.querySelector("table").innerHTML="";


    let table = document.getElementById("table");

    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2=row.insertCell();
    let cell3=row.insertCell();
    let cell4=row.insertCell();

    cell1.innerHTML="Day"
    cell2.innerHTML="Money Lost"
    cell3.innerHTML="Salary Before";
    cell4.innerHTML="Salary After";

    for(let k=0 ; k<emergencyStatus.length ; k++) {


         if(emergencyStatus[k]==="critical1" && wakingUpStatu[k]==="late" && dayStatus[k]==="workday" ){
            let row = table.insertRow();
            let cell = row.insertCell();
            let cell1=row.insertCell();
            let cell2=row.insertCell();
            let cell3=row.insertCell()
            cell.innerHTML = `Day ${k+1}`;
            cell1.innerHTML=critical1.mohamed;
            cell2.innerHTML=miladSalary;
            const newSalary=miladSalary -=critical1.mohamed;
            cell3.innerHTML=newSalary;

        }
       
        else if (emergencyStatus[k]==="critical2" && wakingUpStatu[k]==="late" && dayStatus[k]==="workday"){
            let row = table.insertRow();
            let cell = row.insertCell();
            let cell1=row.insertCell()
            let cell2=row.insertCell()
            let cell3=row.insertCell()
            cell.innerHTML = `Day ${k+1}`;
            cell1.innerHTML=critical2.action;
            cell2.innerHTML=miladSalary;
            const newSalary=miladSalary -=critical2.action;
            cell3.innerHTML=newSalary;

        }
       
        else if (emergencyStatus[k]==="critical3" && wakingUpStatu[k]==="late" && dayStatus[k]==="workday"){
            let row = table.insertRow();
            let cell = row.insertCell();
            let cell1=row.insertCell();
            let cell2=row.insertCell();
            let cell3=row.insertCell();
            cell.innerHTML = `Day ${k+1}`;
            cell1.innerHTML=critical3.action;
            cell2.innerHTML=miladSalary;   
            const newSalary=miladSalary -=critical3.action;
            cell3.innerHTML=newSalary;

        }

        else if (emergencyStatus[k]==="critical4" && wakingUpStatu[k]==="late" && dayStatus[k]==="workday"){
            let row = table.insertRow();
            let cell = row.insertCell();
            let cell1=row.insertCell();
            let cell2=row.insertCell();
            let cell3=row.insertCell();

            cell.innerHTML = `Day ${k+1}`;
            cell1.innerHTML=critical4.action; 
            cell2.innerHTML=miladSalary;
            const newSalary=miladSalary -=critical4.action;
            cell3.innerHTML=newSalary;

        }
    }


  }

    

// a function to give random messages 
function randomMessage(arr) {
    let randomMessages = Math.floor(Math.random() * arr.length);
    let message = arr[randomMessages];

    return message;
}
  
/* a function that checks if its a work day or not 
if its a work day and late : it append a random late message to the li element and assign a class=message-sent workday
if its work day but not late OR if it's an offday : the li element remains empty and assign a class=message-not-sent offday

*/
function miladProgram (){
    document.querySelector("#work-days").innerHTML="";
    for(let k=1;k<dayStatus.length+1;k++){
        let listItem = document.createElement("li");
        document.getElementById("work-days").append(listItem);
        if(wakingUpStatu[k]=="late" && dayStatus[k]=='workday'){
            listItem.innerHTML="Day " + k + " : "+ randomMessage(lateMessages) + "<br>"
            listItem.className='message-sent workday'
        }
        else{
            listItem.innerHTML="Day " + k + " : "+" ";
            listItem.className='message-not-sent offday';
        }
    }
}
