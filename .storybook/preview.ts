import type { Preview } from "@storybook/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { darkTheme, lightTheme } from "../src/themes";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: lightTheme,
			dark: darkTheme,
		},
		defaultTheme: "dark",
		Provider: ThemeProvider,
		GlobalStyles: CssBaseline,
	}),
];

const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		expanded: true, // Adds the description and default columns
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export { decorators, parameters };
export default preview;
