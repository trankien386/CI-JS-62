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
      <div class="login-container">
        <h2 id="title">Log in</h2>
        <div id="login-form">
          <form>
            <input type="text" id="user-name" placeholder="Username">
            <input type="text" id="password" placeholder="Password">
            <input type="submit" id="login-btn" value="LOG IN">
          </form>
        </div>
        <div id="new-account">
          <a href="#">Create an account</a>
        </div>
      </div>
    `
  }
}

const style = `
  .login-container {
    border: 1px solid white;
    box-shadow: 0 0 8px rgb(189, 187, 187);
    border-radius: 12px;
    width: 390px;
    margin: 15px;
  }
  
  .login-container #title {
    margin: 30px 0 30px 64px;
  }
  
  .login-container #login-form form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .login-container #login-form form input {
    border-radius: 10px;
    border: 1px solid rgb(215,215,215);
    padding: 15px;
    margin: 0 0 10px 0;
    width: 230px;
  }
  
  .login-container #login-form form input:focus {
    outline: none;
  }
  
  .login-container #login-form form #login-btn {
    width: 100px;
    margin: 25px 0;
    font-size: 15px;
    color: #fff;
    background-color: rgb(251, 70, 70);
    border: 0px;
  }
  
  .login-container #login-form form #login-btn:hover {
    cursor: pointer;
    background-color: rgb(240, 46, 46);
  }
  
  .login-container #new-account {
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

customElements.define('login-component', login);