class signUp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: 'open'
    })
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>${style}</style>
      <div class="signup-container">
        <h2 id="title">Sign up</h2>
        <div id="signup-form">
          <form>
            <input type="text" id="user-name" placeholder="Username">
            <input type="text" id="password" placeholder="Password">
            <input type="submit" id="signup-btn" value="SIGN UP">
          </form>
        </div>
        <div id="new-account">
          <a href="#">Back to Log in</a>
        </div>
      </div>
    `
  }
}

const style = `
  .signup-container {
    border: 1px solid white;
    box-shadow: 0 0 8px rgb(189, 187, 187);
    border-radius: 12px;
    width: 390px;
    margin: 15px;
  }
  
  .signup-container #title {
    margin: 30px 0 30px 64px;
  }
  
  .signup-container #signup-form form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .signup-container #signup-form form input {
    border-radius: 10px;
    border: 1px solid rgb(215,215,215);
    padding: 15px;
    margin: 0 0 10px 0;
    width: 230px;
  }
  
  .signup-container #signup-form form input:focus {
    outline: none;
  }
  
  .signup-container #signup-form form #signup-btn {
    width: 100px;
    margin: 25px 0;
    font-size: 15px;
    color: #fff;
    background-color: rgb(76, 153, 233);
    border: 0px;
  }
  
  .signup-container #signup-form form #signup-btn:hover {
    cursor: pointer;
    background-color: rgb(28, 127, 230);
  }
  
  .signup-container #new-account {
    text-align: center;
    color:rgb(117, 117, 117);
    margin: 0 0 20px 0;
  }

  a {
    text-decoration: none;
  }
  
  a, a:visited, a:hover, a:active {
    color: inherit;
  }
`

customElements.define('signup-component', signUp);