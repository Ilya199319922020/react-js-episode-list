import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEpisode } from "../../store/reducers/episodesReducer";

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
		<div>
			<div>
				<span>
					Эпизод №{episode}
				</span>
				<div>
					<button
						onClick={handleDecreaseClick}
					>
						-
					</button>
					<span>
						{charactersCounter}
					</span>
					<button
						onClick={handleIncreaseClick}
					>
						+
					</button>
					<span>
						Персонаж{
							charactersCounter > 1
								? 'ей'
								: ''
						}
					</span>
				</div>
			</div>
			<div>
				<button
					onClick={onRemoveEpisode}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};