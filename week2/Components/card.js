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
      <style>${style}</style>
      <div class="card-container">
      <h3 class="title">Weathering With You</h3>
      <div class="card-info">
        <div class="img">
          <img src="./img/wellBeAlright.PNG"/>
        </div>
        <div class="card-desc">
          <h4 class="sub-title">We'll Be Alright</h4>
          <p class="card-content">
            The world being carried on your little shoulders.<br>
            I'm the only one who could see it and now I might start to cry.<br>
            You ask "Are you alright?", you noticed since you hear me.<br>
            I get confused and say "I'm alright" but..<br>
            Why am I saying such a thing..<br>
            When you are the one who looks like is about to collapse.
          </p>
        </div>
      </div>
    </div>
    `
  }
}

const style = `
  .card-container {
    margin: 15px;
    border: 1px solid white;
    box-shadow: 0 0 8px rgb(189, 187, 187);
    border-radius: 12px;
    background-color: rgb(250, 250, 250);
    width: 390px;
  }
  
  .card-container .title {
    margin: 15px 0 0 15px;
  }
  
  .card-container .card-info {
    margin: 18px;
    background-color: #fff;
    border-radius: 12px;
  }
  
  .card-container .card-info .img {
    margin: 0 15px;
  }
  
  .card-container .card-info img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    margin: 15px 0 0 0;
  }
  
  .card-container .card-info .card-desc {
    margin: 0 15px;
  }
  
  .card-container .card-info .card-desc .card-content {
    font-size: 14px;
    line-height: 1.4em;
    padding: 0 0 15px 0;
    margin: 0;
  }
`
customElements.define('card-component', card);