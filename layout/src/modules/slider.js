class Slider {
  constructor({
    wraper,
    slider,
    slide,
    prev,
    next,
    slideNum,
    slideCount,
    isDisabled,
    slideShow,
    breakPoints
  }) {
    this.wraper = document.querySelector(wraper);
    this.slider = this.wraper.querySelector(slider);
    this.slide = this.slider.querySelectorAll(slide);
    this.prev = prev;
    this.prevBtn = document.querySelector(prev);
    this.next = next;
    this.nextBtn = document.querySelector(next);
    this.sliderWidth = 0;
    this.sliderHeight = 0;
    this.position = 0;
    this.slideNum = this.wraper.parentNode.querySelector(slideNum);
    this.slideCount = this.wraper.parentNode.querySelector(slideCount);
    this.isDisabled = !!isDisabled;
    this.slideShow = slideShow || 1;
    this.breakPoints = breakPoints;
    if (breakPoints) {
      this.breakPointsKeys = Object.keys(breakPoints);
      this.breakPointsKeys.forEach((key, i) => this.breakPointsKeys[i] = +key);
      this.breakPointsKeys.sort((a, b) => a - b);
    }
    this.listener = event => {
      const target = event.target;
      if (target.closest(this.prev)) this.prevSlide.call(this);
      if (target.closest(this.next)) this.nextSlide.call(this);
    };
  }

  getPosition() {
    return this.position;
  }

  hideSlider() {
    this.slider.style.display = 'none';
  }

  showSlider() {
    this.slider.style.display = 'flex';
  }

  updateSlider() {
    this.wraper.style.overflow = 'hidden';
    this.slider.style.justifyContent = 'space-around';

    this.sliderWidth = this.wraper.offsetWidth;
    this.slider.style.width = this.sliderWidth / this.slideShow * this.slide.length + 'px';
    this.slider.style.maxWidth = this.sliderWidth / this.slideShow * this.slide.length + 'px';

    this.slide.forEach(slide => slide.style.width = this.sliderWidth / this.slideShow + 'px');

    this.position = 0;

    this.moveSlider();
  }

  moveSlider() {
    if (!this.isDisabled) {
      this.slider.style.transform = `translateX(-${this.position * this.sliderWidth / this.slideShow}px)`;
      if (this.position === 0) {
        this.prevBtn.classList.add('unvisible');
      } else {
        this.prevBtn.classList.remove('unvisible');
      }
      if (this.position === this.slide.length - this.slideShow) {
        this.nextBtn.classList.add('unvisible');
      } else {
        this.nextBtn.classList.remove('unvisible');
      }
      if (this.slideNum) this.slideNum.textContent = this.position + 1;
      if (this.slideCount) this.slideCount.textContent = this.slide.length;
    }
  }

  enableSlider() {
    this.isDisabled = false;
    this.updateSlider();
    this.moveSlider();
    this.addListeners();
  }

  disableSlider() {
    this.isDisabled = true;
    this.removeListeners();
  }

  prevSlide() {
    if (this.position > 0) {
      this.position--;
      this.moveSlider.call(this);
    }
  }

  nextSlide() {
    if (this.position < this.slide.length - this.slideShow) {
      this.position++;
      this.moveSlider.call(this);
    }
  }

  addListeners() {
    if (!this.isDisabled) {
      this.wraper.parentNode.addEventListener('click', this.listener);
    }
  }

  removeListeners() {
    this.wraper.parentNode.removeEventListener('click', this.listener);
  }

  init() {
    this.updateSlider();
    this.addListeners();
    this.resizeListener();
  }

  resizeListener() {
    window.addEventListener('resize', () => {
      if (this.breakPointsKeys) {
        this.breakPointsKeys.forEach(key => {
          if (document.documentElement.clientWidth > key) {
            for (const option in this.breakPoints[key]) {
              this[option] = this.breakPoints[key][option];
              break;
            }
          }
        });
      }
      this.updateSlider();
    });
  }
}



export default Slider;
