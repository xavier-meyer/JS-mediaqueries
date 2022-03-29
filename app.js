// récupération du carre par leurs ids 
let carre = document.getElementById('carre');

window.onresize = mediaQuery;

mediaQuery();
function mediaQuery(){

    if(document.body.offsetWidth > 800){

        carre.style.backgroundColor = 'yellow';
        carre.style.width ='55px'; 
        carre.style.height = '55px';
        carre.style.border = "3px dashed black";
    }   
    if(document.body.offsetWidth <= 800){
        carre.style.border = "none";
        carre.style.backgroundColor = 'red';
        carre.style.width = '65px'; 
        carre.style.height = '65px';
        carre.style.borderRadius = "50%";
    }   
    if(document.body.offsetWidth <= 600){
        carre.style.backgroundColor = 'green';
        carre.style.width = '65px'; 
        carre.style.height = '65px';
        carre.style.borderRadius = "0";
    } 
    if(document.body.offsetWidth <= 400){
        carre.style.backgroundColor = 'purple';
        carre.style.width = '200px'; 
        carre.style.height = '100px';
    }  
}