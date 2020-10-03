import React from 'react';
var msglist=[];
function mod( m, n )
{			
			return m - n*Math.floor(m/n)
}
function PowerMod(x,p,N)		
		{
			msglist=[];
			for(var i=0;i<x.length;i++) {
				 	var k=0,r=0;
					var A = 1
					var m = p
					var t = x.charCodeAt(i)			
			while( m > 0 )
			{
						k = Math.floor( m/2 )
						r = m - 2*k
						if( r === 1 )
							A = mod( A*t, N )
						t = mod( t*t, N )
					m = k
			}			
			msglist.push(String.fromCharCode(A));
			}
			return msglist;
}
class Message extends React.Component {
	constructor(props){
		super(props);
		this.state={
			msg:[],
			enmsg:[],
			demsg:[],
			demsgvalue:[]
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
	}
	warning(event) {
		if(event===0) {
			return <h5 className="text-center bg-danger m-4 p-3"> Encrypt/Decrypt isn't working without perfect value of p,q,e,d </h5>
		}
		if(this.state.enmsg.length>0 && this.state.demsg.length>0 && this.state.demsg[0] !== this.state.msg[0] )
		{
			return <h5 className="text-center bg-danger m-4 p-3">Not working.Please change the value of p,q. These are too much large </h5>
		}
		
	}
	handleSubmit(event) {
		this.setState({
			msg:event.target.msg.value,
			enmsg:(PowerMod(event.target.msg.value,this.props.e,this.props.n)),
		})	
	event.preventDefault();
	}
	handleSubmit2(event) {

		this.setState({
			demsg:(PowerMod(event.target.msg.value,this.props.d,this.props.n))
	})
	event.preventDefault();
	}
	render() { 
		return(
			<div className="container mt-5">
			<h1 className="text-center mt-3">Send/Receive Message </h1>
			<h5 className="text-center">Using these value : </h5>
			<div className="row justify-content-center text-center m-4">
			 <div className="col-6 col-sm-4 card p-3"><h3>n : {this.props.n} </h3></div>
			<div className="col-6 col-sm-4 card p-3"><h3>e : {this.props.e} </h3></div>
			<div className="col-6 col-sm-4 card p-3"><h3>d : {this.props.d} </h3></div>
			</div>

			{this.warning(this.props.e)}

			<div className="row justify-content-center m-4 mt-5">
				<div className="col-12 col-sm-6 card" >
					<form className="row justify-content-center" onSubmit={this.handleSubmit} >
						<input className="col-12 col-sm-9 p-3 text-center"  name="msg" placeholder="Enter Message" />
						<input className="col-12 col-sm-3 p-3" type="submit" value="Encrypt" />
					</form>
					<div className="row ml-2 mt-5">
						 <label>Encrypted Message: <div>{this.state.enmsg} </div> </label>
						
					 </div>
				 </div>
			</div>
			<div className="row justify-content-center m-4 mt-5">
							<div className="col-12 col-sm-6 card ">
					<form className=" row justify-content-center" onSubmit={this.handleSubmit2} >
						<input className="col-12 col-sm-9 p-3 text-center" name="msg" placeholder="Enter Encrypted Message" />
						<input className="col-12 col-sm-3 p-3" type="submit" value="Decrypt" />
					</form>
					<div className="row ml-2 mt-5">
						<label>Decrypted Message: <div><h3> {this.state.demsg} </h3></div> </label>
					</div>			
				</div>
			</div>
			<warning />
			</div>
			);
	}
}
export default Message;