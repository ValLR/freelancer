
 /* window.addEventListener('scroll', function () {
   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
   shrinkOn = 200,
   headerEl = document.getElementsByTagName("nav")[0];

   if (distanceY > shrinkOn) {
     headerEl.classList.add("scroll-menu");
   } else {
     headerEl.classList.remove("scroll-menu");
   }

   var contact = document.getElementById("contact");		
   var mcontact = document.getElementsByClassName("contact")[0];

   var portfolio = document.getElementById("portfolio");		
   var menu = document.getElementsByClassName("portfolio")[0];

   var about = document.getElementById("about");		
   var mabout = document.getElementsByClassName("about")[0];

   if(distanceY >= 600){
   		menu.classList.add("menu-scroll-hover");
   } else if (distanceY < 600) {
   		menu.classList.remove("menu-scroll-hover");

   }
 	if(distanceY >= 1700){
   		mabout.classList.add("menu-scroll-hover");
   		menu.classList.remove("menu-scroll-hover");

 	} else if(distanceY >= 2200 || distanceY <= 1700){
   		mabout.classList.remove("menu-scroll-hover");

 	}

 	if(distanceY > 2200){
   		mcontact.classList.add("menu-scroll-hover"); 
   		mabout.classList.remove("menu-scroll-hover");

 	}else if (distanceY >= 2400 || distanceY < 2200) {
 		mcontact.classList.remove("menu-scroll-hover");
 	}
 });