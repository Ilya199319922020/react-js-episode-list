import React, { useState } from 'react'
import { EpisodeElement } from './EpisodeElement';

function EpisodeList({ episodeList }) {

	const episodeElement = episodeList
		.map(p => <EpisodeElement
			key={p.episode_id}
			episode={p.episode}
			characters={p.characters}
		/>
		);

	return (
		<div>
			<div>
				<button>
					Сортировать по убыванию количества персонажей
				</button>
				<button>
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



