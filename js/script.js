let images= document.querySelectorAll('img');
let options={
	root : null,
	rootMargin: '0px',
	threshold: 0.1
}

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    })
}

function loadImage(image) {
    image.src = image.getAttribute('data-img');
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
    observer.observe(img);
})
