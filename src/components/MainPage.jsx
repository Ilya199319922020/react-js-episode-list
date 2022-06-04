import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../store/reducers/episodesReducer';
import { Container } from '@mui/material';
import { getEpisodesList, getSortDeependingCharacters, getSortAscendingCharacters } from '../store/selectors';
import Header from './Episode/Header/Header';
import { LoadingEpisodes } from './Episode/LoadingEpisodes/LoadingEpisodes';
import EpisodeList from './Episode/EpisodeList';

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
			<Header />
			<Container
				sx={{
					width: '800px',
					mt: '30px',
					pb: '30px',
				}}
			>
				{
					episodes.length > 0
						?
						<EpisodeList
							setDeependingIsSorting={setDeependingIsSorting}
							setAscendingIsSorting={setAscendingIsSorting}
							episodes={episodes}
						/>
						: <LoadingEpisodes />
				}
			</Container>
		</>
	);
};

export default MainPage;




