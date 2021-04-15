import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postBringFeedT, Feed } from '../api/postBringFeeds';
import { postUploadFeedT, Content } from '../api/postUploadFeed';
import { UserFeeds, Welcome } from '../reducers/reducer';
import { RootState } from '../reducers';
import { postUploadFeedThunk } from '../actions/actions';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import MainpagePoemList from '../components/Main/MainpagePoemList';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';

export default function MainPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const feeds = state.userFeeds.data?.userFeeds;

  const [loading, setLoading] = useState(true);
  const [poem, setPoem] = useState<Welcome>({ userFeeds: [] });
  const [error, setError] = useState(null);
  console.log('state:', state);

  const handlePostUploadFeed = (content: Content) => {
<<<<<<< HEAD
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      postUploadFeedT(content, accessToken)
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
=======
    const accessToken = '';
    if (state.accessToken) {
      // dispatch(postUploadFeedThunk(feed, accessToken));
>>>>>>> 7444aa31d854804119c0f6e986acfc53be1a337e
    }
  };

  // TODO: postBringFeedT()파라미터 topicId를 api로 가져오기
  const topicId = 1;
  useEffect(() => {
    // postBringFeedT({ topicId: topicId, limit: 10 }).catch((e) =>
    //   console.log(e)
    // );
  }, []);
  console.log('poem:', poem);
  return (
    <>
      <Homebutton />
      <Sidebar />
      <div>[MainPage]</div>
      <MainpagePoemInput handlePostUploadFeed={handlePostUploadFeed} />
      <MainpagePoemList />
    </>
  );
}
