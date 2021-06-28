class login extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: 'open'
    })
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>${style}</style>
        
    `
  }
}

const style = `
  
`

customElements.define('login-component', login);