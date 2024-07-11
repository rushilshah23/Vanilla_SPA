import AbstractView from "./AbstractView.js"

export default  class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle('Post - '+this.params.id)
    
    }

    async getHTML(){
        return `
            <h1> Post ${this.params.id} </h1>
            <p>This is a sample post with id ${this.params.id}</p>

        `
    }
}


