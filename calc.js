function buttonclick(val){
   document.getElementById("screen").value+=val;
}

function buttonclear(){
   document.getElementById("screen").value="";
}

var operators,fnum,snum
function operator(opr){
   operators = opr
   fnum = document.getElementById("screen").value;
   fnum = parseFloat(fnum);
   console.log(fnum);
   buttonclear();
}

function equel(){
   var result;
   snum = document.getElementById("screen").value;
   snum = parseFloat(snum);
   console.log(snum);
   buttonclear();

   if(operators=='+'){
      result = fnum+snum;
      console.log(result);
      document.getElementById("screen").value=result;
   }
   if(operators=='-'){
      result = fnum-snum;
      console.log(result);
      document.getElementById("screen").value=result;
   }
   if(operators=='*'){
      result = fnum*snum;
      console.log(result);
      document.getElementById("screen").value=result;
   }
   if(operators=='/'){
      result = fnum/snum;
      console.log(result);
      document.getElementById("screen").value=result;
   }
   if(operators=='%'){
      result = (fnum*snum)/100;
      console.log(result);
      document.getElementById("screen").value=result;
   }
}