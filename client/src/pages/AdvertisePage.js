import React from 'react'
import { AdvertisePageStyled } from './style/AdvertisePageStyle'
import { Link } from "react-router-dom"

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
                    <Link to="/login" className='btn'> Login Now</Link>
                    <Link to="/register" className='btn'> Register Now</Link>
                </div>
            </section>
            <aside>
                <img className="img-chat" src="/chatImage.png" alt="chat Image PR"></img>
            </aside>
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