import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '../button/SubmitButton';
import UserFormLabel from '../text/UserFormLabel';

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

function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  
  
  return (
    <form onSubmit={handleSubmit((data)=>console.log(data))}>
      <div className='grid grid-flow-col grid-rows-3'>
        <div className=''>
          <UserFormLabel className='' value='Vorname'/>
          <input className="w-full bg-white rounded-md"  {...register('firstName', { required: true, maxLength: 30 })} /><br/>
          {errors.firstName && <span>Please enter your first name</span>}<br/>
        </div>
        <div className=''>
          <p> 'Nachname'</p>
          <input className="w-full bg-white rounded-md" {...register('lastName', { required: true, maxLength: 30 })} /><br/>
          {errors.lastName && <span>Please enter your last name</span>}<br/>
        </div>
        <div>
          <UserFormLabel value='Geburtsdatum'/>
          <input type='date' className="bg-white" {...register('birthDate', { required: true, min:'01.01.1900' })} /><br/>
          {errors.birthDate && <span>Please select your birth date</span>}<br/>
        </div>
        <div>
        <UserFormLabel value='Geschlecht'/>
          <select {...register('gender', { required: true, pattern: /other|female|male/})} >
            <option disabled selected> -- select an option -- </option>
            <option value='female'>weiblich</option>
            <option value='male'>männlich</option>
            <option value='other'>divers</option>
          </select><br/>
          {errors.gender && <span>Please select your gender</span>}<br/>
        </div>
        
        <div>
          <UserFormLabel value='3D-Model'/>
          <input accept='.stl' type='file' {...register('model', {required: true })} /><br/>
          {errors.model && <span>Please upload the 3d model</span>}<br/>
        </div>
      </div>
      <SubmitButton value='User anlegen'/>
    </form>
  );
}



export default UserForm