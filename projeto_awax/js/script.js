
function openMenu(){
    let openNav = document.querySelector('nav');
   if(openNav.style.opacity === '1'){
     openNav.style.opacity = '0';
     openNav.style.width = '0';
   }else if(openNav.style.opacity = '0'){  
    openNav.style.opacity = '1';
    openNav.style.width = '50vw';
   }
}
