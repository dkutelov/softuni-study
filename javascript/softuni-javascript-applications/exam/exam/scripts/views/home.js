import { html } from '../../node_modules/lit-html/lit-html.js';
import itemCard from './item-card.js';

export default ({
    data = [],
    navigationHandler,
    user: { isAuthenticated },
}) => html`
    <section id="viewCatalog" class="background-img">
        ${isAuthenticated
            ? html`<div class="added-destinations">
                  ${data.map((item) => itemCard(item, navigationHandler))}
              </div>`
            : html`<div class="guest">
                  No destinations possible! Please sign in...
              </div>`}
    </section>
`;
