import React from 'react';
class Message extends React.Component {
	constructor(props){
		super(props);
		this.state={
			msg:'',
			enmsg:'',
			demsg:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
	}
	handleSubmit(event) {
		this.setState({
			enmsg:((Math.pow(event.target.msg.value,this.props.e))%(this.props.n))
		})
		event.preventDefault();
	}
		handleSubmit2(event) {
		this.setState({
			demsg:((Math.pow(event.target.msg.value,this.props.d))%(this.props.n))
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