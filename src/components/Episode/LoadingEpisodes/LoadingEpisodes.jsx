import { Card, Button } from '@mui/material';

export function LoadingEpisodes({ onGetEpisodesList }) {

	return (
		<Card
			sx={{
				height: "300px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Button
				variant="contained"
				onClick={onGetEpisodesList}
			>
				Загрузить эпизоды
			</Button>
		</Card>
	);
};