function SubmitButton(props:any) {
    return (
        <input type="submit"
            //tailwindcss classes
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" 
            value={props.value} 
        />
    );
}

export default SubmitButton