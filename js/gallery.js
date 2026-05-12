// Gallery functionality
class Gallery {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.modal = null;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (this.galleryItems.length > 0) {
            this.createModal();
            this.setupEventListeners();
        }
    }

    createModal() {
        const modalHTML = `
            <div class="modal gallery-modal" id="gallery-modal">
                <div class="modal-content">
                    <button class="modal-close" aria-label="Close gallery">&times;</button>
                    <button class="gallery-nav gallery-prev" aria-label="Previous image">&#10094;</button>
                    <button class="gallery-nav gallery-next" aria-label="Next image">&#10095;</button>
                    <img src="" alt="" class="gallery-image">
                    <div class="gallery-caption"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('gallery-modal');
        this.modalImage = this.modal.querySelector('.gallery-image');
        this.modalCaption = this.modal.querySelector('.gallery-caption');
    }

    setupEventListeners() {
        // Gallery item clicks
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => this.openModal(index));
        });

        // Modal controls
        if (this.modal) {
            this.modal.querySelector('.modal-close').addEventListener('click', () => this.closeModal());
            this.modal.querySelector('.gallery-prev').addEventListener('click', () => this.showPrev());
            this.modal.querySelector('.gallery-next').addEventListener('click', () => this.showNext());

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (!this.modal.classList.contains('active')) return;

                switch (e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        this.showPrev();
                        break;
                    case 'ArrowRight':
                        this.showNext();
                        break;
                }
            });

            // Click outside to close
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }
    }

    openModal(index) {
        this.currentIndex = index;
        this.updateModal();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    showPrev() {
        this.currentIndex = (this.currentIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
        this.updateModal();
    }

    showNext() {
        this.currentIndex = (this.currentIndex + 1) % this.galleryItems.length;
        this.updateModal();
    }

    updateModal() {
        const item = this.galleryItems[this.currentIndex];
        const img = item.querySelector('img');

        if (img) {
            this.modalImage.src = img.src;
            this.modalImage.alt = img.alt;
            this.modalCaption.textContent = img.alt || '';
        }
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});