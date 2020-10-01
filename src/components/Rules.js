import React from 'react';
function Rules() {
	return(
		<div clasName="container">
		<h1 className="text-center mt-3">Key Generation</h1>
		<div className="mt-3 row justify-content-center">
		<ul className="col-11 col-sm-6 list-group justify-content-center">
		  <li className="list-group-item"><h4>1. Choose two different large prime number P & Q.</h4></li>
		  <li className="list-group-item"><h4>2. Calculate n=P*Q</h4></li>
		  <li className="list-group-item"><h4>3. Calculate &Phi;(n) = (P-1)*(Q-1).</h4></li>
		  <li className="list-group-item"><h4>4. Choose 'e' Such that &Phi;(n)>e>1 <br />and e must be co-prime to &Phi;(n); GCD(e,&Phi;(n) )=1.</h4></li>
		  <li className="list-group-item"><h4>5. Calculate 'd' such that (de) =1 mod &Phi;(n) <br />and d must be co-prime to &Phi;(n); GCD(d,&Phi;(n) )=1.  </h4></li>
		  <li className="list-group-item"><h4>6. Public Key 'e' and private Key 'd' .</h4></li>

		</ul>
		</div>

		<h1 className="text-center mt-5 mb-4">Message Encrypt/Decrypt using e and d</h1>
		<div className="mb-5 mt-2 row justify-content-center">
		<ul className="col-11 col-sm-6 list-group justify-content-center">
		  <li className="list-group-item"><h4>1. Send Message</h4></li>
		  <li className="list-group-item"><h4>2. Cyper=(Message)<sup>e</sup> mod N</h4></li>
		  <li className="list-group-item"><h4>3. Message=(Cyper)<sup>d</sup> mod N</h4></li>
		  <li className="list-group-item"><h4>4. Message Received</h4></li>

		</ul>
		</div>
		</div>
		)

}
export default Rules;