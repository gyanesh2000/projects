let header =document.getElementById("header").style;
header.display="flex";
header.flexDirection="column";
// header.position="fixed";
// header.width="100%"

let upperRow=document.getElementsByClassName("upper-row");
upperRow[0].style.backgroundColor="rgb(16 85 217)";
upperRow[0].style.height="60px";

let langList=document.getElementById("lang-list").style;
langList.marginLeft="100px";
langList.marginTop="10px";
langList.padding="6px";
langList.zIndex="10";

upperRow[1].style.backgroundColor="black";
upperRow[1].style.color="white";
upperRow[1].style.display="flex";
upperRow[1].style.justifyContent="Space-between"
// upperRow[1].style.position="fixed";

let middlebox=document.getElementsByClassName("middle-box");
middlebox[0].style.backgroundImage="url('img/logo.png')"
middlebox[0].style.height="80px";
middlebox[0].style.marginLeft="75px"
middlebox[0].style.width="300px"
middlebox[0].style.backgroundRepeat="no-repeat";

let lowerBox=document.getElementById("lower-box").style;
lowerBox.display="flex";
lowerBox.listStyle="none"
lowerBox.gap="50px";
lowerBox.marginRight="50px"

// lowerBox.position="absolute";
lowerBox.right="200px";
lowerBox.marginTop="32px";
// lowerBox.zIndex="40";

let a =document.getElementsByTagName("a");
for(val of a){
    val.style.textDecoration="none";
    val.style.color="white";
    val.style.fontSize="20px";
}

let section=document.getElementsByClassName("section");
section[0].style.backgroundImage="linear-gradient(to top right,rgb(189, 55, 216),rgb(85, 55, 219))";
section[0].style.height="730px";
section[0].style.display="flex";
// section[0].style.flexDirection="row";
// section[0].style.marginTop="200px";



let img=document.getElementById("img").style;
img.backgroundImage="url('img/section1.png')";
img.height="660px";
img.width="360px";
img.borderRadius="10vh"
img.backgroundRepeat="no-repeat";
img.marginLeft="250px"
img.position="relative";
img.top="100px";

let content=document.getElementsByClassName("content")[0].style;
content.position="absolute";
content.right="270px";
content.top="350px";
content.fontSize="50px";
content.color="white";
content.width="500px";

let button=document.getElementsByTagName("button")[0].style;
button.fontSize="18px"
button.margin="20px"
button.padding="20px"
button.borderRadius="30px"
