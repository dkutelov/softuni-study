import { html } from '../../node_modules/lit-html/lit-html.js';

export default ({
    navigationHandler,
    onLogout,
    user: { isAuthenticated, email },
}) => html`
    <nav @click=${navigationHandler}>
        <div class="left-container">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                ${isAuthenticated
                    ? html`
                          <li>
                              <a href="/dashboard">Destinations</a>
                          </li>
                          <li>
                              <a href="/create">Add +</a>
                          </li>
                      `
                    : html` <li>
                              <a href="/login">Login</a>
                          </li>
                          <li>
                              <a href="/register">Register</a>
                          </li>`}
            </ul>
        </div>
        ${isAuthenticated
            ? html`<div class="right-container">
                  <span>Welcome, ${email} |</span>
                  <a href="#" class="log-out" @click=${onLogout}> Logout </a>
              </div>`
            : ''}
    </nav>
`;
