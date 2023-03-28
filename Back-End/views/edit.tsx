import React from 'react';
import Default from './layout/default';
import { Floral, FloralStyle } from '../types';

type EditProps = {
  florals: Floral;
  floralStyle: FloralStyle[];
};

function Edit({ florals, floralStyle }: EditProps): JSX.Element {
  return (
    <Default>
      <h2>Edit a Flower</h2>
      <form action={`/florals/${florals.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={florals.flower}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={florals.image}
        />
        <label htmlFor="floralStyle">Floral Style</label>
        <select
          name="floral style"
          id="floral style"
          defaultValue={florals.floralStyle}
        >
          {floralStyle.map((style) => (
            <option value={style.id} key={style.id}>
              {style.type}
            </option>
          ))}
        </select>
        <label htmlFor="inSeason">in Season?</label>
        <input
          type="checkbox"
          name="inSeason"
          id="inSeason"
          defaultChecked={florals.inSeason}
        />
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

export default Edit;

}


module.exports = Edit