import React, { useState } from 'react';
import EpisodeList from './Episode/EpisodeList';
import * as axios from 'axios';

function MainPage(props) {
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
							setEpisodeList={setEpisodeList}
						/>
				}
			</div>
		</>
	);
};

export default MainPage;


function LoadingPage({ setEpisodeList }) {

	const onGetEpisodesList = () => {
		axios.get('https://breakingbadapi.com/api/episodes')
			.then((response) => {
				console.log(response.data)
				setEpisodeList(response.data)
			}
			);
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

