import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex justify-center p-2 gap-4 text-xl'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add-data'>Add Data</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
