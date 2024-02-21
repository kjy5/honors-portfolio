import { Box, Container, Stack, Typography } from "@mui/material";

/**
 * Portfolio base component.
 * @constructor
 */
function App() {
	return (
		<Box sx={{ m: 2 }}>
			<Container>
				<Stack spacing={1}>
					<Typography variant={"h1"}>👋 Hello!</Typography>
					<Typography variant={"h2"}>
						Welcome and thanks for visiting my honors portfolio website!
					</Typography>
					<Typography variant={"body1"}>
						The website is currently being updated. Feel free to scroll around
						and see the current progress, or come back later when it&apos;s all
						done!
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}

export default App;
