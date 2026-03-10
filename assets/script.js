const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const ArrowLeft=document.querySelector("#arrow_left");
const ArrowRight=document.querySelector("#arrow_right");
const nbImg = document.querySelectorAll(".banner-img").length;
const img = document.querySelectorAll(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

let i=0;

ArrowRight.addEventListener('click',()=>{
	if (i < nbImg -1)
		i++;
	else
		i=0;
	console.log(i);
     updateBanner(i) 
    });

ArrowLeft.addEventListener('click',()=>{
	if (i > 0)
		i--;
	else
		i = nbImg -1;
	console.log(i);
	 updateBanner(i) 
    });

  function updateBanner(i) {
   img.forEach((img, index) => {
        img.style.transform = 'translateX(' + ((index - i) * 100) + '%)';
    });

	bannerText.innerHTML = slides[i].tagLine;


  
	dots.forEach((dot,index) => {
        if (index === i) {
            dot.style.backgroundColor = 'white';      // dot actif → visible
        } else {
            dot.style.backgroundColor = 'transparent';    // autres dots → transparents
        }
    });
}
  


