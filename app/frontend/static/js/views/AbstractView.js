export default class {
    constructor(params){
        this.params = params

        console.log(this.params)

    }




    setTitle(title){
        document.title = title
    }

    async getHTML(){
    
        return '';
    }

    // After rendering the HTML, bind events
    bindEvents() {
        
    }

    // Initialize the view and bind events
    async init() {
        const html = await this.getHTML();
        document.querySelector("#app").innerHTML = html;
        this.bindEvents();
    }
}