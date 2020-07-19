import Head from 'next/head'
import Link from 'next/link'
import Navbar from "./../components/Navbar"
import Footer from "./../components/Footer"
import mobilePic from "./../public/Urrea.jpg"
import bookPic from "./../public/book.png"
import designPic from "./../public/design.png"
import mobileFoto from "./../public/mountain.jpg"
import maleFace from "./../public/face.jpg"



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
         rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
         crossorigin="anonymous"></link>
      </Head>
      <Navbar/>

      <main>
        <div className='article'>
          <div className="article-content">
            <h2 className="intro">Introducing <b>Abstract</b> </h2>
            <h2>App landing page.</h2>
            <p>A perfect landing page to showcase <br/> your new App</p>
          </div>
          <div className="mobile-pic">
            <Link href="/google.com"><img src={mobilePic} className="mobileFon" alt="mobile-phone-display"/></Link>
          </div>
        </div>
        <div className="cards">
            <div className="pen-card">
              <i className="fa fa-pencil" aria-hidden="true"></i>
              <h3>Modern &amp; Trendy Design</h3>
              <p>Dictas scaevola democritum cu his, magna <br/>abhorreant dissentias ut</p>
            </div>
            <div className="clock-card">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
              <h3>Save your Time</h3>
              <p>Oportere patrioque sit et, eum ne prima <br/>nemore perfecto. Eu cibo quidam <br/>eleifend per.</p>
              <span>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
            </div>
            <div className="heart-card">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
            <h3>Made with Love</h3>
            <p>Inimicus hendrerit an duo, feugiat <br/>adipiscing everti nostrum id.</p>
            </div>
        </div>
        <div className="info">
          <div className="info-content">
            <h3>Modern &amp; <br/>Trendy Design</h3>
            <p>Dictas scaevola democritum cu his, magna <br/>abhorreant dissentias utDictas scaevola <br/>democritum cu his.</p>
            <span>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
          </div>
          <div className="info-content-img">
            <img src={bookPic} className="bookPic" alt="book-mobile-image"/>
            <img src={designPic} className="designPic" alt="mobile-design-image"/>
          </div>
        </div>
        <div className="section">
          <div className="dl-mobile">
            <img src={mobileFoto} className="mobile" alt="mobile-design-picture"/>
          </div>
          <div className="time">
          <h3>Save <br/>your time</h3>
            <p>Dictas scaevola democritum cu his, magna <br/>abhorreant dissentias utDictas scaevola <br/>democritum cu his.</p>
            <span>Download App <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
          </div>
        </div>
        <div className="comments">
          <div className="caption">
            <p>What 400+ reviews <br/>say about this</p>
          </div>
          <div className="direction">
            <span> <i className="fa fa-long-arrow-left" aria-hidden="true"></i></span>
            <span> <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
          </div>
        </div>
        <div className="reviews">
          <div className="review-cards">
              <span><img src={maleFace} className="maleFace" alt="mobile-phone-display"/></span>
              <div className="align">
                <p>Julian Francis</p>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <small>Quality Control Chemist</small>
              </div>
              <p>As part of the classes I teach, I task my students <br/> with preparing a lot of presentations. Generator to <br/>pick who presents the good..</p>
          </div>
          <div className="review-card-2">
              <span><img src={maleFace} className="maleFace" alt="mobile-phone-display"/></span>
              <div className="aligned">
                <p>Roberto Rowe</p>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <small>Licensed Embalmer</small>
              </div>
              <p>As part of the classes I teach, I task my students <br/>with preparing a lot of presentations. To save time<br/> &amp; reduce boredom, I occasionally have only a pick <br/>who presents the good work!</p>
          </div>
          <div className="review-card-3">
              <span><img src={maleFace} className="maleFace" alt="mobile-phone-display"/></span>
              <div className="align-icon">
                <p>Julian Francis</p>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <span> <i className="fa fa-star" aria-hidden="true"></i></span>
                <small>Quality Control Chemist</small>
              </div>
              <p>As part of the classes I teach, I task my students <br/> with preparing a lot of presentations. Generator to <br/>pick who presents the good..</p>
          </div>
        </div>
        <div className="price">
          <h3>Pricing</h3>
          <p>Dictas scaevola democritum cu his, magna abhorreant <br/>dissentias utDictas scaevola democritum cu his.</p>
        </div>
        <div className="plans">
          <div className="starter">
              <h3>Starter Plan</h3>
              <p>Free</p>
              <small>Forever</small>
              <p>Dictas scaevola democritum cu <br/>his magna abhorreant.</p>
              <span>Start Now</span>
          </div>
          <div className="enterprise">
          <h3>Enterprise Plan</h3>
              <p>$18.00</p>
              <small>Month</small>
              <p>Dictas scaevola democritum cu his, <br/> magna abhorreant dissentias utDictas <br/>scaevola democritum cu his.</p>
              <span>Start Now</span>
          </div>
          <div className="unlimited">
          <h3>Unlimited Plan</h3>
              <p>$42.00</p>
              <small>Month</small>
              <p>Dictas scaevola democritum cu <br/>his magna abhorreant.</p>
              <span>Start Now</span>
          </div>
        </div>
        <div className="abstract">
          <h3>Start using <strong>Abstract</strong> app now!</h3>
          <p>Dictas scaevola democritum cu his, magna <br/>
            abhorreant dissentias.</p>
            <span>Download App <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
        </div>
        <hr/>
      </main>
      <Footer/>
      
      <style jsx>{`

        .article {
          display: flex;
          /* background: linear-gradient(190deg,#3d2e87 30%,rgba(0,0,0,0) 30%),radial-gradient(farthest-corner at 40% 40%,#3d2e87 71%,#fff 70%); */
          background-color: #3d2e87;
        }

        .article-content {
          padding: 50px 80px 0px 60px;
          font-size: 30px;
          letter-spacing: 0px;
          line-height: 44px;
          color: #ffffff;
          font-weight: 500;
          text-align: center;
        }

        .mobile-pic img {
          width: 220px;
          length: 38px;
          height: 520px;
          margin-left: 310px;
          border-radius: 30px;
          margin-top: 40px;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding-top: 60px;
          overflow: hidden;
          padding-bottom: 30px
        }

        .pen-card {
          width: 369px;
          height: 254px;
          border-radius: 22px;
          filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          padding: 55px;
        }

        .pen-card h3 {
          font-size: 21px;
          letter-spacing: 0px;
          line-height: 31px;
          color: #3d2e87;
          font-weight: 600;
        }

        .pen-card p {
          width: 2046px;
          height: 354px;
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 30px;
          color: #3d2e87;
          font-weight: 300;
        }

        .pen-card .fa-pencil {
          color: #3d2e87;
          font-size: 22px;

        }

        .clock-card {
          width: 369px;
          height: 330px;
          border-radius: 22px;
          filter: drop-shadow(3.062px 21.786px 69.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          margin-left: 15px;
          margin-right: 15px;
          padding: 55px;
          position: relative;
          margin-top: 77px;
        }

        .clock-card h3 {
          font-size: 21px;
          letter-spacing: 0px;
          line-height: 31px;
          color: #792ecc;
          font-weight: 600;
        }

        .clock-card p {
          width: 2007px;
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 30px;
          color: #3d2e87;
          font-weight: 300;
          padding-bottom: 25px;
        }

        .clock-card .fa-clock-o {
          color: #3d2e87;
          font-size: 22px;
        }

        .clock-card span {
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 23px;
          color: #3d2e87;
          font-weight: 500;
        }

        .clock-card span .fa-arrow-right {
          font-weight: 300;
        }

        .heart-card {
          width: 369px;
          height: 254px;
          border-radius: 22px;
          filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          padding: 55px;
        }

        .heart-card h3 {
          font-size: 21px;
          letter-spacing: 0px;
          line-height: 31px;
          color: #3d2e87;
          font-weight: 600;
        }

        .heart-card p {
          width: 2107px;
          height: 354px;
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 30px;
          color: #3d2e87;
          font-weight: 300;
        }


        .heart-card .fa-heart-o {
          color: #3d2e87;
          font-size: 22px;
        }

        .info-content {
          padding: 7rem;
        }

        .info {
          background-color: #dfe6e8;
        }


        .info-content h3 {
          font-size: 34px;
          letter-spacing: 0px;
          color: #3d2e87;
          font-weight: 600;
        }


        .info-content p {
          letter-spacing: 0px;
          line-height: 32px;
          color: #3d2e87;
          font-weight: 300;
          font-size: 20px;
          height: 100px;
        }

    
        .info-content span {
          display: block;
          font-size: 17px;
          letter-spacing: 0px;
          line-height: 25px;
          color: #4d4090;
          font-weight: 500;
        }

        .info-content-img {
          display: flex;
          padding: 7rem;
          margin-top: 4rem;
        }

        .info-content-img .bookPic {
          height: 270px;
          width: 246px;
          margin-right: 2em;
          border-radius: 20px;
        }

        .info-content-img .designPic {
          height: 270px;
          width: 246px;
          border-radius: 20px;
        }

        .info {
          display: flex;
          flex-direction: row;
        }

        .dl-mobile .mobile {
          height: 370px;
          width: 190px;
          border-radius: 20px;
        }


        .section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 3em 7em;
        }

        .time {
          margin-left: 35rem;
        }

        .time h3 {
          font-size: 34px;
          letter-spacing: 0px;
          color: #3d2e87;
          font-weight: 600;
        }

        .time p {
          font-size: 20px;
          letter-spacing: 0px;
          line-height: 32px;
          color: #3d2e87;
          font-weight: 300;
        }

        .time span {
          width: 160px;
          height: 32px;
          padding: 10px;
          padding-top: 6px;
          display: block;
          border-radius: 20px;
          -webkit-filter: drop-shadow(4.454px 31.689px 9px rgba(0,52,74,0.18));
          filter: drop-shadow(4.454px 31.689px 9px rgba(0,52,74,0.18));
          background-color: #3d2e87;
          border: 1px solid #6c26b1;
          font-size: 17px;
          line-height: 15px;
          color: #ffffff;
          text-align: center;
        }

        .comments {
          display: flex;
          padding-bottom: 6rem;
        }

        .direction {
          display: block;
          padding-top: 4em;
          padding-left: 47em;
          color: #402e8a;
        }

        .caption {
          padding-left: 7rem;
          font-size: 35px;
          letter-spacing: 0px;
          line-height: 1em;
          color: #6c2eb9;
          font-weight: 600;
        }

        .direction .fa-long-arrow-right {
          padding-left: 1em;
          font-size: 20px;
        }

        .direction .fa-long-arrow-left {
          font-size: 20px;
        }

        .reviews {
          display: flex;
          flex-wrap: wrap;
          background-color: #3d2d87;
          border-radius: 1em;
          height: 15rem;
        }

        .review-cards {
          width: 440px;
          height: 246px;
          border-radius: 22px;
          -webkit-filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          margin-left: -1rem;
          margin-top: 5em;
          padding-left: 3rem;
        }

        .review-cards p {
          font-size: 17px;
          letter-spacing: 0px;
          line-height: 26px;
          color: #3d2e87;
          font-weight: 500;
        }


        .review-cards .maleFace {
          height: 66px;
          width: 70px;
          border-radius: 45px;
        }

        .review-cards span {
          position: relative;
          bottom: 1em;
        }

        .review-card-2 {
          width: 440px;
          height: 288px;
          border-radius: 22px;
          -webkit-filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          margin-left: 1rem;
          margin-top: 5em;
          padding-left: 3rem;
        }

        .aligned p {
          font-size: 21px;
          -webkit-letter-spacing: 0px;
          -moz-letter-spacing: 0px;
          -ms-letter-spacing: 0px;
          letter-spacing: 0px;
          color: #6c2eb9;
          font-weight: 600;
          display: inline;
          padding-right: 8em;
        }


        .aligned small {
          letter-spacing: 0px;
          line-height: 31px;
          color: #3d2e87;
          font-weight: 700;
          display: block;
        }

        .aligned .fa-star {
          color: #6e2cbd;
        }

        .review-card-2 span {
          position: relative;
          bottom: 1em;
        }

        .review-card-2 .maleFace {
          height: 66px;
          width: 70px;
          border-radius: 45px;
        }

        .review-card-2 p {
          font-size: 1rem;
          letter-spacing: 0px;
          color: #6c2eb9;
          font-weight: 600;
        }

        .review-card-3 {
          width: 440px;
          height: 246px;
          border-radius: 22px;
          -webkit-filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          margin-left: 56rem;
          margin-top: -18em;
          padding-left: 3rem;
        }
      
        .aligned p {
          font-size: 1rem;
          letter-spacing: 0px;
          color: #6c2eb9;
          font-weight: 600;
          display: inline;
          padding-right: 8em;
        }

        .align-icon .fa-star {
          color: #6e2cbd;
        }

        .align-icon p {
          font-size: 21px;
          letter-spacing: 0px;
          color: #6c2eb9;
          font-weight: 600;
          display: inline;
          padding-right: 8em;
        }

        .review-card-3 p {
          font-size: 17px;
          letter-spacing: 0px;
          line-height: 26px;
          color: #3d2e87;
          font-weight: 500;
        }

        .align-icon small {
          letter-spacing: 0px;
          line-height: 31px;
          color: #3d2e87;
          font-weight: 700;
          display: block;
        }

        .review-card-3 .maleFace {
          height: 66px;
          width: 70px;
          border-radius: 45px;
        }

        .review-card-3 span {
          position: relative;
          bottom: 1em;
        }

        .align p {
          font-size: 21px;
          letter-spacing: 0px;
          color: #6c2eb9;
          font-weight: 600;
          display: inline;
          padding-right: 8em;
        }

        .align .fa-star {
          color: #6e2cbd;
        }

        .align small {
          letter-spacing: 0px;
          line-height: 31px;
          color: #3d2e87;
          font-weight: 700;
          display: block;
        }

        .price {
          text-align: center;
          padding: 10rem 0;
        }
        
        .price h3 {
          font-size: 39px;
          letter-spacing: 0px;
          color: #6c2eb9;
          font-weight: 600;
          text-align: center;
        }

        .price p {
          font-size: 23px;
          letter-spacing: 0px;
          line-height: 37px;
          color: #3d2e87;
          font-weight: 300;
          text-align: center;
          justify-content: center;
        }

        .plans {
          display: flex;
          padding-left: 5rem;
          padding-bottom: 3rem;
        }


        .starter {
          justify-content: center;
          text-align: center;
          width: 382px;
          height: 462px;
          border-radius: 22px;
          filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          padding: 3rem 0;
        }

        .starter h3 {
          font-size: 25px;
          letter-spacing: 0px;
          color: #3d2e87;
          font-weight: 400;
          text-align: center;
        }

        .starter small {
          font-size: 18px;
          letter-spacing: 0px;
          color: #7c2dcd;
          font-weight: 400;
          text-align: center;
        }

        .starter p:first-of-type {
          font-size: 40px;
          letter-spacing: 0px;
          color: #3d2e87;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0rem;
        }

        .starter p:last-of-type {
          font-size: 18px;
          letter-spacing: 0px;
          line-height: 37px;
          color: #3d2e87;
          font-weight: 300;
          text-align: center;
          padding-bottom: 1em;
        }

        .starter span {
          border-radius: 20px;
          border: 1px solid #7a2dcb;
          color: #3d2e87;
          padding: 6px;
          display: block;
          width: 12rem;
          margin-left: 6rem;
          cursor: pointer;
        }

        .starter span:hover {
          background-color : #504293;
          color: #ffffff;
          transition: all 0.25s;
        }


        .enterprise {
          width: 434px;
          height: 524px;
          border-radius: 22px;
          filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          margin-top: -2rem;
          padding: 4rem 0;
        }

        .enterprise h3 {
          font-size: 25px;
          letter-spacing: 0px;
          color: #3d2e87;
          font-weight: 400;
          text-align: center;
        }

        .enterprise small {
          display: block;
          font-size: 18px;
          letter-spacing: 0px;
          color: #7c2dcd;
          font-weight: 400;
          text-align: center;
        }

        .enterprise span {
          border-radius: 20px;
          border: 1px solid #7a2dcb;
          color: #3d2e87;
          padding: 6px;
          display: block;
          width: 13rem;
          margin-left: 7rem;
          cursor: pointer;
          text-align: center;
          filter: drop-shadow(4.454px 31.689px 9px rgba(0,52,74,0.18));
        }

        .enterprise span:hover {
          background-color : #504293;
          color: #ffffff;
          transition: all 0.25s;
        }

        .enterprise p:first-of-type {
          font-size: 40px;
          letter-spacing: 0px;
          color: #7a2dcb;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0;
        }

        .enterprise p:last-of-type {
          font-size: 18px;
          letter-spacing: 0px;
          line-height: 37px;
          color: #3d2e87;
          font-weight: 300;
          text-align: center;
          padding-bottom: 2rem;
        }

        .unlimited {
          width: 382px;
          height: 462px;
          border-radius: 22px;
          filter: drop-shadow(3.062px 21.786px 29.5px rgba(0,52,74,0.18));
          background-color: #ffffff;
          padding: 3rem 0;
        }

        .unlimited h3 {
          font-size: 25px;
          letter-spacing: 0px;
          color: #3d2e87;
          font-weight: 400;
          text-align: center;
        }

        .unlimited p:first-of-type {
          font-size: 40px;
          letter-spacing: 0px;
          color: #3d2e87;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0;
        }

        .unlimited p:last-of-type {
          font-size: 18px;
          letter-spacing: 0px;
          line-height: 37px;
          color: #3d2e87;
          font-weight: 300;
          text-align: center;
          padding-bottom: 1em;

        }

        .unlimited span {
          border-radius: 20px;
          border: 1px solid #7a2dcb;
          color: #3d2e87;
          padding: 6px;
          display: block;
          width: 13rem;
          margin-left: 5.5rem;
          cursor: pointer;
          text-align: center;
          filter: drop-shadow(4.454px 31.689px 9px rgba(0,52,74,0.18));
        }

        .unlimited span:hover {
          background-color : #504293;
          color: #ffffff;
          transition: all 0.25s;
        }

        .unlimited small {
          display: block;
          font-size: 18px;
          letter-spacing: 0px;
          color: #7c2dcd;
          font-weight: 400;
          text-align: center;
        }

        .abstract {
          border-radius: 22px;
          filter: drop-shadow(3.062px 21.786px 69.5px rgba(0,52,74,0.18));
          background-image: linear-gradient(174deg, #3d2d87 0%, #8b2ddf 100%);
          margin: 0 3rem;
          padding: 3rem 0;
        }

        .abstract h3 {
          font-size: 33px;
          letter-spacing: 0px;
          line-height: 48px;
          color: #ffffff;
          font-weight: 500;
          text-align: center;
        }

        .abstract p {
          font-size: 21px;
          letter-spacing: 0px;
          line-height: 31px;
          color: #ffffff;
          font-weight: 300;
          text-align: center;
        }

        .abstract span {
          display: block;
          width: 176px;
          height: 37px;
          border-radius: 19px;
          filter: drop-shadow(4.454px 31.689px 9px rgba(0,52,74,0.18));
          background-color: #ffffff;
          border: 1px solid #6c26b1;
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 23px;
          cursor: pointer;
          color: #822dd5;
          font-weight: 400;
          text-align: center;
          margin: 0 auto;
          padding-top: 5px;
          transition: color background-color 0.75s ease-out;
        }

        .abstract span:hover {
          background-color: #3d2e87;
          color: #ffffff;
        }

        hr {
          margin: 6rem 6rem;
        }

        @media (max-width: 600px) {
          .article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            text-align: center;
          }

          .article .mobile-pic {
            margin-left: 0;
          }

          .mobile-pic img {
            justify-content: center;
            margin-right: 19rem;
          }

          .intro {
          width: 100%
          }

          .cards {
            display: flex;
            flex-direction: column;
          }

          .clock-card {
            margin: 30px 0px;
          }

          .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .info-content-img {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: -8em;         
          }

          .bookPic {
            margin-left: 2em;
            margin-bottom: 2em;
          }

          .section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .time {
            margin: 0 auto;
            text-align: -webkit-center;
          }

          .comments {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .direction span{
            display: block;
            margin-left: 0;
          }

          .info-content p {
            padding-bottom: 12em;
          }

          .reviews {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 65rem;
          }

          .review-cards {
            margin-right: 56em;
            width: 320px;
          }

          .review-card-2 {
            margin-right: 58em;
            width: 320px;
            height: 245px;
          }

          .review-card-3 {
            margin-left: -57em;
            margin-top: 4em;
            width: 320px;
            height: 245px;
          }

          .align p {
            font-size: 0.8em
          }

          .align .fa-star {
            font-size: 0.8em
          }

          .align small {
            font-size: 0.6em
          }

          .review-cards p {
            font-size: 0.7em
          }

          .aligned p {
            font-size: 0.8em
          }

          .aligned .fa-star {
            font-size: 0.8em
          }

          .aligned small {
            font-size: 0.6em
          }

          .review-card-2 p {
            font-size: 0.7em
          }

          .align-icon p {
            font-size: 0.8em
          }

          .align-icon .fa-star {
            font-size: 0.8em
          }

          .align-icon small {
            font-size: 0.6em
          }

          .review-card-3 p {
            font-size: 0.7em
          }

          .plans {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .abstract {
            padding: 0 auto
          }

          .direction {
            display: flex;
            padding: 0;
          }
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 auto;
          font-family: Encode Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
