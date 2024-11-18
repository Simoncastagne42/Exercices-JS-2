const images = document.querySelectorAll("#image1, #image2, #image3, #image4, #image5");
images.forEach(image => {
    image.addEventListener("mouseover", handleMouseOverOnImg);
    image.addEventListener("mouseout", handleMouseOutOnImg);
});



function handleMouseOverOnImg (event) {

event.target.src = event.target.src.replace(".jpg","_2.jpg")
 


}
function handleMouseOutOnImg(event) {
event.target.src = event.target.src.replace("_2.jpg", ".jpg")


}

