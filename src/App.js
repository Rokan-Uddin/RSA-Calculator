import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import KeyGenerate from './components/KeyGenerate';
import Message from './components/Message';
import Rules from './components/Rules';

const arr=[];
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function populateEArray(r) {
  var rr=r;
  if(rr>20) rr=200;
  for (var i = 2; i < rr; ++i) {
    if (gcd(i, r) === 1) arr.push(i+" ");
  }
}
function makeD(e,r) {
  for(var i=1;i<r;i++) {
    if((Math.ceil((1+(i*r))/e))===((1+(i*r))/e)){
      var ee=((1+(i*r))/e);
      break;
    }
  }
  return ee;
}
function MessageButton(req){
  if(req.d>0) { 
  return(
    <div className="row justify-content-center">
    <Link className=" col-6 col-sm-2 nav-link text-center mb-5 btn-dark" type="button" to='/chat'>Test Messaging</Link>
    </div>
    )
  }
  else {
    return('');
  }
 }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      p:0,
      q:0,
      e:0,
      d:0,
      n:0,
      r:0,
      array:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }
  handleSubmit2(event) {
    const dd =makeD(event.target.e.value, this.state.r);
    this.setState({
      e:event.target.e.value,
      d:dd
    })
    event.preventDefault();
  }
  handleSubmit(event) {
    populateEArray((event.target.p.value-1)*(event.target.q.value-1));
    this.setState({
      p:event.target.p.value,
      q:event.target.q.value,
      n:event.target.p.value*event.target.q.value,
      r:(event.target.p.value-1)*(event.target.q.value-1),
      array:arr
    })
    event.preventDefault();
  }
  render() {
    return (
      <Router >
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <Link className="navbar-brand" to='/'>RSA Calculator</Link>
          <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarTogglerDemo02" 
          aria-controls="navbarTogglerDemo02" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>      
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/chat'>Message</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to='/rules'>Rules</Link>
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </nav>
     <Switch>
        <Route path="/chat">
        <Message
        p={this.state.p}
        q={this.state.q}
        d={this.state.d}
        n={this.state.n}
        e={this.state.e}
        r={this.state.r} />
        </Route>
        <Route path="/rules">
        <Rules />
        </Route>
        <Route path="/">
        <h1 className="text-center my-5">KEY GENERATION </h1>
        <KeyGenerate 
        p={this.state.p}
        q={this.state.q}
        d={this.state.d}
        n={this.state.n}
        e={this.state.e}
        r={this.state.r}
        array={this.state.array}
        handleSubmit={this.handleSubmit}
        handleSubmit2={this.handleSubmit2}
        /> {
        }
        <MessageButton d={this.state.d} />
        </Route>
        </Switch>
        </div>
        </Router>
        );

  }

}
export default App;
