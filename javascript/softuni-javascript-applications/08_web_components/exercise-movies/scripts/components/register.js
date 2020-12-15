import { html, render } from 'https://unpkg.com/lit-html?module';
import { register } from '../services/authServices.js';
import { notify } from '../utils.js';

const template = (onSubmit) => html`
    <form class="text-center border border-light p-5" @submit=${onSubmit}>
        <div class="form-group">
            <label for="email">Email</label>
            <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="email"
                value=""
            />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                value=""
            />
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input
                type="password"
                class="form-control"
                placeholder="Repeat-Password"
                name="repeatPassword"
                value=""
            />
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
`;

export default class Register extends HTMLElement {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    connectedCallback() {
        this.render();
    }

    async onSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPassword');

        if (password !== repeatPassword) {
            notify('Passwords should match!', 'error');
            return;
        }

        const user = await register(email, password);
        localStorage.setItem('auth', JSON.stringify(user));
        notify('Successfull registration!', 'success');
        //#TODO reditect
    }

    render() {
        render(template(this.onSubmit), this);
    }
}
