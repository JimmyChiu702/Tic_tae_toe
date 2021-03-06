import Component from  './component.js';

import './reset.css';

export default class Reset extends Component {
    static getRootClass() {
        return '.reset';
    }

    constructor(root) {
        super(root);

        root.addEventListener("click", this.handleDomClick.bind(this));
        this.resetDisplay = root.querySelector("#reset span");
    }

    handleDomClick(e) {
        this.fire('reset');
    }
}
