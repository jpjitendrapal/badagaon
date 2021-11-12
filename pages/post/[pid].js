import { useRouter } from 'next/router'
import AppHeader from './../../components/header';
import AppFooter from './../../components/appFooter';
import Common from '../../components/common/common';

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (<div>
            <Common/>
            <AppHeader/>
            <div style={{height: '6100px'}}>
              <p>Post: {pid}</p>
            </div>
            <AppFooter/>
          </div>)
}

export default Post