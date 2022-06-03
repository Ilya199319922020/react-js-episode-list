import { useState } from "react";

export function EpisodeElement({ episode, characters }) {
	const [charactersCounter, setCharactersCounter] = useState(0);

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
						{characters.length}
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
				<button>
					Удалить
				</button>
			</div>
		</div>
	);
};