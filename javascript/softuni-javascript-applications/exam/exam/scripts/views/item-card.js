import { html } from '../../node_modules/lit-html/lit-html.js';

export default (
    { id, departureDate, city, destination, imgUrl },
    navigationHandler
) => html`
    <a
        href="details/${id}"
        @click=${navigationHandler}
        class="added-destination"
    >
        <img
            src="${imgUrl}"
            alt="${destination}"
            class="picture-added-destination"
        />
        <h3>${destination}</h3>
        <span>to ${city} </span><span>${departureDate}</span>
    </a>
`;
