import { html } from '../../node_modules/lit-html/lit-html.js';

export default ({ onLoginSubmit }) => html`
    <section id="viewLogin">
        <h2>Login to your account:</h2>
        <form id="formLogin" @submit=${onLoginSubmit}>
            <label for="email">Email:</label>
            <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Email"
            />
            <label for="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
            />
            <input type="submit" class="login" value="Login" />
        </form>
    </section>
`;
