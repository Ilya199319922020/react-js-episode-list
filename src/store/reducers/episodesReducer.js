import { EpisodesApi } from "../../api/api";

const FETCH_EPISODES = 'FETCH_EPISODES';

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
		default:
			return state;
	}
};

const actions = {
	setFetchEpisodes: (episodes) => ({ type: FETCH_EPISODES, episodes }),
};

export const fetchEpisodes = () => {
	return async (dispatch) => {
		const response = await EpisodesApi.getEpisodes()
		if (response.status === 200) {
			dispatch(actions.setFetchEpisodes(response.data));
		}
	}
};

export default episodesReducer;