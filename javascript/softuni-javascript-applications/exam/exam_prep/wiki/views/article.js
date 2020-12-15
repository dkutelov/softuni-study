import { html } from '../node_modules/lit-html/lit-html.js';

export default (article, navigationHandler) => html`
    <article>
        <h3>${article.title}</h3>
        <p>${article.content}</p>
        <a
            href="/details/${article.id}"
            class="btn details-btn"
            @click=${navigationHandler}
            >Details</a
        >
    </article>
`;
