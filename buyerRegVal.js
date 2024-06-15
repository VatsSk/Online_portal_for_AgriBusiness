  //Validation
  var password=document.getElementById('password');
  var flag=1;
  
  function check(ele){
    if(ele.value.length > 0){
      if(ele.value != password.value ){
        document.getElementById('chError').innerText="Password doesn't match";
        flag=0;
      }
      else{
        document.getElementById('chError').innerText="";
        flag=1;
      }
    }else{
        document.getElementById('chError').innerText="Enter confirm password";
        flag=0;
    }
  }

function validate(){
    if(flag=1)
            return true;
        
    else
            return false;

}
