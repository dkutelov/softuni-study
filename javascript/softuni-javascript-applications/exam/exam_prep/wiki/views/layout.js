import { html } from '../node_modules/lit-html/lit-html.js';
import headerTemplate from './header.js';
import footerTemplate from './footer.js';

export default (children, props) => html`
    ${headerTemplate(props)} ${children(props)} ${footerTemplate()}
`;
