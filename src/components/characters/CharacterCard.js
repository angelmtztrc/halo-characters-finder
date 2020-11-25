import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  // object destructuring
  const { id, name, image, rank, specie } = character;

  return (
    <Link
      className="relative w-full font-mono rounded-lg shadow-lg overflow-hidden scale-150"
      to={`/character/${id}`}
    >
      <img
        src={image}
        style={{ filter: 'brightness(60%)' }}
        className="relative max-w-full rounded-lg transform hover:scale-125 transition-transform duration-300 ease-in-out"
        alt={name}
      />
      <div className="absolute left-0 top-0 p-4">
        <p className="text-white text-xl font-bold uppercase">{name}</p>
        <p className="text-gray-200 text-xs font-bold uppercase">{rank}</p>
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <p className="text-white text-base font-bold uppercase">- {specie}</p>
      </div>
    </Link>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterCard;
