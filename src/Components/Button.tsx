interface ButtonProps {
    children: string;
    onClick: () => void;
}


const Button = ({children, onClick}: ButtonProps) => {   
    return (
        <button className="btn btn-success"
            onClick={onClick}>
        Success
      </button>
    );
}

export default Button