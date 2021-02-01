
import Link from 'next/link';
import AppHeader from './../components/header';
import AppFooter from './../components/appFooter';
import Common from './../components/common/common';

export default function Home() {
  return (
    <div className="container">
      
      <AppHeader/>
      <main>
        <h1 className="title">
          Welcome to Badagaon
        </h1>
      </main>
      <AppFooter/>
      <Common/>
      <style jsx>{`
        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-top: 3rem;
        }
        .title{
          height: 300px;
          font-size: 3rem;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }


        @media (max-width: 700px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .title{
            height: 250px;
          }
        }
      `}</style>
    </div>
  )
}
