import { PokeMoveCard } from "./PokeMoveCard"
import moves from "./data";

const PokeMoves = () => {
    return (
      <div>
        <h1>PokeMoves</h1>
        <ul>
          {moves.map(item => (
            /*for each item, create a li with key = item.id and props destructed from the item.params*/
            <PokeMoveCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    );
  };

  export default PokeMoves;
