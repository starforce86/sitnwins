import React from 'react';
import { Link} from 'react-router-dom';
import './Top.css';

export default class Navigation extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			curPage: 'home'
		}
	}

	handleClick = (selected) => {
		this.setState({
			curPage: selected,
		})
	}
	render () {
		return (
			<div class="nav-menu">
				<nav class="navbar-expand-lgnavbar-light container narrow">
					<ul class="nav">
						<li class="nav-item">
							<Link to="/" class={(this.state.curPage === 'home') ? "nav-link active" : "nav-link"} onClick={ this.handleClick.bind(this, 'home') }>Home</Link>
						</li>
						<li class="nav-item">
							<Link to="/privatecontests" class={(this.state.curPage === 'privatecontests') ? "nav-link active" : "nav-link"} onClick={ this.handleClick.bind(this, 'privatecontests') }>Private Contests</Link>
						</li>
						<li class="nav-item">
							<Link to="/livescores" class="nav-link">Livescores</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
} 