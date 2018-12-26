import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css';

const SubNavigation = props => (
	<div class="submenu">
		<div class="container narrow">
			<ul class="nav">
				<li class="nav-item">
						<Link to="/" class="nav-link active">Home</Link>
					</li>
					<li class="nav-item">
						<Link to="/aboutus" class="nav-link">Why SitnWins?</Link>
					</li>
					<li class="nav-item">
						<Link to="/payment" class="nav-link">Payment Options</Link>
					</li>
			</ul>
		</div>
	</div>
)

export default SubNavigation;