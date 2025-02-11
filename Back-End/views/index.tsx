import React from 'react';
import Default from './layout/default';

interface Props {
  florals: { id: number; flower: string }[];
  floralStyle: { id: number; name: string }[];
  title: string;
}

function Index({ florals, floralStyle, title }: Props): JSX.Element {
  return (
    <Default title={title}>
      <h2>Vendor DataBase Page</h2>

      {/* <h3>Floral Style</h3>
      <ul>
        {floralStyle.map((floralStyle) => {
          return (
            <li key={floralStyle.id}>
              <a href={`/florals/${floralStyle.id}`}>{floralStyle.name}</a>
            </li>
          );
        })}
      </ul>  */}

      <h3>Florals</h3>
      <div className="newButton">
        <a href="/florals/new">
          <button>Add New Flower</button>
        </a>
      </div>
      <ul>
        {florals.map((florals, index) => {
          //{console.log(florals)}
          return (
            <li key={index}>
              <a href={`/florals/${florals.id}`}>{florals.flower}</a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

export default Index;
