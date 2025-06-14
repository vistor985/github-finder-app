import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <Link to="/" className="btn btn-primary btn-lg">
          <FaHome className="mr-2" />
          Back To Home
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
