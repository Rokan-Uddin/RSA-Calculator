import React from 'react';
function Candidates(props){
	if (props.array.length>0) { 
	return(
		<div> <h4> Candidates Of e: </h4>
		 {props.array} 
		 </div>
		);
}
else {
	return(props.array);
}
}
function Warning(e){
	if(e.checkprime===false){
		return(
			<div className="bg-danger">
				<h3 className="text-center p-2">P and Q must be Prime </h3>
			</div>
			)
	}
	else {
		return('');
	}
	
}
class VariableGenerate extends React.Component  {
	constructor(props) {
		super(props);
		this.state={
			Prime:true
	}
	this.isPrime = this.isPrime.bind(this);
}
isPrime(event) {
	for(var i = 2; i < event.target.value; i++) {
		if(event.target.value % i === 0) {
			this.setState({
				Prime:false
			})
			return
		}
	}
	this.setState({Prime:true})
	event.preventDefault();
}
	render() { 
		return(
			<div className="container">
				<div className="row justify-content-center text-center m-4">
					<div className="col-4 col-sm-2 card p-3"><h4>{"p : "+this.props.p}</h4></div>
					<div className="col-4 col-sm-2 card p-3"><h4>{"q : "+this.props.q}</h4></div>
					<div className="col-4 col-sm-2 card p-3"><h4>{"n : "+this.props.n}</h4></div>
					<div className="col-4 col-sm-2 card p-3"><h4>&Phi;(n){" : "+this.props.r}</h4></div>
					<div className="col-4 col-sm-2 card p-3"><h4>{"e : "+this.props.e}</h4></div>
					<div className="col-4 col-sm-2 card p-3"><h4>{"d : "+this.props.d}</h4></div>

				</div>

				<div className="row m-4 justify-content-center">
				<h5 className="text-center">Step 1: Choose Two different random large prime Number P & Q: </h5>
				</div>
				<Warning checkprime={this.state.Prime} />
				<div className="row justify-content-center mx-4">
					<form className="row justify-content-center" onSubmit={this.props.handleSubmit} >
						<input className="col-12 m-2 text-center"  name="p" placeholder="Enter P" onChange={this.isPrime} />
						<input className="col-12 m-2 text-center" name="q" placeholder="Enter Q" onChange={this.isPrime} />
						<input className="col-4 text-center justify-content-center" type="submit" value="Set P,Q" />
					</form>
				</div>
				<div className="row m-4 justify-content-center">
				<h5 className="row text-center">Step 2: Choose 'e' such that &Phi;(n) > e >1 and GCD( e,&Phi;(n) ) = 1 </h5>
				</div>
				<div>
				<Candidates array={this.props.array}/>
				</div>

				<div className="row justify-content-center mb-5">
					<form className="row justify-content-center" onSubmit={this.props.handleSubmit2}>
						<input className="col-12 m-2 text-center"  name="e" placeholder="Enter E" />
						<input className="col-4 text-center justify-content-center" type="submit" value="Submit" />
					</form>
				</div>

			</div>
			);
	}
}
export default VariableGenerate;