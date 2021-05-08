'use strict';

const textInResult=(e)=>{
    let result=document.getElementById('result');
    result.value+=e;
}

const clearResult=()=>{
    let result=document.getElementById('result');
    result.value="";
}