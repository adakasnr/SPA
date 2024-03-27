import Abstractview from "./Abstractview";

export default class extends Abstractview {
    constructor() {
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back, Dom</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae corporis obcaecati illo dolore odio et,
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
        `;
    }
}