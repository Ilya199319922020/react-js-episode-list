import React from 'react';
import { EpisodeElement } from './EpisodeElement';
import { Card, Grid, CardActions, Button } from '@mui/material';

function EpisodeList({ episodes, setDeependingIsSorting, setAscendingIsSorting }) {

	const episodeElement = episodes
		.map(p => <EpisodeElement
			key={p.episode_id}
			episode={p.episode}
			episode_id={p.episode_id}
			characters={p.characters}
		/>
		);
	const onSortDeependingCharacters = () => {
		setAscendingIsSorting(false)
		setDeependingIsSorting(true)
	};
	const onSortAscendingCharacters = () => {
		setDeependingIsSorting(false)
		setAscendingIsSorting(true)
	};

	return (
		<Card>
			<CardActions
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button
					size="small"
					sx={{
						fontSize: 10
					}}
					variant="contained"
					onClick={onSortDeependingCharacters}
				>
					Сортировать по убыванию количества персонажей
				</Button>
				<Button
					size="small"
					sx={{
						fontSize: 10
					}}
					variant="contained"
					onClick={onSortAscendingCharacters}
				>
					Сортировать по возрастанию количества персонажей
				</Button>
			</CardActions>
			<Grid
				container
				spacing={4}
				sx={{
					mb: "1rem",
					mt: "0.5rem",
					justifyContent: "center",
				}}
			>
				{episodeElement}
			</Grid>
		</Card>
	);
};

export default EpisodeList;



