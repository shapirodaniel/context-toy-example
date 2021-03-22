import React, { useState, useMemo } from 'react';

export const MyContext = React.createContext();

// { children } = props
export default function MyProvider(props) {
	const [bigSquareColor, setBigSquareColor] = useState('');
	const [smallSquareColor, setSmallSquareColor] = useState('');

	const providerValue = useMemo(() => {
		return {
			bigSquareColor,
			setBigSquareColor,
			smallSquareColor,
			setSmallSquareColor,
		};
	}, [bigSquareColor, smallSquareColor]);

	return (
		<MyContext.Provider value={providerValue}>
			{props.children}
		</MyContext.Provider>
	);
}
