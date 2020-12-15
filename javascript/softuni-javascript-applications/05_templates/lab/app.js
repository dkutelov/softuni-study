import contacts from './contacts.js';
import contactView from './card.js';

const contactsContainer = document.getElementById('contacts');

Handlebars.registerPartial('contactTemplate', contactView);

const allCardsView = `
    {{#each contacts}}
        {{> contactTemplate}}
    {{/each}}
`;

const template = Handlebars.compile(allCardsView);
contactsContainer.innerHTML = template({ contacts });
