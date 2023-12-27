let feedbackPosition = 0;
const feedbackSlidesToShow = 3;
const feedbackSlidesToScroll = 1;
const feedbackContainer = document.querySelector('.feedback-slider-container');
const feedbackList = document.querySelector('.feedback-list');
const feedbackBtnPrev = document.querySelector('.feedback-btn-prev');
const feedbackBtnNext = document.querySelector('.feedback-btn-next');
const feedbackItems = document.querySelectorAll('.feedback-item');
const feedbackItemsCount = feedbackItems.length;
const feedbackItemWidth = feedbackContainer.clientWidth / feedbackSlidesToShow;
const moveFeedbackPosition = feedbackSlidesToScroll * itemWidth;


items.forEach((item) => {
    item.computedStyleMap.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = feedbackItemsCount - (Math.abs(position) + feedbackSlidesToShow * itemWidth) / itemWidth;

    feedbackPosition -= itemsLeft >= feedbackSlidesToScroll ? moveFeedbackPosition : itemsLeft * itemWidth;

    setFeedbackPosition(2);
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    feedbackPosition += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

