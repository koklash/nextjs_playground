function UserFormLabel(props:any) {
    return (
        //tailwindcss classes
        <p className='text-base font-semibold'>
            {props.value}
        </p>
    );
}


export default UserFormLabel