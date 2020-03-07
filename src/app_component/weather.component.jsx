import React from 'react';

function Weather (props){
	return (
		<div className="container">
			<div className="cards">
				<h1>
					{props.city}, {props.country}
				</h1>
			</div>
			<p>{props.temp_celsius} degrees</p>
			<div>{minmaxTemp(props.temp_min, props.temp_max)}</div>
			<p>{props.description}</p>
		</div>
	);
}

function minmaxTemp (min, max){
	return (
		<h3>
			<span>Max temp: {min} </span><br/>
			<span>Min temp: {max} </span>
		</h3>
	);
}

export default Weather;
