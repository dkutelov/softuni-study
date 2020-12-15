import { html } from '../../node_modules/lit-html/lit-html.js';

export default (
    { id, departureDate, city, destination, imgUrl, duration },
    navigationHandler,
    onItemDelete
) => html`
    <div class="destination-ticket">
        <div class="destination-left">
            <img src=${imgUrl} alt=${destination} />
        </div>
        <div class="destination-right">
            <div>
                <h3>${destination}</h3>
                <span>${departureDate}</span>
            </div>
            <div>to ${city}</div>
            <p>${duration} days</p>
            <a class="remove" @click=${(e) => onItemDelete(e, id)}>REMOVE</a>
            <a href="details/${id}" class="details" @click=${navigationHandler}
                >Details</a
            >
        </div>
    </div>
`;
