import { html } from '../../node_modules/lit-html/lit-html.js';
import myItemCard from './my-item-card.js';

export default ({ data = [], navigationHandler, onItemDelete }) => html`
    <section id="viewMydestinations">
        <h3>Your destinations</h3>
        ${data.length > 0
            ? html`
                  ${data.map((item) =>
                      myItemCard(item, navigationHandler, onItemDelete)
                  )}
              `
            : html` <div>You do not have your own destinations yet</div> `}
    </section>
`;
