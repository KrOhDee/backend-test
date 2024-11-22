import FormData from '../types/interfaces';

const Card: React.FC<FormData> = ({ firstName, lastName, email, gender }) => {
  return (
    <div className='border border-black rounded-md p-6'>
      <h2>
        Name: {firstName} {lastName}
      </h2>
      <p>Email: {email}</p>
      <p>Gender: {gender === 'M' ? 'Male' : 'Female'}</p>
    </div>
  );
};

export default Card;
