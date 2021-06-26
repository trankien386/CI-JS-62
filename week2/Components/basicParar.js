class basic extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode:"open"
    })
  }

  static get observedAttributes() {
    return ['key', 'url', 'author', 'id'];
  }

  connectedCallback() {
    //mounting
    console.log(this.isConnected);
    this.shadow.innerHTML = `
      <p>gone</p>
    `
  }
  attributeChangedCallback(name, oldValue, newValue) {
    //update
    console.log(name, oldValue, newValue);
  }
  disconnectedCallback() {
    //unmounting
    console.log('remove');
  }
}

customElements.define('basic-para', basic);