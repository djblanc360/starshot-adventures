class ProductQuiz extends HTMLElement {
    currentSlide: number;
    slides: NodeListOf<Element>;
    constructor() {
        super();
        this.currentSlide = 0;
        this.slides = this.querySelectorAll(".quiz-slide");
    }

    connectedCallback() {
        this.showSlide(this.currentSlide);
        this.addNextButtonListeners();
    }

    showSlide(index: number) {
        console.log('showSlide', index);
        this.slides.forEach((slide, i) => {
            slide.classList.toggle("hidden", i !== index);
        });
    }

    goToNextSlide() {
        if (this.currentSlide < this.slides.length - 1) {
            this.currentSlide++;
            this.showSlide(this.currentSlide);
        }
    }

    addNextButtonListeners() {
        this.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            if (target.hasAttribute("next")) {
                this.goToNextSlide();
            }
        });
    }

    goToPreviousSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.showSlide(this.currentSlide);
        }
    }
}

customElements.define("product-quiz", ProductQuiz);
