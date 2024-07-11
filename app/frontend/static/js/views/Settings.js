import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
        this.settings = [];
    }

    // Add setting to the list
    addSettings() {
        const inputElement = document.querySelector("#setting-input");
        if (inputElement && inputElement.value) {
            this.settings.push(inputElement.value);
            inputElement.value = "";
            this.renderSettings();
        }
    }

    // Render the settings list
    renderSettings() {
        const settingsList = document.querySelector("#settings-list");
        if (settingsList) {
            settingsList.innerHTML = this.settings
                .map(setting => `<li>${setting}</li>`)
                .join("");
        }
    }

    async getHTML() {
        return `
            <h1>Settings</h1>
            <p>Find all settings of the app here.</p>
            <input type="text" id="setting-input" placeholder="Enter something">
            <button id="add-setting-btn">Add setting</button>
            <ul id="settings-list">
                ${this.settings.map(setting => `<li>${setting}</li>`).join("")}
            </ul>
        `;
    }

    // After rendering the HTML, bind events
    bindEvents() {
        document.querySelector("#add-setting-btn").addEventListener("click", () => this.addSettings());
    }


}
