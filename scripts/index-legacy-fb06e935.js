System.register([],(function(e,t){"use strict";var o=document.createElement("style");return o.textContent='@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";textarea::-moz-selection{background-color:#0c0404}.body--dark,.text-area--dark,footer,nav,textarea::selection{background-color:#0c0404}.text-area--dark::-moz-selection,h1::-moz-selection,p::-moz-selection,a::-moz-selection{background-color:#faf9f6}.text-area--dark::selection,textarea,body,h1::selection,p::selection,a::selection{background-color:#faf9f6}.text-area--dark::-moz-selection,h1::-moz-selection,p::-moz-selection,a::-moz-selection{color:#0c0404}.text-area--dark::selection,h1::selection,p::selection,a::selection,textarea{color:#0c0404}textarea::-moz-selection{color:#faf9f6}.text-area--dark,h1,p,a,textarea::selection{color:#faf9f6}footer,nav{width:100%}.container--content__navbar,.container--content__buttons,.container--content__footer,nav{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}.container,.container--content__buttons{margin-inline:auto}.container--content__navbar,.container--content__footer{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center}.container--content__navbar,.container--content__footer,.container--toggler{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.container--content__buttons{-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-moz-box-pack:space-evenly;justify-content:space-evenly}*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role=list],ol[role=list]{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*:before,*:after{-webkit-animation-duration:.01ms!important;-moz-animation-duration:.01ms!important;-o-animation-duration:.01ms!important;animation-duration:.01ms!important;-webkit-animation-iteration-count:1!important;-moz-animation-iteration-count:1!important;-o-animation-iteration-count:1!important;animation-iteration-count:1!important;-webkit-transition-duration:.01ms!important;-moz-transition-duration:.01ms!important;-o-transition-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}@font-face{font-family:Neue Haas Grotesk;src:url(/noter/assets/fonts/neue-haas-grotesk-black-e588a0e9.eot);src:url(/noter/assets/fonts/neue-haas-grotesk-black-7571e997.woff) format("woff");src:url(/noter/assets/fonts/neue-haas-grotesk-black-1bed98f5.woff2) format("woff2");src:url(/noter/assets/fonts/neue-haas-grotesk-black-f6aa8fdd.ttf) format("truetype");font-weight:400;font-style:normal}h1,h2,h3,h4,button,span,.paragraph--footer{font-family:Neue Haas Grotesk,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}p,figure,blockquote,dl,dd,a,textarea{font-family:Roboto,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}h1,p,a{cursor:default}h1{font-size:clamp(1.95rem,1.56vw + 1.56rem,2.81rem);margin-left:auto;letter-spacing:-.094rem}a{font-size:clamp(.8rem,.17vw + .76rem,.89rem);text-decoration:none;cursor:pointer}textarea{font-size:clamp(.9rem,.61vw + 1rem,1.1rem)}.paragraph--footer{font-family:Neue Haas Grotesk,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:clamp(1.25rem,.61vw + 1.1rem,1.58rem)}body{margin:0 auto}textarea{padding:.5rem;margin:5vh 0;margin-inline:auto;border:none;width:100%;min-height:90vh;outline:none;resize:none}nav{margin:0 auto}footer{margin:10vh 0 0}.nav--dark{border-bottom:1px solid #FAF9F6}.toggler-sun--dark{fill:#faf9f6}.toggler-sun-beams--dark{stroke:#faf9f6}.footer--dark{border-top:1px solid #FAF9F6}.container{width:min(130.625rem,93%)}.container--content__buttons{margin:5vh 0;width:90%}.container--content__footer{padding:min(2vh,1rem);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.container--toggler{margin-left:auto;margin-top:5px}\n',document.head.appendChild(o),{execute:function(){const e=e=>{e.nav.classList.toggle("nav--dark"),e.body.classList.toggle("body--dark"),e.togglerSun.classList.toggle("toggler-sun--dark"),e.togglerSunBeams.classList.toggle("toggler-sun-beams--dark"),e.textArea.classList.toggle("text-area--dark"),e.footer.classList.toggle("footer--dark")},t={body:document.querySelector("body"),nav:document.querySelector("nav"),togglerSun:document.querySelector(".toggler-sun"),togglerSunBeams:document.querySelector(".toggler-sun-beams"),textArea:document.querySelector("textarea"),footer:document.querySelector("footer")};let o=matchMedia("(prefers-color-scheme: dark)"),n=o.matches,a=!1;const r=document.querySelector(".toggler");let i=document.querySelector("textarea");i.value=localStorage.getItem("userTexts"),o.addEventListener("change",(o=>{a&&!o.matches&&(e(t),a=!1),!a&&o.matches&&(e(t),a=!0)})),i.addEventListener("change",(()=>{localStorage.setItem("userTexts",i.value)})),null!=r&&r.addEventListener("click",(()=>{e(t),a=!a})),n&&(e(t),a=!0)}}}));
