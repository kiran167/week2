function greeting(name){
    var d = new Date();
    var present_time = d.getHours();
    if(present_time>5 && present_time<10)
             var greet="Good Morning "+name;
    else{
             if(present_time>10 && present_time<16)
                  var greet="Good Afternoon "+name;
             else{
                  if(present_time>15 && present_time<22)
                    var greet="Good Evening "+name;
                  else{
                    var greet="OH!!! Its High Time ,Lets Start "+name;
                      }
                 }
       }
       return greet;
       
}

    function botreply(param){
        var x= document.createElement("div");
        x.className="chat friend ";
        var n = document.createElement("div"); 
        var textnode = document.createTextNode(param); 
        n.appendChild(textnode);
        n.className="chat friend chat-message"
        var oImg = document.createElement("img");
        oImg.setAttribute('src', 'bot.jpg');
        oImg.className="user-photo";
        x.appendChild(oImg);
       x.appendChild(n);
      /* x.appendChild(oImg);*/
       document.getElementById("myList").appendChild(x);
       console.log(myList);
}
function selfchat(name){
    document.getElementById("textarea").value="";
    var x= document.createElement("div");
    x.className="chat self";
    var n = document.createElement("div"); 
    var textnode = document.createTextNode(name);
    n.appendChild(textnode);
    n.className="chat self chat-message"
    var oImg = document.createElement("img");
    oImg.setAttribute('src', 'user.jpg',-1);
    oImg.className="user-photo";
   x.appendChild(n);
   x.appendChild(oImg);
   document.getElementById("myList").appendChild(x);
   console.log(myList);
}
function evaluation(name){
    var t =true;
    try{var result = eval(name);}
    catch(err){
        botreply("Invalid expression");
        t=false;
    }
    if(t==true)
    botreply(result);
}

function croprates(name){
    dict = {
        "tomatoes":"30/kg",
        "potatoes":"40/kg",
        "brinjal":"35/kg",
        "onion":"80/kg",
         "carrot":"40/kg",
         "beetroot":"38/kg",
    };
    if(name in dict){
        botreply(dict[name]);
    }
    else{
        botreply("Match not found ")
    }
}




    // botreply("Enter your choice");
    // botreply("1.Calculation  2.IPL  3.Exit");
    // ch=document.getElementById("textarea").value;
    // if(ch=="1")


/*if( key in dict){
 print(dict[key]);
}*/
function start(){
  name=document.getElementById("textarea").value;
  peru=name;
  selfchat(name);
  if(is_true==true){
      evaluation(name);
      is_true=false;
      botreply("Enter your choice");
      botreply("1.Calculation  2.crop rates  3.Exit");
  }

  else if(is_false==true){
    croprates(name.toLowerCase());
    is_false=false;
    botreply("Enter your choice");
    botreply("1.Calculation  2.crop rates  3.Exit");
}
  else if(name=="1"){
    is_true=true;
    botreply("Enter your Expression");
  }
  else if(name=="2"){
    is_false=true;
    botreply("Enter crop name ");
  }
  else if(name=="3"){
    
    botreply("Bye");
  }
  else{
    var x = greeting(name);
    botreply(x);
    botreply("Enter your choice");
    botreply("1.Calculation  2.crop rates  3.Exit");
  }
  
}

is_true=false;
is_false=false;
  
