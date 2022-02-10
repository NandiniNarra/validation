let fnameNode = document.getElementById("fname")
let emailNode = document.getElementById("email")
let passNode = document.getElementById("pass")
let cpassNode = document.getElementById("cpass")
let mobileNode = document.getElementById("mobile")

let  tdNode1 = document.getElementById("error1")
let  tdNode2 = document.getElementById("error2")
let  tdNode3 = document.getElementById("error3")
let  tdNode4 = document.getElementById("error4")
let  tdNode5 = document.getElementById("error5")

let border1 = "2px solid red";
let border2 = "2px solid green";

function validate1(){
    tdNode1.textContent = " "
    let fname = fnameNode.value;
    let regExp= new RegExp("^[A-Za-z]*$");
    if (fname === ''){
        tdNode1.textContent = "This field is required"
        fnameNode.style.border = border1;
        return false;
    }else if(regExp.test(fname)==false){
        tdNode1.textContent = "Name should be only alphabets"
        return false;
    }
    else{
        fnameNode.style.border = border2;
        return true;
    }
}

function validate2() {
    tdNode2.textContent=" "
    let email = emailNode.value;
    let ss=email.substring(email.indexOf('@')+1);
    console.log(ss);
    if (email == '') {
        tdNode2.textContent = "this field is required"
        emailNode.style.border = border1;
        return false;
    }else if(!email.includes("@")|| ss=='') {
       tdNode2.textContent = "Please put valid email";
       return false;
    }
    else {
        emailNode.style.border = border2;
        return true;
} 
}
function validate3() {
    tdNode3.innerHTML = " "
    let pass = passNode.value;
    let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(pass))
    if (pass == '') {
        tdNode3.textContent = "this field is required"

        passNode.style.border = border1;
        return false;
    }else if(regExp.test(pass)==false) {
        let spanNode= document.createElement("span");
        spanNode.textContent ="the password should contain atleast one";
        let ulnode=document.createElement("ul");
        let linode1=document.createElement("li");
        linode1.textContent ="capital letter";
        let linode2=document.createElement("li");
        linode2.textContent ="special character";
        let linode3=document.createElement("li");
        linode3.textContent ="number";
        let linode4=document.createElement("li");
        linode4.textContent ="small letter";
        ulnode.append(linode1,linode2,linode3,linode4);
        tdNode3.append(spanNode,ulnode);
        passNode.style.border=border1;
    }else if(pass.length<5 || pass.length>12){
            tdNode3.textContent="password should atleast 5 chars";
            passNode.style.border=border1;
            return false;
    }
    else {
        passNode.style.border = border2;
        return true;
}
}
function validate4() {
    tdNode4.textContent=" "
    let cpass = cpassNode.value;

    if (cpass == '') {
        tdNode4.textContent = "this field is required"
        cpassNode.style.border = border1;
        return false;
    }else if (passNode.value !== cpassNode.value) {
        tdNode4.textContent = "password not matched"

    }
    else {
        cpassNode.style.border = border2;
        return true;
}
}
function validate5() {
    let mobile = mobileNode.value;
    let regExp=new RegExp("^[0-9]*$");
    tdNode5.textContent="";

    if ( mobile == '') {
        tdNode5.textContent = "this field is  required"
        mobileNode.style.border = border1;
        return false;
    }else if(regExp.test(mobile)==false){
        tdNode5.textContent = "should contain only digits";
        mobileNode.style.border =border1;
        return false;
    }
    else {
        mobileNode.style.border = border2;
        return true;
} 
}
function validateForm(){
    let st1= validate1();
    let st2= validate2();
    let st3= validate3();
    let st4= validate4();
    let st5= validate5();
    return st1 && st2 && st3 && st4 && st5;
}