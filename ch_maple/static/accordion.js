document.addEventListener('DOMContentLoaded', function() {
    const title1=document.querySelector(".title1");
    const title2=document.querySelector(".title2");
    const title3=document.querySelector(".title3");

    const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector('#arrow2');
const arrow3 = document.querySelector('#arrow3');
const desc1 = document.querySelector('.title1 + .desc');
const desc2 = document.querySelector('.title2 + .desc');
const desc3 = document.querySelector('.title3 + .desc');
    title1.addEventListener('click', function() {
    if (desc1.style.display === 'none') {
        desc1.style.display = 'block';
        arrow1.classList.remove('fa-angles-up');
        arrow1.classList.add('fa-angles-down');
    } else {
        desc1.style.display = 'none';
        arrow1.classList.remove('fa-angles-down');
        arrow1.classList.add('fa-angles-up');
    }
});
    title2.addEventListener('click', function() {
        if (desc2.style.display === 'none') {
        desc2.style.display = 'block';
        arrow2.classList.remove('fa-angles-up');
        arrow2.classList.add('fa-angles-down');
        } 
        else {
        desc2.style.display = 'none';
        arrow2.classList.remove('fa-angles-down');
        arrow2.classList.add('fa-angles-up');
        }
    });
    title3.addEventListener('click', function() {
        if (desc3.style.display === 'none') {
        desc3.style.display = 'block';
        arrow3.classList.remove('fa-angles-up');
        arrow3.classList.add('fa-angles-down');
        } 
        else {
        desc3.style.display = 'none';
        arrow3.classList.remove('fa-angles-down');
        arrow3.classList.add('fa-angles-up');
        }
    });
    

});
