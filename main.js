var Name_of_The_Guest_Array = []
function Submit() {
    var Guest_name = document.getElementById("Enter_name").value;
    Name_of_The_Guest_Array.push(Guest_name);
    document.getElementById("Display_names").innerHTML = Name_of_The_Guest_Array;
    console.log(Name_of_The_Guest_Array);
    var length_of_The_array = Name_of_The_Guest_Array.length;
    console.log(length_of_The_array);
}
function Show_list() {
Name_of_The_Guest_Array.sort();
    var i = Name_of_The_Guest_Array.join("<br>");
    console.log(Name_of_The_Guest_Array);
    document.getElementById ("Show_names").innerHTML = i.toString();
}
function Search(){
    var s = document.getElementById("Search_name").value;
    var found = 0;
    var j;
    for(j=0; j<Name_of_The_Guest_Array.length; j++)
    { if(s==Name_of_The_Guest_Array[j]){}
        found = found+1;
    }

document.getElementById("Search_name").innerHTML = "Name Found "+found+" Time/s";
console.log("Found name "+found+" Time/s");}