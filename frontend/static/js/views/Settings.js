import Abstractview from "./Abstractview.js";

export default class extends Abstractview {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>Settings</h1>
        <p>
            Manage your privacy and configuration.
        </p>
        `;
    }
}