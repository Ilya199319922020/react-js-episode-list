import { useDispatch } from "react-redux";
import { fetchEpisodes } from "../../store/reducers/episodesReducer";

export function LoadingEpisodes(props) {

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