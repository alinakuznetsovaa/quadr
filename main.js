function quad(a,b,c){
    if(a==0) return " Invalid value of a ( a!=0) ";
    
    var D=b*b-4*a*c;
    var x1,x2;
    if(D>0){
        x1=(-b+Math.sqrt(D))/(2*a);
        x2=(-b-Math.sqrt(D))/(2*a);
        return "X1 = " + x1+", X2 = " + x2;
    } else if(D==0){
        x=-b/(2*a);
        return "X = " + x+", X = " + x;
    }
    else  if (D<0)return " D < 0 "
}

function program(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result = quad(a,b,c);
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var row=document.createElement("tr");

    td1.textContent = a;
    td2.textContent = b;
    td3.textContent = c;
    td4.textContent = result;
    row.append(td1,td2,td3,td4);
    document.getElementById('table').appendChild(row);

    
   
    

    row.onclick = function(){
        this.remove();
    }
   

  


   
}

