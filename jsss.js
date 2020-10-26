

var rIndex;



function reset() {
    document.getElementById('name').value ="";
    document.getElementById('age').value ="";
    document.getElementById('city').value ="";
}




function addRow() {

    nxtRow = table.insertRow(table.length),
    Name = nxtRow.insertCell(0),
    Gender = nxtRow.insertCell(1),
    Age = nxtRow.insertCell(2),
    City = nxtRow.insertCell(3);
    Funs = nxtRow.insertCell(4);
    
    var name = document.getElementById("name").value;


    var gender = document.getElementsByName('gender');


    var gender_value;
    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked){
            gender_value = gender[i].value;
        }
    }
    
    var age  = document.getElementById("age").value;
    var city  = document.getElementById("city").value;
    

    Name.innerHTML = name;
    Gender.innerHTML = gender_value;
    Age.innerHTML = age;
    City.innerHTML = city;
    Funs.innerHTML = "<button onclick='deleteRow(this);'>Delete</button> / <button onclick='selectRow();'>Select</button>"




    if (name.length <= 0) {
        alert("Please enter the name.");
        return false;
    }
    if (age.length <= 0) {
        alert("Please enter the age");
        return false;
    }
    if(male.checked==false && female.checked==false )
    {
         alert("You must select gender");
         return false;
    }   
    if (city.value) {
        // value is set to a valid option, so submit form
        return true;
      }
      alert("Please enter the city");
        

};

function deleteRow(name) {
   {
        var p=name.parentNode.parentNode;
        p.parentNode.removeChild(p);
    } {
        alert(e);
    }
}






function selectRow() {
    for(var i=0; i<table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
            document.getElementById("city").value = this.cells[3].innerHTML;
        };
    }
}




function updateRow() {
    
    var name = document.getElementById("name").value;
    var gender = document.getElementsByName('gender');
    var gender_value;
    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked){
            gender_value = gender[i].value;
        }
    }
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;

    table.rows[rIndex].cells[0].innerHTML = name;
    table.rows[rIndex].cells[1].innerHTML = gender_value;
    table.rows[rIndex].cells[2].innerHTML = age;
    table.rows[rIndex].cells[3].innerHTML = city;

}
