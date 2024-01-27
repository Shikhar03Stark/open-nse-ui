import './Header.css';

function Header(){
    return(
        <div className="Header-box">
            <div className="Header-left">
                <div className="Header-item">
                    <p className='Header-text'>The Open NSE API project</p>
                </div>
            </div>
            <div className="Header-right">
                <div className="Header-item">
                <a style={{textDecoration: "none"}} href='https://www.github.com/Shikhar03Stark'><p className='Header-text'>Made with ❤️ by H.V.</p></a>
                </div>
            </div>
        </div>
    );
}

export default Header;