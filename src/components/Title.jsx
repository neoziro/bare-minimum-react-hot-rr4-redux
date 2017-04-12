import React from 'react';

let Title = ({title, show = true, className}) => {
    if (!title || !show) {
        return null;
    }
    return <div>
			<h1> { title } { ' - my other string!' } </h1>
			<h3>subtitle</h3>
		</div>
};

export default Title;
