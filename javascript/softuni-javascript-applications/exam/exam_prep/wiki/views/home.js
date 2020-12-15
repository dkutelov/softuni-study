import { html } from '../node_modules/lit-html/lit-html.js';
import articleTemplate from './article.js';

export default ({ data = [], navigationHandler }) => html`
    <div class="content">
        <section class="CSharp">
            <h2>C#</h2>
            <div class="articles">
                ${data
                    .filter((article) => article.category === 'C#')
                    .map((article) =>
                        articleTemplate(article, navigationHandler)
                    )}
            </div>
        </section>
    </div>
`;
