import React from 'react';
import { v4 } from 'uuid';
const PokemonStats = ({ stats }) => {
  return (
    <div className='stats'>
      {stats?.map((stat) => {
        return (
          <div className='stat-details' key={v4()}>
            <div className='stat-hp'>
              <p style={{ flex: '0.4', paddingBottom: '4px' }}>
                {stat?.stat?.name}
              </p>
              <div className='stat-progress-bar'>
                <div
                  style={{
                    backgroundColor: '#dc2626',
                    width: `${stat?.base_stat}px`,
                    zIndex: '100',
                    height: '6px',
                    borderRadius: '2px',
                  }}
                ></div>
              </div>
              <p
                style={{
                  flex: '0.3',
                  textAlign: 'right',
                  paddingBottom: '2px',
                }}
              >
                {stat?.base_stat}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonStats;
