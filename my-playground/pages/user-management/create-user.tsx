import { useForm, SubmitHandler } from 'react-hook-form';
import Navbar from '../../components/Navbar';
import SubmitButton from '../../components/uiElements/button/SubmitButton';
import UserFormLabel from '../../components/uiElements/text/UserFormLabel';
import WarningSpan from '../../components/uiElements/text/WarningSpan';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other'
}

interface IFormInput {
  email: String;
  gender: GenderEnum;
  firstName: String;
  lastName: String;
  birthDate: Date;
  model: File;
}

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  return (
    <div>
      <Navbar/>
      <br/>
      <div className="p-4 mx-auto bg-gray-200 rounded shadow-lg max-w-fit">
        <form onSubmit={handleSubmit((data)=>console.log(data))}>
          <div className='grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-3'>
            <div className=''>
              <UserFormLabel value='Vorname'/>
              <input className="w-full px-3 bg-white rounded-md py-1.5 focus:outline-none hover:bg-gray-50"  {...register('firstName', { required: true, maxLength: 30 })} /><br/>
              {errors.firstName && <WarningSpan text='Please enter your first name'/>}<br/>
            </div>
            
            <div>
              <UserFormLabel value='Nachname'/>
              <input className='w-full px-3 py-1.5 bg-white rounded-md focus:outline-none hover:bg-gray-50' {...register('lastName', { required: true, maxLength: 30 })} /><br/>
              {errors.lastName && <WarningSpan text='Please enter your last name'/>}<br/>
            </div>
            
            <div>
              <UserFormLabel value='Geburtsdatum'/>
              <input type='date' className='w-full px-3 py-1 bg-white rounded focus:outline-none hover:bg-gray-50' {...register('birthDate', { required: true, min:'01.01.1900' })} /><br/>
              {errors.birthDate && <WarningSpan text='Please select your birth date'/>}<br/>
            </div>
            
            <div>
              <UserFormLabel value='Geschlecht'/>
              <select className='w-full px-3 py-1.5 bg-white rounded appearance-none hover:bg-gray-100 focus:outline-none'{...register('gender', { required: true, pattern: /other|female|male/})} >
                <option disabled selected> -- select an option -- </option>
                <option value='female'>weiblich</option>
                <option value='male'>männlich</option>
                <option value='other'>divers</option>
              </select><br/>
              {errors.gender && <WarningSpan text='Please select your gender'/>}<br/>
            </div>
            
            <div>
              <UserFormLabel value='3D-Model'/>
              <input className='text-sm focus:outline-none file:py-2 file:px-6 file:rounded file:border-0 file:bg-white hover:file:cursor-pointer hover:file:bg-gray-50' 
              accept='.stl' type='file' {...register('model', {required: true })} /><br/>
              {errors.model && <WarningSpan text='Please upload the 3d model'/>}<br/>
            </div>
            
          </div>
          <div className='flex justify-end px-10 py-5'>
            <SubmitButton value='User anlegen'/>
          </div>
      </form>
    </div>
  </div>
  );
}