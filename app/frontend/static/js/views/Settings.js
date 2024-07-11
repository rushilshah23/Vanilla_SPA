import AbstractView from "./AbstractView.js"

export default  class extends AbstractView{
    constructor(params){
        super(params);
        this.setTitle('Setings')
    }

    async getHTML(){
        return `
            <h1> Settings </h1>
            <p>Find all settings of the app here.</p>
 
        `
    }
}


