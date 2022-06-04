import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import { getEpisodesList } from '../store/selectors';
import Header from './Episode/Header/Header';
import { LoadingEpisodes } from './Episode/LoadingEpisodes/LoadingEpisodes';
import EpisodeList from './Episode/EpisodeList';

function MainPage(props) {

	const episodes = useSelector(getEpisodesList);

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
						: <LoadingEpisodes />
				}
			</Container>
		</>
	);
};

export default MainPage;




