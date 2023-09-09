
function displayImage(data){
$('<img>', {
    src: data.url,  // the url of image to be displayed in img tag
    height:'100%',
    width:'100%'
}).appendTo('#image-container');
}

$.ajax({
    url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2023-09-08',
    method:'get',
    success: displayImage
}).fail(function(){
    console.log("Failed to load the image");
});