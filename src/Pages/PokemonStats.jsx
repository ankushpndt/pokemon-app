import React from "react";
import { v4 } from "uuid";
const PokemonStats = ({ stats }) => {
	return (
		<div className="stats">
			{stats?.map((stat) => {
				return (
					<div className="stat-details" key={v4()}>
						<div className="stat-hp">
							<p>{stat?.stat?.name}</p>
							<div className="stat-progress-bar"></div>
							<p>{stat?.base_stat}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PokemonStats;
