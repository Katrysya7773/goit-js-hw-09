const t=document.body,e=document.querySelectorAll("button"),n=e[0],d=e[1];let l;n.addEventListener("click",(function(e){n.disabled=!0,n.setAttribute("disabled",!0),l=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),d.addEventListener("click",(function(t){n.disabled=!1,clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.2c70b9c7.js.map
