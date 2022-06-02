import React, { useState } from 'react';
import EpisodeList from './Episode/EpisodeList';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodesList } from '../store/selectors';
import { fetchEpisodes } from '../store/reducers/episodesReducer';

function MainPage(props) {

	const episodes = useSelector(getEpisodesList);
	const [episodeList, setEpisodeList] = useState(null);
	return (
		<>
			<h1>
				Список эпизодов Breaking Bad
			</h1>
			<div>
				{
					episodeList
						? <EpisodeList
							episodeList={episodeList}
						/>
						: <LoadingPage
							episodeList={episodeList}
							setEpisodeList={setEpisodeList}
						/>
				}
			</div>
		</>
	);
};

export default MainPage;


function LoadingPage({ setEpisodeList, episodeList }) {

	const dispatch = useDispatch();

	const onGetEpisodesList = () => {
		dispatch(fetchEpisodes())
	};

	return (
		<div className={'MainPage'}>

			<button
				onClick={onGetEpisodesList}
			>
				Загрузить эпизоды
			</button>
		</div>
	);
};

