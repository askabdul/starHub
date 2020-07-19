import Link from "next/link"
import myImage from "./../public/android.png"
import myImage1 from "./../public/ios.png"

export default function Footer(){
    return (
        <div className="footer">
            <article className="apps">
                <div>
                 <i className="fa fa-handshake-o" aria-hidden="true"></i>
                </div>
                <div className="dl-btn">
                    <Link href="/google.com"><img src={myImage} className="android" alt="google-play-logo"/></Link>
                    <Link href=""><img src={myImage1} className="ios" alt="ios-appstore-logo"/></Link>

                </div>
            </article>
            <div className="menu-shortcuts">
                <div className="about">
                    <h4>About Us</h4>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/feature"><a>Features</a></Link></li>
                        <li><Link href="/doc"><a>Doc</a></Link></li>
                        <li><Link href="/pricing"><a>Pricing</a></Link></li>
                    </ul>
                </div>
                <div className="feature">
                    <h4>Features </h4>
                    <ul>
                        <li><Link href="/services"><a>Services</a></Link></li>
                        <li><Link href="/online"><a>Online Shop</a></Link></li>
                        <li><Link href="/influence"><a>Influences</a></Link></li>
                        <li><Link href="/media"><a>Media</a></Link></li>
                        <li><Link href="/brands"><a>Brands</a></Link></li>
                    </ul>
                </div>
                <div className="blog">
                    <h4>Blog </h4>
                    <ul>
                        <li><Link href="/terms-and-conditions"><a>Terms &amp; Conditions</a></Link></li>
                        <li><Link href="/support"><a>Support</a></Link></li>
                        <li><Link href="/Privacy"><a>Privacy</a></Link></li>
                    </ul>
                </div>
                <div className="lang">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                    <h4>English </h4> 
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                
            </div>
            <div className="copyright">
                <p>2018 &copy; Copyright, All rights reserved.</p>
            </div>
    <style jsx>{`
        .footer {
            padding: 50px;
            justify-content: center;
            align-items: center;
            padding-top: 0;
        }       

        .apps {
            display: flex;
            flex-direction: column;
            margin: auto;
            padding-left: 45px;
        }

        .footer .apps .ios {
            height: 50px;
            width: 152px;
            margin-left: 15px;
        }

        .footer .apps .android {
            height: 70px;
            margin-top: -11px;
            width: 180px;
        }

        .menu-shortcuts {
            display: flex;
            float: right;
            margin-top: -156px;
            padding-right: 60px;
        }

        .copyright:before,
        .copyright:after {
            content: " ";
            display: table;
        }

        .copyright:after {
            clear: both
        }

        .dl-btn {
            display: flex;
        }

        .apps .fa {
            width: 23px;
            height: 70px;
            color: #8036ce;
            border-radius: 12px;
            margin-left: 13px;
        }

        .about {
            padding-right: 40px;
        }

        .feature {
            padding-right: 40px;
        }

        .blog {
            padding-right: 130px;
        }

        .about h4 {
            margin-left: 15px;
            font-size: 20px;
            line-height: 21px;
            color: #8036ce;
            font-weight: 500;
        }

        .feature h4 {
            margin-left: 40px;
            font-size: 20px;
            line-height: 21px;
            color: #8036ce;
            font-weight: 500;
        }

        .blog h4 {
            margin-left: 50px;
            line-height: 21px;
            color: #8036ce;
            font-weight: 500;
            margin-top: 28px;
            font-size: 20px;
        }

        .lang {
            display: flex;
            flex-direction: row;
        }

        .lang  .fa-globe {
            margin-top: 25px;
            margin-right: 10px;
            color: #8036ce;

        }

        .lang  .fa-angle-down {
            margin-top: 25px;
            margin-left: 10px;
            color: #537190;
        }

        .lang h4 {
            color: #537190;
        }

        .menu-shortcuts .about ul {
            margin-top: -15px;
        }

        .menu-shortcuts .feature ul {
            margin-top: -15px;
        }

        .menu-shortcuts .blog ul {
            margin-top: -15px;
        }

        .menu-shortcuts .about ul li {
            list-style-type: none;
            padding: 4px;
        }

        .menu-shortcuts .about ul li a {
            text-decoration: none;
            color: #537190;
        }

        .menu-shortcuts .feature ul li {
            list-style-type: none;
            padding: 4px;

        }

        .menu-shortcuts .feature ul li a {
            text-decoration: none;
            color: #537190;

        }


        .menu-shortcuts .blog ul li {
            list-style-type: none;
            padding: 4px;

        }

        .menu-shortcuts .blog ul li a {
            text-decoration: none;
            color: #537190;

        }

        .copyright  {
            font-size: 16px;
            line-height: 32px;
            color: #537190;
            font-weight: 500;
            padding-left: 59px;
        }

        @media (max-width: 600px) {
            .menu-shortcuts {
                display: flex;
                flex-direction: row;
                margin: 0;
                flex-wrap: wrap;
                padding: initial;
            }

            .menu-shortcuts > div {
                padding: 0;
                margin: 0;
            }

            .apps {
                display: flex;
                flex-direction: column;
            }

            .dl-btn {
                display: flex;
                flex-direction: column;
            }

            .copyright {
                padding: 0
            }
        }

    `}</style>
        </div>
    )
}