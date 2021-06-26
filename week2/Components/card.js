class card extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: 'open'
    })
  }

  // mounting
  connectedCallback() {
    this.shadow.innerHTML = `
    
    `
  }
}

const style = `

`
customElements.define('card-component', card);