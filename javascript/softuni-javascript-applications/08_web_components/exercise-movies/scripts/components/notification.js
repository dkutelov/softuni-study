import { html, render } from 'https://unpkg.com/lit-html?module';

const template = (message) => html`
    <section class="notifications">
        <p class="notification-message" id="errorBox">${message}</p>
    </section>
    <section
        class="notifications"
        style="background-color: rgba(1, 131, 29, 0.541)"
    >
        <p class="notification-message" id="successBox">${message}</p>
    </section>
`;

export default class Notifications extends HTMLElement {
    constructor(message, type) {
        super();
        this.message = message;
        this.type = type;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        render(template(this.message), this);
    }
}
