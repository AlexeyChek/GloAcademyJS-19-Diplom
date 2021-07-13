class Slider {
  constructor(wrapper, slider, slide, prev, next) {
    this.wrapper = document.querySelector(wrapper);
    this.slider = document.querySelector(slider);
    this.slide = document.querySelectorAll(slide);
    this.prev = prev;
    this.prevBtn = document.querySelector(prev);
    this.next = next;
    this.nextBtn = document.querySelector(next);
    this.sliderWidth = 0;
    this.position = 0;
  }

  updateSlider() {
    this.wrapper.style.overflow = 'hidden';
    this.sliderWidth = this.wrapper.offsetWidth;
    this.slider.style.width = this.sliderWidth * this.slide.length + 'px';
    console.log(this);
    this.moveSlider();
  }

  moveSlider() {
    this.slider.style.transform = `translateX(-${this.position * this.sliderWidth}px)`;
    if (this.position === 0) {
      this.prevBtn.classList.add('unvisible');
    } else {
      this.prevBtn.classList.remove('unvisible');
    }
    if (this.position === this.slide.length - 1) {
      this.nextBtn.classList.add('unvisible');
    } else {
      this.nextBtn.classList.remove('unvisible');
    }

  }

  prevSlide() {
    if (this.position > 0) {
      this.position--;
      this.moveSlider.call(this);
    }
  }
  
  nextSlide() {
    if (this.position < this.slide.length - 1) {
      this.position++;
      this.moveSlider.call(this);
    }
  }

  init() {
    this.updateSlider();
    this.wrapper.addEventListener('click', event => {
      const target = event.target;
      if (target.closest(this.prev)) this.prevSlide.call(this);
      if (target.closest(this.next)) this.nextSlide.call(this);
    });
  }
}

export default Slider;
