export default function decorate(block) {

  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent.trim();
  console.log(path);
  // Check if there's an existing iframe to avoid multiple iframes
  // const displayDiv = document.getElementById(block);
  // Creating iframe element
  let el = document.createElement("iframe");

  // Setting the values for the attributes
  el.src = path;
  el.width = '1000';
  el.height = '450px';

  block.textContent = '';
  block.append(el);
}
