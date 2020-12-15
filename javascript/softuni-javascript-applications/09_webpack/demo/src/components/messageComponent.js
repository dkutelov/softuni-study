class MessageComponent extends HTMLElement {
    constructor() {
        super();
        this.messages = [
            'message 1',
            'message 2',
            'message 3',
            'message 4',
            'message 5',
            'new message',
        ];
    }

    tempate(messages) {
        return `
            <h3>Messages</h3>
            <ul>
                ${messages
                    .map(
                        (m) => `<message-element name="${m}"></message-element>`
                    )
                    .join('')}
            </ul>`;
    }
    connectedCallback() {
        this.innerHTML = this.tempate(this.messages);
    }
}

export default MessageComponent;
