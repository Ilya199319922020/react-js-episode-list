import { useDispatch } from "react-redux";
import { fetchEpisodes } from "../../../store/reducers/episodesReducer";
import { Card, Button } from '@mui/material';

export function LoadingEpisodes(props) {

	const dispatch = useDispatch();

	const onGetEpisodesList = () => {
		dispatch(fetchEpisodes())
	};

	return (
		<Card
			sx={{
				height: "300px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Button
				variant="contained"
				onClick={onGetEpisodesList}
			>
				Загрузить эпизоды
			</Button>
		</Card>
	);
};