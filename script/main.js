"use strict";var asideBtn=document.querySelector(".aside-btn"),burger=document.querySelector(".burger"),burger__close=document.querySelector(".burger__close");asideBtn.addEventListener("click",function(){burger.classList.add("active")}),burger__close.addEventListener("click",function(){burger.classList.remove("active")});var swiper=new Swiper(".models__swiper",{direction:"horizontal",loop:!0,slidesPerView:2,spaceBetween:40,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function renderBullet(a,b){return"<span class=\""+b+"\">0"+(a+1)+"</span>"}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});