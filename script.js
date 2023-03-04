const toggerswitch = document.querySelector('input[type="checkbox"]');

const nav = document.getElementById("nav");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const img4 = document.getElementById("image4");
const img5 = document.getElementById("image5");
const textbox = document.getElementById("text-box");
const toggerIcon = document.getElementById("togger-icon");




function darkmode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textbox.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    toggerIcon.children[0].textContent = 'Dark Mode';
    toggerIcon.children[1].classList.replace("fa-sun","fa-moon");
    img1.src = 'img/undraw_proud_coder_dark.svg'
    img2.src = "img/undraw_feeling_proud_dark.svg"
    img3.src = "img/undraw_conceptual_idea_dark.svg"
    img4.src = "img/undraw_Work_time_dark.svg"
    img5.src=  "img/undraw_Camera_dark.svg"
}


function lightmode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textbox.style.backgroundColor = 'rgb(0 0 0/ 50%)';
    toggerIcon.children[0].textContent = 'Light Mode';
    toggerIcon.children[1].classList.replace("fa-moon","fa-sun");
    img1.src = 'img/undraw_proud_coder_light.svg'
    img2.src = "img/undraw_feeling_proud_light.svg"
    img3.src = "img/undraw_conceptual_idea_light.svg"
    img4.src = "img/undraw_Work_time_light.svg"
    img5.src=  "img/undraw_Camera_light.svg"
}







function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme","dark");
        localStorage.setItem('theme','dark')
        darkmode();
    }else{
        document.documentElement.setAttribute("data-theme","light");
        localStorage.setItem('theme','light')
        lightmode();

    }

}


toggerswitch.addEventListener('change', switchTheme);


const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute("data-theme",currentTheme);

 
    if (currentTheme==='dark'){
        toggerswitch.checked = true;
        darkmode();

        
    }

}