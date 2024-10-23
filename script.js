let currentScroll = 0 ;
document.querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('courses').scrollIntoView({behavior:'smooth'});
});
document.addEventListener('scroll',function(){
    const courseCards=document.querySelectorAll('.course-card');
    const scrollposition=window.scrollY + window.innerHeight;
    courseCards.forEach(card=>{
        const cardposition=card.getBoundingClientRect().top + window.scrollY;
        if(scrollposition> cardposition + 50){
            card.classList.add('show');
        }
    })
})
let faqQuestions = document.getElementsByClassName("faq-question");

for (let i = 0; i < faqQuestions.length; i++) {
    faqQuestions[i].addEventListener("click", function() {
        // Toggle the active class for highlighting the clicked question
        this.classList.toggle("active");

        // Toggle between hiding and showing the answer
        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}
 let testimonialIndex = 0;
showTestimonials();

function showTestimonials() {
    let i;
    let testimonials = document.getElementsByClassName("testimonial");
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";  
    }
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {testimonialIndex = 1}    
    testimonials[testimonialIndex-1].style.display = "block";  
    setTimeout(showTestimonials, 4000); // Change testimonial every 4 seconds
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Automatic slideshow (optional)
let autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1}    
    slides[autoSlideIndex-1].style.display = "block";  
    dots[autoSlideIndex-1].className += " active";
    setTimeout(autoShowSlides, 8000); // Change image every 8 seconds
}




function scrollFaculty(direction){
    const slider=document.querySelector('.faculty-container');
    const cardWidth=document.querySelector('.faculty-card').offsetWidth + 20;
    currentScroll = direction*cardWidth;//update current scroll position
    //prevent scrolling past the start or end of the slider
    const maxScroll=slider.scrollWidth-slider.offsetWidth;
    if(currentScroll<0){
        currentScroll=0;
    } else if(currentScroll>maxScroll){
        currentScroll=maxScroll;
    }
    slider.style.transform=`translateX(-${currentScroll}px)`
    }
    function showMore(button) {
        const moreInfo = button.nextElementSibling;
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            moreInfo.classList.add('show');
            button.textContent = 'See Less';
        } else {
            moreInfo.classList.add('hidden');
            moreInfo.classList.remove('show');
            button.textContent = 'See More';
        }
    }
    //optional Auto -scroll functionality
    let autoScrollPosition=0;
    function autoScrollFaculty(){
        scrollFaculty(1);
    }
//registration form validation

    document.querySelector('form').addEventListener('submit', function(event) {
        const mobileInput = document.getElementById('mobile').value;
        if (!/^\d{10}$/.test(mobileInput)) {
            alert('Please enter a valid 10-digit mobile number.');
            event.preventDefault();
        }
    });
/* code.org page javascript */
document.querySelector('.enroll-button').addEventListener('click', function() {
    alert("You are being redirected to the registration page.");
});

// Course animation on page load
window.addEventListener('load', function() {
    const courseImage = document.querySelector('.course-image');
    courseImage.style.opacity = 0;
    setTimeout(() => {
        courseImage.style.transition = 'opacity 1.5s ease-in-out';
        courseImage.style.opacity = 1;
    }, 500);
});

// Smooth scroll for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleCurriculum(courseId, level) {
    const level1 = document.getElementById(`${courseId}-level-1`);
    const level2 = document.getElementById(`${courseId}-level-2`);

    if (level === 1) {
        if (level1.classList.contains('show')) {
            // Hide if already shown
            level1.classList.remove('show');
        } else {
            // Show level 1 and hide level 2
            level1.classList.add('show');
            level2.classList.remove('show');
        }
    } else if (level === 2) {
        if (level2.classList.contains('show')) {
            // Hide if already shown
            level2.classList.remove('show');
        } else {
            // Show level 2 and hide level 1
            level2.classList.add('show');
            level1.classList.remove('show');
        }
    }
}
/* gallery page script*/
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img, .gallery-item video');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    ${item.outerHTML}
                </div>
            `;
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });
});