import { html } from '../node_modules/lit-html/lit-html.js';

export default ({
    navigationHandler,
    onLogout,
    user: { isAuthenticated, email },
}) => html`
    <header @click=${navigationHandler}>
        <h1><a class="home" href="/">SoftWiki</a></h1>
        <nav class="nav-buttons">
            ${isAuthenticated
                ? html` <a href="/create">Create</a>
                      <a href="#" @click=${onLogout}>Logout</a>`
                : html`<a href="/register">Register</a>`}
        </nav>
    </header>
`;
