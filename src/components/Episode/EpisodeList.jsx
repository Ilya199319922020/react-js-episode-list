import React, { useEffect, useState } from 'react';
import { EpisodeElement } from './EpisodeElement';
import { Card, Grid, CardActions, Button } from '@mui/material';

function EpisodeList({ episodes }) {
	const [sortEpisodes, setSortEpisodes] = useState([]);
	

	useEffect(() => {
		setSortEpisodes(episodes)
	}, [episodes]);

	const episodeElement = sortEpisodes
		.map(p => <EpisodeElement
			key={p.episode_id}
			episode={p.episode}
			episode_id={p.episode_id}
			characters={p.characters}
		/>
		);

	const handleDescendingSort = () => {
		const sorted = [...sortEpisodes]
			.sort((a, b) => (b.characters.length - a.characters.length));
		setSortEpisodes(sorted);
	};

	const handleAscendingSort = () => {
		const sorted = [...sortEpisodes]
			.sort((a, b) => (a.characters.length - b.characters.length));
		setSortEpisodes(sorted);
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
					onClick={handleDescendingSort}
				>
					Сортировать по убыванию количества персонажей
				</Button>
				<Button
					size="small"
					sx={{
						fontSize: 10
					}}
					variant="contained"
					onClick={handleAscendingSort}
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



