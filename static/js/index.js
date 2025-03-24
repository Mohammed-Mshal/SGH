const toggleBTN = document.querySelector(".toggle-links");
const listLinks = document.querySelector(".list-links");

// When Click on toggle menu check if it's toggled then remove toggled class else add it 
toggleBTN.addEventListener("click", (e) => {
    listLinks.classList.contains("toggled")?
    listLinks.classList.remove("toggled"):
    listLinks.classList.add("toggled");
});

// When Click out menu close it
document.addEventListener('click', (e) => {
    if (!listLinks.contains(e.target) && !toggleBTN.contains(e.target)) {
        listLinks.classList.remove('toggled');
    }
});

const revealElements = document.querySelectorAll('.reveal');

const reveal = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust this value to change when the animation triggers

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', reveal);
window.addEventListener('scroll', reveal);
// Trigger once to reveal elements that are already visible
reveal();


const language=document.querySelector('.language')
language.addEventListener('click',()=>{
    const currentLocation=location.pathname
    if (currentLocation.includes('/ar/')) {
        location.href=location.href+currentLocation.replace('/ar/','/')
    }
    else{
        location.href=location.href+'ar'+currentLocation
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('area');
    const popup = document.querySelector('.area-popup');
    
    areas.forEach(area => {
        area.addEventListener('mouseover', (e) => {
            const rect = e.target.getBoundingClientRect();
            popup.textContent = area.getAttribute('data-description');
            popup.style.left = `${rect.left}px`;
            popup.style.top = `${rect.top - popup.offsetHeight - 10}px`;
            popup.classList.add('active');
        });
        
        area.addEventListener('mouseout', () => {
            popup.classList.remove('active');
        });
    });
});