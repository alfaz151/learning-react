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
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBar;