
import Link from 'next/link';
import AppHeader from './../components/header';
import AppFooter from './../components/appFooter';
import Common from './../components/common/common';
// import LazyImg from 'react-img-lazy';
import ImageGrid from '../components/imageGrid/grid';
import ImageGallery from 'react-image-gallery';
import style from 'react-image-gallery/styles/css/image-gallery.css';
// import './home.module.scss';

export default function Home() {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <div className="container">
      <AppHeader/>
      <main>
        {/* <ImageGrid images={[{url:"",alt:"alt1"},{url:"", alt:"alt2"}]} /> */}
        <h1 className="title">
          Welcome to Badagaon
          
          {/* <LazyImg/> */}
        </h1>
        <ImageGallery items={images} />
      </main>
      <AppFooter/>
      <Common/>
      <style jsx>{`
        .svg-inline--fa{
          max-width: 25px;
        }
        main {
          padding: 0.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .title{
          height: auto;
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
        }
      `}</style>
    </div>
  )
}
