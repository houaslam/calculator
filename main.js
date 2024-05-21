let input = document.getElementById("display")
let res = 0
let operation = "";
//12
let current = 0

function clearDisplay(){
    operation = ""
    input.value = ""
}

function display(){
    try{
        let res = eval(operation)
        input.value = res;
        // input.value = res.toFixed(3);
        operation = input.value
    }
    catch(error){
        input.value = "Error"
        operation = ""
    }
}

function deleteLast(){
    operation = operation.substring(0, operation.length - 1)
    input.value = input.value.substring(0, input.value.length - 1)
}

function addOp(op){
    if (input.value.length < 12){
        input.value += op
        operation += op;
    }
}

