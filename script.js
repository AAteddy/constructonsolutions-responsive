// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// add event listener
navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

  //client-logo slider
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }