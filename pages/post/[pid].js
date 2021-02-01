import { useRouter } from 'next/router'
import AppHeader from './../../components/header';
import Common from '../../components/common/common';

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (<div>
            <Common/>
            <AppHeader/>
            <p>Post: {pid}</p>
          </div>)
}

export default Post