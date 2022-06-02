import * as axios from 'axios';

const intance = axios.create({
	baseURL: 'https://breakingbadapi.com/api/episodes',
});

export const EpisodesApi = {
	getEpisodes() {
		return intance.get('');
	},
};

