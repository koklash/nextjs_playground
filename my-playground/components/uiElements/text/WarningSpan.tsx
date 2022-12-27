type WarningTextProps = {
    text: string;
  };

const WarningSpan: React.FC<WarningTextProps> = ({text}) => {
    return (
        <span className='text-base font-light text-red-700'>
                {text}
        </span>
    );
}


export default WarningSpan

