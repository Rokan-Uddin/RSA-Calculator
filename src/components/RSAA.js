import React from 'react';
function RSAA(props) {
	return(
		<div className="container">
			<div className="row">
			<form onSubmit={props.handleSubmit2}>
			<label> E: <input name="e" /> </label>
			<input type="submit" value="Submit" />
			</form>
			</div>
			<div className="row"> {props.e}  </div>
		</div>
		);
}
export default RSAA;