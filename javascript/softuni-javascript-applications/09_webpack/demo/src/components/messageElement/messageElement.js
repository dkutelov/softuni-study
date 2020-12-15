import './mesageElement.css';

class MessageElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<li class='message-item'>${this.getAttribute(
            'name'
        )}</li>`;
    }
}

export default MessageElement;
