var myImage= document.querySelector('Img');

myImage.onclick= function(){
	let mySrc= myImage.getAttribute('src');
	if(mySrc==='images/test_image.jpg'){
		myImage.setAttribute('src','images/test_image3.jpg');
	}else{
		myImage.setAttribute('src','images/test_image.jpg');
	}
}

var myButton= document.querySelector('button');
var myHeading= document.querySelector('h1');

function setUserName(){
	let myName= prompt('Please enter your name.');
	if(!myName || myName===null){
		setUserName();
	}else{
		localStorage.setItem('name', myName);
		myHeading.innerHTML= '歡迎：'+ myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName= localStorage.getItem('name');
	myHeading.innerHTML= '歡迎：'+ storedName;
}

myButton.onclick= function(){
	setUserName();
}