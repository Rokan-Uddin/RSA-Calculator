import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EDgenerate from './components/EDgenerate';
import Message from './components/Message';

const arr=[];
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function populateEArray(r) {
  for (var i = 2; i < r; ++i) {
    if (gcd(i, r) === 1) arr.push(i);
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
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      p:undefined,
      q:undefined,
      e:undefined,
      d:undefined,
      n:undefined,
      r:undefined,
      array:undefined
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
      <div className="container">
      <h1 className="text-center mt-4">RSA Calculator </h1>
      <EDgenerate 
      p={this.state.p}
      q={this.state.q}
      d={this.state.d}
      n={this.state.n}
      e={this.state.e}
      r={this.state.r}
      array={this.state.array}
      handleSubmit={this.handleSubmit}
      handleSubmit2={this.handleSubmit2}
       />
       <Message
      p={this.state.p}
      q={this.state.q}
      d={this.state.d}
      n={this.state.n}
      e={this.state.e}
      r={this.state.r} />
      </div>
      );
 }
}
export default App;
