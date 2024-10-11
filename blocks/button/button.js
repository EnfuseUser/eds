export default function decorate(block) {

    const button = document.createElement('a');

    const link = '#';
    const label = 'Click Me';
    const cssClass = 'button-default'; 
    const type = 'primary'; 

    button.href = link;
    button.className = `button ${cssClass} ${type}`;
    button.textContent = label;

    button.addEventListener('click', (event) => {
        console.log('Button Clicked:', label);
    });

    block.textContent = '';
    block.append(button);
}
