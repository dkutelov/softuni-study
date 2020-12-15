import { html } from '../../node_modules/lit-html/lit-html.js';

export default ({ onRegisterSubmit }) => html`
    <section id="viewRegister">
        <h2>Create your account:</h2>
        <form id="formRegister" @submit=${onRegisterSubmit}>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Email" />
            <label for="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
            />
            <label for="rePassword">Repeat Password:</label>
            <input
                type="password"
                id="rePassword"
                name="rePassword"
                placeholder="Repeat Password"
            />
            <input type="submit" class="register" value="Register" />
        </form>
    </section>
`;
