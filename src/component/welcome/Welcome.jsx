import './Welcome.css'
import {ReactComponent as GithubIcon} from './github-mark.svg';
import { SvgIcon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Welcome() {
    return (
        <div className="Welcome-bg">
            <div className='Welcome-layout'>
                <div className="Welcome-box">
                    <div className="Welcome-title">
                        <p className="Welcome-heading">Open National Stock Exchange Price</p>
                    </div>
                    <div className="Welcome-reference">
                        <a className="Welcome-reference-github" rel="noreferrer" target='_blank' href='https://github.com/Shikhar03Stark/open-nse-api'>
                        <SvgIcon component={GithubIcon} viewBox='0 0 98 96' />
                        </a>
                    </div>
                    <div className="Welcome-description">
                        <p className="Welcome-text">
                            Public API to access Indian stock data listed on NSE in real-time!
                        </p>
                        <p className="Welcome-text">
                            Historical data of Indian stocks (upto 2 months window at any time)
                        </p>
                        <p className="Welcome-text">
                            <b>No demat account, No fees, No subscription. Open to all.</b>
                        </p>
                    </div>
                </div>
                <div className='Welcome-down-box'>
                    <div className='Welcome-down'>
                        <ExpandMoreIcon style={{ color: 'white'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;