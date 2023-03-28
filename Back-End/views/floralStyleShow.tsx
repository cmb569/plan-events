import React from 'react';
import Default from './layouts/Default';
import { FloralStyle } from '../types';

interface Props {
  floralStyle: FloralStyle;
}

function Show ({floralStyle}: Props) {
    return (
      <Default>
          <h3>{floralStyle.type}</h3>
          <ul>
              {floralStyle.florals.map((florals)=> {
                  return (
                      <li key={florals.id}>
                          {florals.flower_type}
                      </li>
                  )
              })}
          </ul>
          <form action={`/florals/${florals.id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>
      </Default>
    )
}

export default Show;
