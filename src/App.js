import React from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import ValidatedLoginForm from './ValidateLoginForm';

const API_key = '5195eaba05e1153f83b660216fde9abb';
const city_name = 'Belgrade';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			city: undefined,
			country: undefined,
			celsius: undefined,
			temp_max: undefined,
			temp_min: undefined,
			description: '',
			error: false,
		};
		this.getWeather();
	}

	calCelsius (temp) {
		let cell = Math.floor(temp - 273.15);
		return cell;
	}

	getWeather = async () => {
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`,
		);

		const response = await api_call.json();

		console.log(response);

		this.setState({
			city: response.name,
			country: response.sys.country,
			celsius: this.calCelsius(response.main.temp),
			temp_max: this.calCelsius(response.main.temp),
			temp_min: this.calCelsius(response.main.temp),
			description: response.weather[0].description,
		});
	};

	render () {
		return (
			<div className="App">
				<ValidatedLoginForm />

				<Weather
					city={this.state.city}
					country={this.state.country}
					temp_celsius={this.state.celsius}
					temp_max={this.state.temp_max}
					temp_min={this.state.temp_min}
					description={this.state.description}
				/>
			</div>
		);
	}
}

export default App;
