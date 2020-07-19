import Navbar from "./../components/Navbar"
import Footer from "./../components/Footer"
import Head from 'next/head'



export default function About() {
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
                <h1>this is the about page</h1>
            </main>
            <Footer/>
            <style jsx>{`
                
            `}
            </style>
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