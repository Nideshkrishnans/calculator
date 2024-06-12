function display(num){
    result.value+=num
}

function clearall(){
    result.value = ''
}


function backspace(){
    result.value=result.value.slice(0,-1)
}


function equal(){
    try{    result.value=eval(result.value)
    }
    catch(error){
        result.value='syntax error'
        setTimeout(()=>{
            result.value=''
        },3000)
    }
}