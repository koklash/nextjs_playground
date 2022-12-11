function MediumCard(props:any) {
    return (
        <div className="flex items-center w-1/2 p-4 mx-auto bg-gray-200 rounded shadow-lg card">
            {props.children}
        </div>
    );
}


export default MediumCard

