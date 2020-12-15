import { html } from '../../node_modules/lit-html/lit-html.js';

export default ({ data = [], navigationHandler, user: { id } }) => {
    const {
        itemId,
        destination,
        imgUrl,
        city,
        departureDate,
        creator,
        duration,
    } = data;
    const isCreator = creator === id;
    const date = new Date(departureDate).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return html`
        <section id="viewdestinationDetails">
            <div class="destination-area">
                <div class="destination-area-left">
                    <img src="${imgUrl}" alt="${destination}" />
                </div>
                <div class="destination-area-right">
                    <h3>${destination}</h3>
                    <div>to ${city}</div>
                    <div class="data-and-time">
                        ${date}
                        ${isCreator
                            ? html` <a
                                  href="/edit/${itemId}"
                                  @click=${navigationHandler}
                                  class="edit-destination-detail"
                              ></a>`
                            : ''}
                    </div>
                    <div>${duration} days</div>
                </div>
            </div>
        </section>
    `;
};
