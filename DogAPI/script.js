//using vanilla js

/* function fetchRandomDogImage(){
    var xhrRequest= new XMLHttpRequest();
    xhrRequest.onload =function(){
    var responseJSON = JSON.parse(xhrRequest.response);
    var imageLink=responseJSON.message;
    document.getElementById('dog-image').setAttribute("src",imageLink)
};
    xhrRequest.open('GET','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send()
}

var button = document.getElementById("fetch-dog-image-button");
var buttonClick = button.addEventListener("click", function(){
    fetchRandomDogImage();
});  */

//using jquery--------------------------------------------

/*  function fetchRandomDogImage(){
    var xhrRequest=new XMLHttpRequest();
    xhrRequest.onload =function(){

        //JSON.stringify() for converting json file to sting file

         var responseJSON = JSON.parse(xhrRequest.response);
         var imageLink=responseJSON.message;
         $('#dog-image').attr('src',imageLink);
    }
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();
}

 $("#fetch-dog-image-button").click(fetchRandomDogImage);  */

 //using AJAX-------------------------------------
 /*
 function fetchRandomDogImage(){
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random' ,
        method:'GET',
        success:function(data){
             var imageLink=data.message;
             $('#dog-image').attr('src',imageLink);
        }
    })
 }
 $("#fetch-dog-image-button").click(fetchRandomDogImage); */

 //OR AJAX second type of call
 function fetchRandomDogImage(){
    $.get('https://dog.ceo/api/breeds/image/random',function(data){
        var imageLink=data.message;
        $('#dog-image').attr('src',imageLink);
   })
 }
 $("#fetch-dog-image-button").click(fetchRandomDogImage);


