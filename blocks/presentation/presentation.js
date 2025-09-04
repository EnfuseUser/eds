import '../../scripts/reveal.js/dist/reveal.js';
import RevealHighlight from '../../scripts/reveal.js/plugin/highlight/highlight.esm.js'
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {

  // const themeMeta = document.querySelector('[data-theme-attr]')
  // const theme = themeMeta ? themeMeta.getAttribute('data-theme-attr') : 'white';
  
  // const themeLink = document.createElement('link');
  // themeLink.rel = 'stylesheet';
  // themeLink.href = `../../scripts/reveal.js/dist/theme/${theme}.css`;
  // document.head.appendChild(themeLink);

  // const localStyle = document.createElement('link');
  // localStyle.rel = 'stylesheet';
  // localStyle.href = '../../blocks/presentation/presentation.css';
  // document.head.appendChild(localStyle);

  //logo fragment
  // const fragment = await loadFragment('/fragments/logo');
  // const logoSrc = fragment?.querySelector('img').src
  const logoSrc = 'abc'
  
  

  function welcomeSlide(row) {
    const [classNameEl, titileEl, descFirstEl, descSecondEl] = row.children
    return `
    <section class="${classNameEl.innerText}">
    <h1>${titileEl?.innerText}</h1>
      ${descFirstEl?.innerHTML}
      ${descSecondEl?.innerHTML}
    </section>
    `
  }

  function bannerSlide(row) {
    const [classNameEl, titileEl, descFirstEl, descSecondEl] = row.children
    const imgSrc = titileEl?.querySelector('img').src

    return `
    <section data-background-image=${imgSrc} class="${classNameEl.innerText}">
    <div class="banner-main">
    ${descFirstEl?.innerHTML}
    ${descSecondEl?.innerHTML}
    </div>
    </section>
    `
  }

  function listViewSlide(row) {
    const [classNameEl, titileEl, descFirstEl, descSecondEl] = row.children
    const listItems = descFirstEl?.querySelectorAll('ul li');

    const ulElement = document.createElement('ul');
  
    listItems?.forEach((item) => {
      const li = item;
      li.classList.add('fragment')
      ulElement.append(li)
    });

    return `
    <section class="${classNameEl.innerText}">
      <h1>${titileEl.innerText}</h1>
      <div class="logo"><img src="${logoSrc}" alt="Logo image"></div>
      ${ulElement.innerHTML}
    </section>
    `
  }

  function containerSlide(row) {
    const [classNameEl, titileEl, descFirstEl, descSecondEl] = row.children

    if (classNameEl.textContent === "slide-container-coloumn") {
      return `
       <section class="${classNameEl.innerText}">
         <h1>${titileEl.innerText}</h1>
         <div class="logo"><img src="${logoSrc}" alt="Logo image"></div>
         <div class="slide-container-main">
           <div class="slide-container-left fragment">
              ${descFirstEl.innerHTML}
           </div>
           <div class="slide-container-right fragment">
            ${descSecondEl.innerHTML}
           </div>
         </div>
       </section>
      `
    } else {
    return `
    <section class="${classNameEl.innerText}">
      <h1>${titileEl.innerText}</h1>
      <div class="logo"><img src="${logoSrc}" alt="Logo image"></div>
      <section>
        <div class="slide-container-top">
          ${descFirstEl.innerHTML}
        </div>
      </section>
      <section>
        <div class="slide-container-bottom">
          ${descSecondEl.innerHTML}
        </div>
      </section>
    </section>
    `
    }
  }

  function tableSlide(row) {
    const [classNameEl, titileEl, descFirstEl, descSecondEl] = row.children
    return `
    <section class="${classNameEl.innerText}">
      <h1>${titileEl?.innerText}</h1>
      <div class="logo"><img src="${logoSrc}" alt="Logo image"></div>
      <div class="table-top fragment">${descFirstEl.innerHTML}</div>
      <div class="table-bottom fragment">${descSecondEl.innerHTML}</div>
    </section>
    `
  }

  function imageListSlide(row) {
    const [classNameEl, titileEl, descFirstEl, descSecondEl] = row.children
    
    const listItems = descFirstEl?.querySelectorAll('picture');

    const divElement = document.createElement('div');
  
    listItems?.forEach((item) => {
      const section = document.createElement('section')
      section.append(item)
      divElement.append(section)
    });

    return `
    <section class="${classNameEl.innerText}">
      <h1>${titileEl.innerText}</h1>
      <div class="logo"><img src="${logoSrc}" alt="Logo image"></div>
      ${divElement.innerHTML}
    </section>
    `
  }

  function specificationTableSlide(row) {
    const [classNameEl, titileEl, descFirstEl, descSecondEl] = row.children
    descFirstEl.querySelectorAll('table tbody tr').forEach((row, index) => {
  row.classList.add('fragment');
});
    
    return `
    <section class="${classNameEl.innerText}">
      <h1>${titileEl?.innerText}</h1>
      <div class="logo"><img src="${logoSrc}" alt="Logo image"></div>
      <div class="specification-table">${descFirstEl?.innerHTML}</div>
    </section>
    `
  }

  function thankyouSlide(row) {
    const [classNameEl, titileEl, descFirstEl, descSecondEl] = row.children
    const imgSrc = titileEl?.querySelector('img').src

    return `
    <section data-background-image=${imgSrc} class="${classNameEl.innerText}">
    <div class="thankyou-main">
    ${descFirstEl?.innerHTML}
    ${descSecondEl?.innerHTML}
    </div>
    </section>
    `
  }

  const mainDiv = document.createElement('div');
  [...block.children].forEach((row) => {
    let className = row.firstElementChild.textContent
    let section;

    switch (className) {
      case "slide-welcome":
        section = welcomeSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      case "slide-banner":
        section = bannerSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      case "slide-listview":
        section = listViewSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      case "slide-container-coloumn":
        section = containerSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      case "slide-container-row":
        section = containerSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      case "slide-container-table":
        section = tableSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      case "slide-image-list":
        section = imageListSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      case "slide-specification-table":
        section = specificationTableSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      case "slide-thankyou":
        section = thankyouSlide(row);
        mainDiv.insertAdjacentHTML('beforeend', section);
        break;
      default:
        console.log("Unknown row...");
    }
  });

  let slide = `
   <div class="reveal">
      <div class="slides">
        ${mainDiv.innerHTML}
      </div>
    </div>
  `

  block.textContent = '';
  block.innerHTML = slide;

  new Reveal({
    minScale: 1,
    maxScale: 1,
    plugins: [RevealHighlight],
  }).initialize();

}