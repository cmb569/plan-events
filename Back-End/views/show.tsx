import React from "react";
import Default from "./layout/default";

type FloralsProps = {
  florals: {
    id: number;
    flower: string;
    inSeason: boolean;
    image: string;
  };
};

function Show({ florals }: FloralsProps) {
  return (
    <Default>
      <h3>{florals.flower}</h3>
      <p>
        and it is
        {florals.inSeason ? <span>  </span> : <span> is NOT </span>}
        in season.
      </p>
      <img src={florals.image} alt={florals.flower} />
      {/* <p>{bread.getBakedBy()}</p> */}
      <a href={`/florals/${florals.id}/edit`}>
        <button>Edit</button>
      </a>
      <form action={`florals/${florals.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
      <li>
        <a href="/florals">Go Back To The DataBase</a>
      </li>
    </Default>
  );
}

export default Show;
