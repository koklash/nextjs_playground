import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '../button/SubmitButton';
import UserFormLabel from '../text/UserFormLabel';
import DateInput from './input/dateInput';
import TextInput from './input/textInput';

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
        <DivElements className=''>
          <UserFormLabel className='' value='Vorname'/>
          <TextInput  {...register('firstName', { required: true, maxLength: 30 })} /><br/>
          {errors.firstName && <span>Please enter your first name</span>}<br/>
        </DivElements>
        <DivElements className=''>
          <UserFormLabel value='Nachname'/>
          <TextInput {...register('lastName', { required: true, maxLength: 30 })} /><br/>
          {errors.lastName && <span>Please enter your last name</span>}<br/>
        </DivElements>
        <DivElements>
          <UserFormLabel value='Geburtsdatum'/>
          <DateInput {...register('birthDate', { required: true, min:'01.01.1900' })} /><br/>
          {errors.birthDate && <span>Please select your birth date</span>}<br/>
        </DivElements>
        <DivElements>
        <UserFormLabel value='Geschlecht'/>
          <select {...register('gender', { required: true, pattern: /other|female|male/})} >
            <option disabled selected> -- select an option -- </option>
            <option value='female'>weiblich</option>
            <option value='male'>männlich</option>
            <option value='other'>divers</option>
          </select><br/>
          {errors.gender && <span>Please select your gender</span>}<br/>
        </DivElements>
        
        <DivElements>
          <UserFormLabel value='3D-Model'/>
          <input accept='.stl' type='file' {...register('model', {required: true })} /><br/>
          {errors.model && <span>Please upload the 3d model</span>}<br/>
        </DivElements>
      </div>
      <SubmitButton value='User anlegen'/>
    </form>
  );
}


function DivElements(props:any){
  return(
    <div className={props.className + 'col-span-2 felx flex-col '}>
      {props.children}
    </div>
  );
}


export default UserForm