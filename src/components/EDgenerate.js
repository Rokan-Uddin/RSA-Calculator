import React from 'react';
function EDgenerate(props) {
	return(
		<div className="container">
			<div className="row  justify-content-center">
			<form onSubmit={props.handleSubmit}>
				<label>P:<input className="ml-2" name="p" /></label>
				<label>Q:<input className="ml-2" name="q" /></label>
				<input className="ml-2" type="submit" value="Submit" />
			</form>
			</div>

			<div className=" row justify-content-center">
			<p> N: {props.n}</p>
			</div>
			<div className=" row justify-content-center">
			<p> r: {props.r}</p>
			</div>

			<div className="row">
			Enter a value for e--
			{props.array}
			</div>
			<div className="row">
			<form onSubmit={props.handleSubmit2}>
			<label> E: <input name="e" /> </label>
			<input type="submit" value="Submit" />
			</form>
			</div>
			<div className="row"> {props.d}  </div>
		</div>
		);
}
export default EDgenerate;