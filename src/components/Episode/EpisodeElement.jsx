import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEpisode } from "../../store/reducers/episodesReducer";
import { Card, Grid, CardContent, Typography, CardActions, Button } from '@mui/material';


export function EpisodeElement({ episode_id, characters, episode }) {
	const [charactersCounter, setCharactersCounter] = useState(characters.length);
	const dispatch = useDispatch();

	const onRemoveEpisode = () => {
		dispatch(deleteEpisode(episode_id))
	};

	const handleDecreaseClick = () => {
		if (charactersCounter > 1) {
			setCharactersCounter(prev => prev - 1)
		}
	};
	const handleIncreaseClick = () => {
		if (charactersCounter < characters.length) {
			setCharactersCounter(charactersCounter + 1)
		}
	};

	return (
		<Grid
			item
			sx={{
				display: "flex"
			}}
		>
			<Card>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography
						variant="h6"
						component={"span"}
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						Эпизод №{episode}
					</Typography>
					<CardActions
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Button
							sx={{
								maxWidth: "30px",
								maxHeight: "20px",
							}}
							variant="outlined"
							onClick={handleDecreaseClick}
						>
							-
						</Button>
					</CardActions>

					<Typography
						variant="h7"
						component={"span"}
						textAlign="center"
					>
						{charactersCounter} персонаж{
							charactersCounter > 1
								? 'ей'
								: ''
						}
					</Typography>
					<CardActions
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Button
							sx={{
								maxWidth: "30px",
								maxHeight: "20px",
							}}
							variant="outlined"
							onClick={handleIncreaseClick}
						>
							+
						</Button>
					</CardActions>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						onClick={onRemoveEpisode}
					>
						Удалить
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};