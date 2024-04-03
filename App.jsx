import React from 'react';
import Pokedex from './Pokedex';
import Search from './Search';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './index.css';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='App'>
				<header>
					<h1>Pokedex</h1>
					<nav>
						<ul>
							<li>
								<Link to='/'>Pokedex</Link>
							</li>
							<li>
								<Link to='/search'>Search</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Routes>
					<Route path='/' element={<Pokedex />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
