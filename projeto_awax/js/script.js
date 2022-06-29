
function openMenu(){
    let openNav = document.querySelector('nav');
   if(openNav.style.display == 'none'){
     openNav.style.display = 'flex';
   }else {   
    openNav.style.display = 'none';
   }
}