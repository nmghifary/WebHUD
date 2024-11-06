const container = document.querySelector('.container')
const highlight = document.querySelector('.highlight')
const thumbs = document.querySelectorAll('.thumb')

// console.log(highlight);
container.addEventListener('click', function (e) {
    if (e.target.className === 'thumb') {
        highlight.style.display = 'inline';
        highlight.src = e.target.src;
        highlight.classList.add('fade')
        setTimeout(function () {
            highlight.classList.remove('fade')
        }, 500);


        thumbs.forEach(function (thumb) {
            thumb.style.display = 'inline';
        })
        e.target.style.display = 'none';
    };
});