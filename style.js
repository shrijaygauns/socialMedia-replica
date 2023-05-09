// Add functionality to the like button
const likeButtons = document.querySelectorAll('.actions button:first-of-type');
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
    const buttonText = button.textContent;
    if (buttonText === 'Like') {
      button.textContent = 'Liked';
    } else {
      button.textContent = 'Like';
    }
  });
});

// Add functionality to the comment button
const commentButtons = document.querySelectorAll('.actions button:nth-of-type(2)');
commentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const article = button.closest('article');
    const comments = article.querySelector('.comments');
    comments.classList.toggle('show');
  });
});
