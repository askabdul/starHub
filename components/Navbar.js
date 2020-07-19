import Link from "next/link"
import Head from "next/head"


export default function Navbar(){
    return (
        <div className="navbar">
            <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            </Head>

            <header className="header">
                <Link href="/"><a className="logo">starHUB</a></Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                <ul className="menu">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About Us</a></Link></li>
                    <li><Link href="/contact"><a>Contact Us</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li>Download Now</li>
                </ul>
            </header>

            <style jsx>{`


            a {
            color: #fff;
            }

            /* header */

            .header {
                background-color: #3d2e87;
                box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
                position: fixed;
                width: 100vw;
                z-index: 3;
            }


            .menu li:last-of-type {
                display: block;
                font-size: 15px;
                letter-spacing: 0px;
                line-height: 30px;
                color: #d7d5ff;
                font-weight: 300;
                text-align: center;
                width: 138px;
                height: 33px;
                border-radius: 17px;
                filter: drop-shadow(4.454px 31.689px 9px rgba(0,52,74,0.18));
                background-color: #6c26b1;
                margin-top: 13px;
                margin-left: 15px;
                margin-right: 2em;
                cursor: pointer;
                transition: color 0.75s;
            }

            .menu li:last-of-type:hover {
                color: #3d2e87;
                background-color: #dce4e8;
                font-weight: bold;
            }

            .header ul {
                margin: 0;
                padding: 0;
                list-style: none;
                overflow: hidden;
                background-color: #3d2e87;
            }

            .header li a {
                display: block;
                padding: 20px 20px;
                text-decoration: none;
                color: #fff;
                transition: background-color 0.75s;
            }

            .header li a:hover,
            .header .menu-btn:hover {
                background-color: #22165a;
            }

            .header .logo {
                display: block;
                float: left;
                font-size: 2em;
                padding: 10px 20px;
                text-decoration: none;
            }

            /* menu */

            .header .menu {
                clear: both;
                max-height: 0;
                transition: max-height .2s ease-out;
            }

            /* menu icon */

            .header .menu-icon {
                cursor: pointer;
                float: right;
                padding: 28px 20px;
                position: relative;
                user-select: none;
            }

            .header .menu-icon .nav-icon {
                background: #fff;
                display: block;
                height: 2px;
                position: relative;
                transition: background .2s ease-out;
                width: 18px;
            }

            .header .menu-icon .nav-icon:before,
            .header .menu-icon .nav-icon:after {
                background: #fff;
                content: '';
                display: block;
                height: 100%;
                position: absolute;
                transition: all .2s ease-out;
                width: 100%;
            }

            .header .menu-icon .nav-icon:before {
                top: 5px;
            }

            .header .menu-icon .nav-icon:after {
                top: -5px;
            }

            /* menu btn */

            .header .menu-btn {
                display: none;
            }

            .header .menu-btn:checked ~ .menu {
                max-height: 300px;
            }

            .header .menu-btn:checked ~ .menu-icon .nav-icon {
                background: transparent;
            }

            .header .menu-btn:checked ~ .menu-icon .nav-icon:before {
                transform: rotate(-45deg);
                top:0;
            }

            .header .menu-btn:checked ~ .menu-icon .nav-icon:after {
                transform: rotate(45deg);
                top:0;
            }


            @media (min-width: 600px) {
                .header li {
                    float: left;
                }

                .header li a {
                    padding: 20px 30px;
                }

                .header .menu {
                    clear: none;
                    float: right;
                    max-height: none;
                }


                .header .menu-icon {
                    display: none;
                    margin-right: 2em;
                }

            }
            /*
            .navbar {
                    background: #3d2e87;
                }

                .icon {
                    margin-left: 100px;
                }

                .group {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    float: right;
                    margin-right: 100px;
                    margin-top: 35px;
                }

                .header:before,
                .header:after {
                    content: "";
                    display: table;
                    clear: both;
                }

                .header:after {
                    clear: both;
                }

                .header {
                    zoom: 1;
                }
                
                .hamburger {
                    background-color: transparent;
                    cursor: pointer;
                    border: 0;
                    font-size: 20px;
                    display: none;
                }

                .burger {
                    background-color: transparent;
                    cursor: pointer;
                    border: 0;
                    font-size: 20px;
                    display: none;
                }

                .hamburger:focus {
                    outline: none;
                }

                .burger:focus {
                    outline: none;
                }

                .menu {
                    display: flex;
                    flex-direction: row;
                }

                .menu li{
                    list-style-type: none;
                }

                .menu li a {
                    text-decoration: none;
                    margin-left: 10px;
                    color: #d7d5ff;

                }

                nav span {
                    font-size: 15px;
                    letter-spacing: 0px;
                    line-height: 30px;
                    color: #d7d5ff;
                    font-weight: 300;
                    text-align: center;
                    width: 138px;
                    height: 33px;
                    border-radius: 17px;
                    filter: drop-shadow(4.454px 31.689px 9px rgba(0,52,74,0.18));
                    background-color: #6c26b1;
                    margin-top: 10px;
                    margin-left: 15px;
                    cursor: pointer;
                    padding: 8px;
                }
           
                @media (max-width: 600px) {
                    .nav ul {
                        display: none;
                        width: 100%;
                        flex-direction: column;
                        
                    }

                    .nav {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .nav span {
                        float: left;
                    }

                    .hamburger {
                        display: block;
                        border: 0;
                        position: relative;
                        left: 60px;
                    }

                    .hamburger:focus {
                        outline: none;
                    }

                    .nav ul.show {
                        display: flex;
                        align-items: center;
                        transition: all 0.25s;
                    }

                }
                */
            `}
            </style>
        </div>
    )
}