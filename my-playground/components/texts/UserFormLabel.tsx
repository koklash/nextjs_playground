function UserFormLabel(props:any) {
    return (
        //tailwindcss classes
        <label className='text-base font-semibold'>
            {props.value}
        </label>
    );
}


export default UserFormLabel