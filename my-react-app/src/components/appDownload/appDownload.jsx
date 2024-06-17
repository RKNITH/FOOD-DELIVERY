import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Tomato App</p>
            <div className='app-download-platforms'>
                <img src={assets.play_store} alt='playstore' />
                <img src={assets.app_store} alt='playstore' />
            </div>

        </div>
    )
}

export default AppDownload