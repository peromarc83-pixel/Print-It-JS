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
const img = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

let i=0;

ArrowRight.addEventListener('click', () => {
    i = (i < slides.length - 1) ? i + 1 : 0;
    updateCarrousel(i);
	console.log(i);
});

ArrowLeft.addEventListener('click',()=>{
      i = (i > 0) ? i - 1 : slides.length - 1;
    updateCarrousel(i);
	console.log(i);	
    });

 function updateCarrousel(i) {
    img.src = './assets/images/slideshow/' + slides[i].image;
    bannerText.innerHTML = slides[i].tagLine;

    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === i ? 'white' : 'transparent';
    });
}

  updateCarrousel(0);


