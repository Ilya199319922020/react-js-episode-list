import { EpisodesApi } from "../../api/api";

const FETCH_EPISODES = 'FETCH_EPISODES';
const DELETE_EPISODE = 'DELETE_EPISODE';

const initialState = {
	episodes: [],
};

const episodesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_EPISODES:
			return {
				...state,
				episodes: action.episodes,
			}
		case DELETE_EPISODE: {
			return {
				...state,
				episodes: state.episodes
					.filter(item => action.id !== item.episode_id)
			}
		}
		default:
			return state;
	}
};

const actions = {
	setFetchEpisodes: (episodes) => ({ type: FETCH_EPISODES, episodes }),
	deleteEpisodeId: (id) => ({ type: DELETE_EPISODE, id }),
};

export const fetchEpisodes = () => {
	return async (dispatch) => {
		const response = await EpisodesApi.getEpisodes()
		if (response.status === 200) {
			dispatch(actions.setFetchEpisodes(response.data));
		}
	}
};

export const deleteEpisode = (id) => {
	return async (dispatch) => {
		dispatch(actions.deleteEpisodeId(id));
	}
};

export default episodesReducer;