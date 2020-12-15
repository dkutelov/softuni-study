class AppCard extends HTMLElement {
    constructor() {
        console.log('from constructor');
        super();
        this.attachShadow({ mode: 'open' });
        const cardTemplate = document.getElementById('card-template');

        let cardTmp = cardTemplate.content.cloneNode(true);
        cardTmp.querySelector('h2').textContent = this.getAttribute('title');
        this.shadowRoot.appendChild(cardTmp);
    }
}
window.customElements.define('app-card', AppCard);

const cardsContainer = document.getElementById('cards');

cardsContainer.innerHTML = `
<app-card title="title1">Content 1</app-card>
<app-card title="title2">Content 2</app-card>
<app-card title="title3">Content 3</app-card>`;
