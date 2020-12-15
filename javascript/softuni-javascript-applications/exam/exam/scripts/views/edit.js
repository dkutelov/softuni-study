import { html } from '../../node_modules/lit-html/lit-html.js';

export default ({ data = [], onEditSubmit }) => {
    const { itemId, destination, city, duration, departureDate, imgUrl } = data;
    return html`
        <section id="viewEditdestination">
            <h2>Edit existing destination</h2>
            <form
                id="formAdddestination"
                @submit=${(e) => onEditSubmit(e, itemId)}
            >
                <label for="destination">Destination name:</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    .value=${destination}
                />
                <label for="city">City:</label>
                <input type="text" id="city" name="city" .value=${city} />
                <label for="duration">Duration:</label>
                <input
                    type="number"
                    id="duration"
                    name="duration"
                    .value=${duration}
                />
                <label for="departureDate">Departure Date:</label>
                <input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    .value=${departureDate}
                />
                <label for="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl" .value=${imgUrl} />

                <input type="submit" class="create" value="Edit" />
            </form>
        </section>
    `;
};
