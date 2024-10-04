export default function decorateButtons(block) {

    const button = document.createElement('a');

    const link = block.dataset.link || '#';
    const label = block.dataset.label || 'Click Me';
    const cssClass = block.dataset.class || 'default-button';

    button.href = link;
    button.className = `button ${cssClass}`;
    button.textContent = label;

    button.addEventListener('click', (event) => {
        console.log('Button Clicked', label)
    });

    block.textContent = '';
    block.append(button);
}