// src/ListResults.js
import PropTypes from 'prop-types';

const ListResults = ({ Results }) => {
  return (
    <div>
      {Results.map((result) => (
        <div key={result.id}>
          <h4>{`${result.first_name} ${result.last_name}`}</h4>
          <p>{result.email}</p>
          <img src={result.avatar} alt={`${result.first_name} avatar`} width="80" />
        </div>
      ))}
    </div>
  );
};

ListResults.propTypes = {
  Results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListResults;
