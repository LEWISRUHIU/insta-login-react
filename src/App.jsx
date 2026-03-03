import "./App.css"

function App(){
  return <div className="container">
    <div className="left">
      <h2></h2>
      <p>See everyday moments from your <span>close friends</span>.</p>
      <img src="./images/left.png" alt="" />

    </div>
    <div className="right">
      <h1>Log into Instagram</h1>
      <input type="text" placeholder="Mobile number,username or email"/>
      <input type="text" placeholder="password"/>
      <button>Log In</button>
      <h2>Forgot Password?</h2>
      <button id="one">Login with Facebook</button>
      <button id="two">Create new account</button>

      <h4>Meta</h4>

    </div>

  </div>
}
export default App