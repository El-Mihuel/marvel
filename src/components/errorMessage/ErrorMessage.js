import img from './ghoulGif.gif';

const ErrorMessage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>1000-7?</h1>
            <img style={{display: 'block', width: "500px", height: "220px",
            objectFit: 'contain', margin: "0 auto"}} src={img} alt="1000-7?"/>
        </div>
    )
}

export default ErrorMessage;