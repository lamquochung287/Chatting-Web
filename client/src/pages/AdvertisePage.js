import React from 'react'
import { AdvertisePageStyled } from './style/AdvertisePageStyle'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

export const AdvertisePage = () => {
    return (
        <AdvertisePageStyled>
            <section>
                <div className="title">
                    Hang out
                    anytime, anywhere
                </div>
                <div className="quotes">
                    This web makes it easy and fun to stay close to your favorite people.
                </div>
                <div className="btn-container">
                    <Link className='btn'> Login Now</Link>
                    <Link className='btn'> Register Now</Link>
                </div>
            </section>
            <img className="img-chat" src="/chatImage.png" alt="chat Image PR"></img>
            <footer>
                <div>
                    © Make in 2023
                </div>
                <div>This app make used ReactJS NodeJS(Express) Socket IO MongoDB - Lam Quoc Hung</div>
            </footer>
        </AdvertisePageStyled>
    )
}

export default AdvertisePage