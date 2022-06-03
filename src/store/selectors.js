import { createSelector } from 'reselect';

export const getEpisodesList = (state) => {
	return state.episodes.episodes;
};

export const getSortDeependingCharacters = createSelector([getEpisodesList], (episodes) => {
	return episodes
		.sort((a, b) => (b.characters.length - a.characters.length));
}
);

export const getSortAscendingCharacters = createSelector([getEpisodesList], (episodes) => {
	return episodes
		.sort((a, b) => (a.characters.length - b.characters.length));
}
);