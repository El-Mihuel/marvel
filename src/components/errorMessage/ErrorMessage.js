import img from './error.gif';

const ErrorMessage = () => {
    return (
        <div>
            <img style={{display: 'block', width: "500px", height: "220px",
            objectFit: 'contain', margin: "0 auto"}} src={img} alt="1000-7?"/>
        </div>
    )
}

export default ErrorMessage;