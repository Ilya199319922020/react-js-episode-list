import React, { useState } from 'react';
import EpisodeList from './Episode/EpisodeList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../store/reducers/episodesReducer';
import { getEpisodesList, getSortDeependingCharacters, getSortAscendingCharacters } from '../store/selectors';


function MainPage(props) {
	const dispatch = useDispatch();

	const [isDeependingSorting, setDeependingIsSorting] = useState(false);
	const [isAscendingSorting, setAscendingIsSorting] = useState(false);

	const onGetEpisodesList = () => {
		dispatch(fetchEpisodes())
	};

	const episodes = useSelector(isDeependingSorting
		? getSortDeependingCharacters
		: isAscendingSorting ? getSortAscendingCharacters
			: getEpisodesList
	);

	return (
		<>
			<h1>
				Список эпизодов Breaking Bad
			</h1>
			<div>
				{
					episodes.length > 0
						? <EpisodeList
							setDeependingIsSorting={setDeependingIsSorting}
							setAscendingIsSorting={setAscendingIsSorting}
							episodes={episodes}
						/>
						: <div>
							<button
								onClick={onGetEpisodesList}
							>
								Загрузить эпизоды
							</button>
						</div>
				}
			</div>
		</>
	);
};

export default MainPage;




