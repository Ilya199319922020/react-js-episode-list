import React from 'react';
import Header from './Episode/Header/Header';
import EpisodeList from './Episode/EpisodeList';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import { getEpisodesList } from '../store/selectors';
import { LoadingEpisodes } from './Episode/LoadingEpisodes/LoadingEpisodes';
import { fetchEpisodes } from '../store/reducers/episodesReducer';

function MainPage(props) {
	const dispatch = useDispatch();
	const episodes = useSelector(getEpisodesList);

	const onGetEpisodesList = () => {
		dispatch(fetchEpisodes())
	};

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
							episodes={episodes}
						/>
						: <LoadingEpisodes
							onGetEpisodesList={onGetEpisodesList}
						/>
				}
			</Container>
		</>
	);
};

export default MainPage;




