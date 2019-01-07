
// Mouse event


  function myFunction(e) {

    posX = event.clientX - window.innerWidth/2;
    posY = event.clientY - window.innerWidth/6;

    img1.style.transform = "perspective(500px) skewY("+posX*0.01+"deg) skewX("+posY*(-0.01)+"deg)" ;
    img2.style.transform = "perspective(500px) skewY("+posX*0.01+"deg) skewX("+posY*(-0.01)+"deg)" ;
    img3.style.transform = "perspective(500px) skewY("+posX*0.01+"deg) skewX("+posY*(-0.01)+"deg)" ;

  };

// //get comments
var reviewurl  = "http://localhost:3000/reviews";
var xhr  = new XMLHttpRequest();
xhr.open('GET', reviewurl, true);
xhr.onload = function () {
 var datas = JSON.parse(xhr.responseText);

 if (xhr.readyState == 4 && xhr.status == "200") {

  var info = new Array();
       info = datas;

       var news = document.getElementsByClassName("comments")[0];

       for(var i = 0; i < info.length; i++) {

           var h5 = document.createElement("input");
           h5.setAttribute('value', info[i].id);
           h5.setAttribute('id', "id1");
           var id = info[i].id;
           news.appendChild(h5);

           var p = document.createElement("input");
           p.setAttribute('value', info[i].username);
           p.setAttribute('id', "username1");
           news.appendChild(p);

           var p = document.createElement("input");
           p.setAttribute('value', info[i].rating);
           p.setAttribute('id', "rating1");
           news.appendChild(p);

           var p = document.createElement("input");
           p.setAttribute('value', info[i].produs);
           p.setAttribute('id', "produs1");
           news.appendChild(p);

           var p = document.createElement("input");
           p.setAttribute('value', info[i].comment);
           p.setAttribute('id', "comment1");
           news.appendChild(p);


           var br = document.createElement("br");
           news.appendChild(br);

           var l = document.createElement("div");
           l.setAttribute('class', 'line');

           var button = document.createElement('input');

           button.setAttribute('type', 'button');
           button.setAttribute('value', 'Sterge');

           button.setAttribute('onclick', 'deleteReview("id")');
           button.setAttribute('onclick', 'deleteReview("id")');

          news.appendChild(button);

          var button = document.createElement('input');

          button.setAttribute('type', 'button');
           button.setAttribute('value', 'Update');

            button.setAttribute('onclick', 'updateReview("id")');
            button.setAttribute('onclick', 'updateReview("id")');

           news.appendChild(button);
           news.appendChild(l);


       }

 } else {
   console.error(datas);
 }
}
xhr.send(null);

// Post a comment
function addReview() {
  var data = {};
  var reviewUrl = "http://localhost:3000/reviews";

  data.username  = document.getElementById("username").value;
  data.rating  = document.getElementById("rating").value;
  data.produs  = document.getElementById("produs").value;
  data.comment  = document.getElementById("comment").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", reviewUrl, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
  	var comments = xhr.responseText;
  	if (xhr.readyState == 4 && xhr.status == "201") {
  		console.table(comments);
  	} else {
  		console.error(comments);
  	}
  }
  xhr.send(json);
}



// Delete a comment
function deleteReview(who){

  var xhr = new XMLHttpRequest();
    var reviewUrl = "http://localhost:3000/reviews";
  var who = document.getElementById('id').value;
  console.log(who);
  xhr.open("DELETE", reviewUrl+"/"+who, true);
  xhr.onload = function () {
  	var users = JSON.parse(xhr.responseText);
  	if (xhr.readyState == 4 && xhr.status == "200") {
  		console.table(users);
  	} else {
  		console.error(users);
  	}
  }
  xhr.send(null);
}

// Update a comment
function updateReview(){
  var data = {};
    var reviewUrl = "http://localhost:3000/reviews";
  data.username  = document.getElementById("username1").value;
  data.rating  = document.getElementById("rating1").value;
  data.produs  = document.getElementById("produs1").value;
  data.comment  = document.getElementById("comment1").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  var who = document.getElementById('id1').value;

  xhr.open("PUT", reviewUrl+'/'+who, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
  	var users = JSON.parse(xhr.responseText);
  	if (xhr.readyState == 4 && xhr.status == "200") {
  		console.table(users);
  	} else {
  		console.error(users);
  	}
  }
  xhr.send(json);
}
