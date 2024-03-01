//your JS code here. If required.
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let circles=document.querySelectorAll('.circle');
let bars=document.querySelectorAll('.bar');
let currentIndex=0;
function updateProgress(){
	circles.forEach((circle,index)=>{
		if(index<=currentIndex){
			circle.classList.add('active');
		}
		else{	
			circle.classList.remove('active');
		}
	});
	bars.forEach((bar,index)=>{
		if(index<currentIndex){
			bar.classList.add('active');
		}
		else{	
			bar.classList.remove('active');
		}
	});
}

next.addEventListener('click',()=>{
	
	if(currentIndex< circles.length-1){
		currentIndex++;
		updateProgress();
	}
})
prev.addEventListener('click',()=>{;
	if(currentIndex > 0){
		currentIndex--;
		updateProgress();
	}
	
})
