import Abstractview from "./Abstractview.js";

export default class extends Abstractview {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <h1>Posts</h1>
        <p>
            You are viewing the posts!
        </p>
        `;
    }
}