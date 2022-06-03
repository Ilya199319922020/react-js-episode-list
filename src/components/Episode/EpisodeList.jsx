import React from 'react'
import { EpisodeElement } from './EpisodeElement';

function EpisodeList({ episodes, setDeependingIsSorting,setAscendingIsSorting}) {

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
		<div>
			<div>
				<button
					onClick={onSortDeependingCharacters}
				>
					Сортировать по убыванию количества персонажей
				</button>
				<button
					onClick={onSortAscendingCharacters}
				>
					Сортировать по возрастанию количества персонажей
				</button>
			</div>
			<div>
				{episodeElement}
			</div>
		</div>
	);
};

export default EpisodeList;



