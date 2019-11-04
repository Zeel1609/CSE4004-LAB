var xhttp = new XMLHttpRequest();

var xmldoc;

console.log(Math.E);

var x;

var kid;

xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

    xmldoc= this.responseXML;

    x=xmldoc.documentElement.childNodes;

    var l=x.length;

    var newDiv= new Array(l);

    var value=["happy","ankan","anamika"];

    for(var i=0;i<3;i++)

    {

      newDiv[i]= document.createElement('p');

      newDiv[i].innerText=value[i];

      document.getElementById('abc').appendChild(newDiv[i]); 

    }

}

};

xhttp.open("GET", "/example_1.xml", true);

xhttp.send();

document.onreadystatechange=function(){

var button = document.getElementById('but');

button.addEventListener("dblclick",func);

button.addEventListener('click',windowcreate);

function func()

{

  var odd=document.querySelectorAll('p:nth-child(odd)');

   var even= document.querySelectorAll('p:nth-child(even)');

   for(let i=0;i<even.length;i++)

   {

    even[i].style.backgroundColor='green';

   }

   for(let i=0;i<odd.length;i++)

   {

    odd[i].style.backgroundColor='orange';

   }

}

}

function windowcreate()

{

d=window.open(',');

d.document.write('<body style="background-color:orange">This is the tab opened</body>');

d.close();

}