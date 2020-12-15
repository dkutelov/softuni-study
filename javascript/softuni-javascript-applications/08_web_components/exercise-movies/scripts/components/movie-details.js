import { html, render } from 'https://unpkg.com/lit-html?module';
import { getMovieById } from '../services/movieService.js';
import { getUserData } from '../services/authServices.js';

const template = (ctx) => html`
    <div class="container">
        <div class="bg-light text-dark">
            <div class="row">
                <h1>Movie title: ${ctx.title}</h1>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <img
                        class="img-thumbnail"
                        src="${ctx.imageUrl}"
                        alt="${ctx.title}"
                    />
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3">Movie Description</h3>
                    <p>${ctx.description}</p>
                    ${ctx.isAuthor
                        ? html` <a class="btn btn-danger" href="#">Delete</a>
                              <a class="btn btn-warning" href="#">Edit</a>`
                        : ''}
                    <a class="btn btn-primary" href="#">Like</a>
                    <span class="enrolled-span">Liked 1</span>
                </div>
            </div>
        </div>
    </div>
`;

export default class MovieDetails extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const movieId = this.location.params.id;
        const userId = getUserData().id;
        getMovieById(movieId).then((data) => {
            Object.assign(this, data);
            this.isAuthor = movieId === userId;

            this.render();
        });
    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}
