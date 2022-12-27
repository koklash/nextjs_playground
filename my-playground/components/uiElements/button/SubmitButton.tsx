function SubmitButton(props:any) {
    return (
        <input type="submit"
            className="px-4 py-2 font-bold text-white bg-teal-200 rounded h-14 w-52 hover:bg-teal-300" 
            value={props.value} 
        />
    );
}

export default SubmitButton