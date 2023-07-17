function insert(num){
    var number = document.getElementById('view').innerHTML;
    document.getElementById('view').innerHTML = number + num;
}
function clean(){
    document.getElementById('view').innerHTML = "";
}
function calculate(){
    var result = document.getElementById('view').innerHTML;
    if(result){
        document.getElementById('view').innerHTML = eval(result);
    }
    else{
        document.getElementById('view').innerHTML = "nothing...";
    }
}