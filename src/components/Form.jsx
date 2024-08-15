
import { useState } from 'react';
export default function MyForm() {
  const [formData, setFormData] = useState({ username: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك هنا استخدام بيانات النموذج formData
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} data-aos="zoom-in" className='flex flex-col items-center text-2xl gap-5 w-full sm:w-1/2 mb-10'>
        <input className='w-full pl-3 rounded-xl' type="text" name="username"  placeholder='UserName' value={formData.username} onChange={handleInputChange} />
        <input className='w-full pl-3 rounded-xl' type="email" name="email"  placeholder='UserEmail' value={formData.email} onChange={handleInputChange} />
        <textarea className='w-full pl-3 rounded-xl' name="" id="" rows={2} cols={20} placeholder='the massege' ></textarea>
      <button type="submit" className='bg-green-500 w-1/2 rounded-xl'>Submit</button>
    </form>
  );
}