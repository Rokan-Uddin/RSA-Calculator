import React from 'react';
var msglist=[];
function mod( m, n )
{			
			return m - n*Math.floor(m/n)
}
function PowerMod(x,p,N)		
		// Compute x^p mod N
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
			demsg:[]
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
	}
	handleSubmit(event) {
		this.setState({
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
			<div className="container">
			<div className="row">{this.props.p},{this.props.q},{this.props.e},{this.props.d} </div>

			<form onSubmit={this.handleSubmit} >
			<input name="msg" placeholder="Enter Message" />
			<input type="submit" value="Submit" />
			</form>

			<div> {this.state.enmsg} </div>

			<form onSubmit={this.handleSubmit2} >
			<input name="msg" placeholder="Enter Message" />
			<input type="submit" value="Submit" />
			</form>

			<div> {this.state.demsg} </div>
			</div>
			);
	}
}
export default Message;