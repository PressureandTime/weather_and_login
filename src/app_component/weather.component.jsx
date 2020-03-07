import React from 'react';

function Weather (props){
	return (
		<div className="container">
			<div className="cards">
				<h1>
					{props.city}, {props.country}
				</h1>
			</div>
			<div>{props.temp_celsius} degrees</div>
			<div>{minmaxTemp(props.temp_min, props.temp_max)}</div>
			<div>{props.description}</div>
		</div>
	);
}

function minmaxTemp (min, max){
	return (
		<h3>
			<span>{min} </span>
			<span>{max} </span>
		</h3>
	);
}

export default Weather;
