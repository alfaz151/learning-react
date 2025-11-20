import { Link } from 'react-router-dom';

const HeaderBar = () => {
    return (
        <>
            <div className='main-header-bar'>
                <div className='header-bar-left'>
                    <div className='header-logo-text'>
                        <h1>Mock Posts</h1>
                    </div>
                </div>
                <div className='header-bar-right'>
                    <div className='header-bar-right-list'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBar;