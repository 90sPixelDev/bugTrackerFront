import { createContext, ReactNode, useEffect, useState } from 'react';

type Props = {
	children?: ReactNode;
};

interface Theme {
	isDarkMode: boolean | null;
	setTheme: () => void;
}

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ children }: Props) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

	const setTheme = () => {
		if (isDarkMode === false) {
			localStorage.setItem('isDarkMode', 'true');
			setIsDarkMode(true);
		} else {
			localStorage.setItem('isDarkMode', 'false');
			setIsDarkMode(false);
		}
	};

	useEffect(() => {
		const setTheThemeMode = () => {
			const localTheme = window.localStorage.getItem('isDarkMode');
			switch (localTheme) {
				case 'true':
					setIsDarkMode(true);
					document
						.querySelector('body')
						?.setAttribute('data-theme', 'dark');
					break;
				case 'false':
					setIsDarkMode(false);
					document
						.querySelector('body')
						?.setAttribute('data-theme', 'light');
					break;
				default:
					setTheme();
					document
						.querySelector('body')
						?.setAttribute('data-theme', 'light');
					break;
			}
		};

		return setTheThemeMode();
	}, [isDarkMode]);

	return (
		<ThemeContext.Provider value={{ isDarkMode, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
