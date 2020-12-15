import { html, render } from 'https://unpkg.com/lit-html?module';
import { getAllMovies } from '../services/movieService.js';
import { getUserData } from '../services/authServices.js';

import MovieCard from './movie-card.js';

customElements.define('movie-card-component', MovieCard);

const template = (ctx) => html`
    <h1 class="text-center">Movies</h1>
    <section>
        <a href="#" class="btn btn-warning">Add Movie</a>
        <form class="search float-right">
            <label>Search: </label>
            <input type="text" />
            <input type="submit" class="btn btn-info" value="Search" />
        </form>
    </section>

    <div class="mt-3">
        <div class="row d-flex d-wrap">
            <div class="card-deck d-flex justify-content-center">
                ${ctx.movies?.map(
                    (movie) =>
                        html`<movie-card-component
                            .data=${movie}
                        ></movie-card-component>`
                )}
                ${ctx.movies?.length === 0 && 'No movies to show'}
            </div>
        </div>
    </div>
`;

export default class MoviesList extends HTMLElement {
    static get observedAttributes() {
        return ['isAuthenticated'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        getAllMovies().then((movies) => {
            Object.assign(this, { movies });
            this.render();
        });
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('name', name);
    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}
