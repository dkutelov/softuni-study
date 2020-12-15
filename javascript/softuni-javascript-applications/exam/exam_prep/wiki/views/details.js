import { html } from '../node_modules/lit-html/lit-html.js';

export default ({ params, data }) => html`
    <div class="container details">
        <div class="details-content">
            <h2>${data.title}</h2>
            <strong>Category</strong>
            <p>Content</p>
            <div class="buttons">
                <a href="#" class="btn delete">Delete</a>
                <a href="#" class="btn edit">Edit</a>
                <a href="#" class="btn edit">Back</a>
            </div>
        </div>
    </div>
`;
