import AbstractView from "./AbstractView.js"

export default  class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle('Dashboard')
    }

    async getHTML(){
        return `
            <h1> Dashboard </h1>
            <p>Find all items in the Dashboard home page.</p>
            <h2>For all posts</h2>
            <a href="/posts" data-link>View all posts</a>
        `
    }
}


