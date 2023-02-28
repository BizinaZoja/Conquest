'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const bannerControl = document.querySelector('.banner__control'),
          arrows = bannerControl.querySelectorAll('.arrow'),
          backArrow = bannerControl.querySelector('.arrow-back'),
          nextArrow = bannerControl.querySelector('.arrow-next'),
          controlCount = bannerControl.querySelector('.control-count'),
          slides = document.querySelectorAll('.slide'),
          bannerSlider = document.querySelector('.banner-image-slider'),
          sliderWrapper = bannerSlider.querySelector('.slider-wrapper'),
          width = window.getComputedStyle(bannerSlider).width;

    let slideIndex = 1;
    let offset = 0;
    let count = +controlCount.textContent.slice(1);

    arrows.forEach(arrow => {
        
        arrow.addEventListener('click', (e) => {
        e.preventDefault();
       
        if (e.target === nextArrow) {
            if (count == slides.length) {
                count = 1;
                
            } else {
                count++;
                
            }
            controlCount.textContent = `0${count}`;
        }
        if (e.target === backArrow) {
            if (count == 1) {
                count = slides.length;
            } else {
                count--;
            }
            controlCount.textContent = `0${count}`;
        }
    })
    })

    sliderWrapper.style.width = 100 * slides.length + `%`;
    sliderWrapper.style.display = 'flex';
    sliderWrapper.style.transition = '0.5s all';

    bannerSlider.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    })

    function slideForward(elem) {
        elem.addEventListener('click', () => {
            if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }
    
            sliderWrapper.style.transform = `translateX(-${offset}px)`;
    
            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }
        });
        
    }
    function slideBack(elem) {
        elem.addEventListener('click', () => {
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }
    
            sliderWrapper.style.transform = `translateX(-${offset}px)`;
    
            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }
        });    
    }

    slideForward(nextArrow);
    slides.forEach(slide => slideForward(slide));
    
    slideBack(backArrow);
})