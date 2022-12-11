function TextInput(props:any){
    return (
        <input className="w-full bg-white rounded-md" {...props.children} />
    )
}

export default TextInput