import React, { useEffect, useState } from 'react';
import { EpisodeElement } from './EpisodeElement';
import { Card, Grid, CardActions, Button } from '@mui/material';

function EpisodeList({ episodes }) {

	const [sortEpisodes, setSortEpisodes] = useState([]);
	const [isSort, setIsSort] = useState(true);

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

	const handleSort = () => {
		if (isSort) {
			const sorted = sortEpisodes
				.sort((a, b) => (b.characters.length - a.characters.length));
			setSortEpisodes(sorted);
			setIsSort(!isSort);
		} else {
			const sorted = sortEpisodes
				.sort((a, b) => (a.characters.length - b.characters.length));
			setSortEpisodes(sorted);
			setIsSort(!isSort);
		}
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
					onClick={handleSort}
				>
					Сортировать по убыванию количества персонажей
				</Button>
				<Button
					size="small"
					sx={{
						fontSize: 10
					}}
					variant="contained"
					onClick={handleSort}
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



