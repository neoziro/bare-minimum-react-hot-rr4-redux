import React from 'react';
import DecrementContainer from './DecrementContainer';

const Increment = ({increment, state}) => {
	return <div>
		<h2>Counter</h2>
		<button onClick={increment}>Increment</button>
		<DecrementContainer />
		<p>counter state: {state}</p>
	</div>
}

export default Increment
