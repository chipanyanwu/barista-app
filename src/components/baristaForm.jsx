import React, {Component, useState} from "react";

const BaristaForm = () => {
	const [inputs, setInputs] = useState({
		'temperature': '',
		'milk': '',
		'syrup': '',
		'blended': ''
	});

	const ingredients = {
		'temperature' : ['hot', 'lukewarm', 'cold'],
		
		'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
		
		'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
		
		'blended': ['yes', 'turbo', 'no']
	}

	const onNewDrink = () => {
		console.log("new drink")
	}

	const onCheckAnswer = () => {
		console.log("check answer")
	}

	return (
		<div>
			<form >
				// we will fill this in soon!
			</form>

			<button type="submit" className="button submit" onClick={onCheckAnswer}>
				Check Answer
			</button>

			<button
				type="new-drink-button"
				className="button newdrink"
				onClick={onNewDrink}
			>
				New Drink
			</button>
		</div>
	);
};

export default BaristaForm;