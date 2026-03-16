import { Component, html, observable, on } from "../kwm-js";
import { BlogModel } from "../models/BlogModel";

export class BlogComponent extends Component {
  model = new BlogModel();
  selectTag = observable(null);

  selectFilterTag(tag) {
    this.selectTag.set(tag);
  }

  clearFilterTag() {
    this.selectTag.set(null);
  }

  render() {
    const allTags = [];
    this.model.posts.get().forEach((post) => {
      allTags.push(...post.tags);
    });
    // Remove duplicates
    const uniqueTags = [...new Set(allTags)];

    const filteredPosts = this.selectTag.get()
      ? this.model.posts.get().filter((post) => post.tags.includes(this.selectTag.get()))
      : this.model.posts.get();

    return html`
            <h1>Blog Posts</h1>
            ${uniqueTags}
            <br>
            <br>
            ${this.selectTag.get()}
            <br>
            <br>
            ${filteredPosts}
        `;
  }
}

customElements.define("blog-component", BlogComponent);
