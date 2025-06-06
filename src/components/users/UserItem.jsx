import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({ user }) {
  return (
    <div key={user.id} className="card bg-base-100 shadow-xl">
      <figure>
        <img src={user.avatar_url} alt={user.login} className="rounded" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{user.login}</h2>
        <Link to={`/user/${user.login}`} className="btn btn-primary btn-sm">
          View Profile
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
