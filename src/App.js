import React, { useContext } from 'react';
import './App.css';
import MyProvider, { MyContext } from './MyContext';

function BigSquare() {
	const colors = ['blue', 'yellow'];
	const { bigSquareColor, setBigSquareColor } = useContext(MyContext);

	return (
		<div
			className='bigSquare'
			style={{ backgroundColor: bigSquareColor }}
			onClick={() =>
				setBigSquareColor(colors[Math.floor(Math.random() * 2)])
			}
		></div>
	);
}

function SmallSquare() {
	const colors = ['blue', 'yellow'];
	const { smallSquareColor, setSmallSquareColor } = useContext(MyContext);

	return (
		<div
			className='smallSquare'
			style={{ backgroundColor: smallSquareColor }}
			onClick={() =>
				setSmallSquareColor(colors[Math.floor(Math.random() * 2)])
			}
		></div>
	);
}

function App() {
	return (
		<div className='App'>
			<MyProvider>
				<BigSquare />
				<SmallSquare />
			</MyProvider>
		</div>
	);
}

export default App;
