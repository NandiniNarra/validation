let emailNode = document.getElementById("email")
let passNode = document.getElementById("pass")

let  tdNode2 = document.getElementById("error2")
let  tdNode3 = document.getElementById("error3")
let  tdNode4 = document.getElementById("error4")

let border1 = "2px solid red";
let border2 = "2px solid green";

function validate2() {
    tdNode2.textContent=" "
    let email = emailNode.value;
    let ss=email.substring(email.indexOf('@')+1);
    console.log(ss);
    if (email == ''){
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
    }else if(pass.length<8 || pass.length>24){
            tdNode3.textContent="password should between  8 to 24 chars";
            passNode.style.border=border1;
            return false;
    }
    else {
        passNode.style.border = border2;
        return true;
}
}

function validate4(){
    tdNode3.textContent="";

    let result=objList.some(details=>details.email===email.value && details.password===pass.value)
    if(result){
        return true
    }
    else{
        tdNode4.textContent="Email or Password is incorrect"
        return false;
    }
}


let objList=[
    {
        email:"nandininarra1998@gmail.com",
        password:"N@ndini67"
    },
    {
        email:"deepak2@gmail.com",
        password:"deepak@12"
    },
    {
        email:"dn2@gmail.com",
        password:"dna@1234567"
    }
]



function validateForm(){
    let st2= validate2();
    let st3= validate3();
    if (st2 && st3){
       st4= validate4()
    }
    return st2 && st3 && st4;
}

const checkRemember = document.getElementById("remember");
  	if(localStorage.checkbox !== ""){
  		checkRemember.setAttribute("checked", "checked");
  		emailNode.value = localStorage.username;
  		passNode.value = localStorage.password;
  	}
  	else{
  		checkRemember.removeAttribute("checked");
  		emailNode.value = "";
  		passNode.value = "";
 	}

  checkRemember.addEventListener("click", function(){
  	if(checkRemember.checked && emailNode.value && passNode.value !== ""){
  		localStorage.username = emailNode.value;
  		localStorage.password = passNode.value;
  		localStorage.checkbox = checkRemember.value;
  	}

  	else{
  		localStorage.username = "";
  		localStorage.password = "";
 		localStorage.checkbox = "";
 	}

   });