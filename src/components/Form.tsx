import { useState } from 'react';
import FormData from '../types/interfaces';

const Form = () => {
  const initialState: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    gender: 'M',
  };

  const [formData, setFormData] = useState<FormData>(initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted');

    setFormData(initialState);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <p className='text-center text-6xl mb-16 mt-5'>Test Data Form</p>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor='gender'>Gender</label>
        <select name='gender' value={formData.gender} onChange={handleChange}>
          <option value='M'>Male</option>
          <option value='F'>Female</option>
        </select>
        <button
          className='border rounded-md p-1 border-black w-fit place-self-center'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
