import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header(props) {
	return (
		<AppBar
			position='static'
		>
			<Toolbar
			>
				<Typography
					variant='h5'
					component={'span'}
					sx={{
						flexGrow: 1,
						width: '500px',
					}}
					textAlign="center"
				>
					Список эпизодов Breaking Bad
				</Typography>
			</Toolbar>
		</AppBar>
	)
};

export default Header;


