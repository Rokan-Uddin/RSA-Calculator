import React from 'react';
class EDgenerate extends React.Component  {

	render() { 
	return(
		<div className="container">
			<div className="row  justify-content-center">
			<form onSubmit={this.props.handleSubmit}>
				<label>P:<input className="ml-2" name="p" /></label>
				<label>Q:<input className="ml-2" name="q" /></label>
				<input className="ml-2" type="submit" value="Submit" />
			</form>
			</div>

			<div className=" row justify-content-center">
			<p> N: {this.props.n}</p>
			</div>
			<div className=" row justify-content-center">
			<p> r: {this.props.r}</p>
			</div>
			<div className="card">
			{this.props.array}
			</div>
			<div className="row">
			<form onSubmit={this.props.handleSubmit2}>
			<label> E: <input name="e" /> </label>
			<input type="submit" value="Submit" />
			</form>
			</div>
			<div className="row"> {this.props.d}  </div>
		</div>
		);
 }
}
export default EDgenerate;