// responsive sidebar script
let openSideBar = () => {
    let body = document.querySelector('body');
    body.classList.toggle('no-scroll');

    let sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'flex';

    }
    else if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
    }
    else {
        sidebar.style.display = 'none';
    }

}


// transition script
const img1 = document.querySelector('#f2-img1');
const img2 = document.querySelector('#f2-img2');
const content1 = document.querySelector('#f2-content1');
const content2 = document.querySelector('#f2-content2');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, options);

observer.observe(img1);
observer.observe(img2);
observer.observe(content1);
observer.observe(content2);
