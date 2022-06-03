import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEpisode } from "../../store/reducers/episodesReducer";

export function EpisodeElement({ episode_id, characters, episode }) {
	const [charactersCounter, setCharactersCounter] = useState(0);
	const dispatch = useDispatch();

	const onRemoveEpisode = () => {
		dispatch(deleteEpisode(episode_id))
	};

	const handleClick = () => {
		setCharactersCounter(
		);
	};

	return (
		<div>

			<div>
				<span>
					Эпизод №{episode}
				</span>
				<div>
					<button
						onClick={handleClick}
					>
						-
					</button>
					<span>
						{characters.length - 1}
					</span>
					<button
						onClick={handleClick}
					>
						+
					</button>
					<span>
						Персонаж{
							charactersCounter > 0
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