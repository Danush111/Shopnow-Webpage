let cart = [];

// Function to update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

// Function to handle "Add to Cart" button
function addToCart(productId) {
    cart.push(productId);
    updateCartCount();
}

// Event listeners for the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.product;
        addToCart(productId);
    });
});

// Function to handle rating submission
function submitRating(productId) {
    const rating = document.querySelector(`#rating-input-${productId}`).value;
    if (rating >= 1 && rating <= 5) {
        const product = document.querySelector(`#product-${productId}`);
        const ratingDisplay = product.querySelector('.rating-display');
        ratingDisplay.textContent = `Rating: ${rating} stars`;
        alert(`You rated Product ${productId} with ${rating} stars`);
    } else {
        alert('Please enter a rating between 1 and 5.');
    }
}

// Function to handle comment submission
function submitComment(productId) {
    const commentInput = document.querySelector(`#comment-input-${productId}`).value;
    if (commentInput.trim() !== "") {
        const product = document.querySelector(`#product-${productId}`);
        const commentsSection = product.querySelector('.comments');
        const newComment = document.createElement('p');
        newComment.textContent = commentInput;
        commentsSection.appendChild(newComment);
        document.querySelector(`#comment-input-${productId}`).value = ''; // Clear input field
        alert('Your comment has been added!');
    } else {
        alert('Please enter a comment.');
    }
}

// Event listeners for the "Submit Rating" and "Submit Comment" buttons
const submitRatingButtons = document.querySelectorAll('.submit-rating');
submitRatingButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.product;
        submitRating(productId);
    });
});

const submitCommentButtons = document.querySelectorAll('.submit-comment');
submitCommentButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.product;
        submitComment(productId);
    });
});
