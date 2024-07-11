import AbstractView from "./AbstractView.js"

export default  class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle('Posts')
    }

    async getHTML(){
        return `
            <h1> Posts </h1>
            <p>Find all posts.</p>
            <li>
            <a href="/post/1" data-link>Post 1</a>
            <a href="/post/2" data-link>Post 2</a>
            <a href="/post/3" data-link>Post 3</a>

            
            </li>
        `
    }
}


