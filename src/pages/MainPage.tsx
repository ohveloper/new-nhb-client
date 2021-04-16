import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Feed } from '../api/postBringFeeds';
import { Content, postUploadFeedT } from '../api/postUploadFeed';
import { postBringFeedT } from '../api/postBringFeeds';
import { UserFeeds, Welcome } from '../reducers/reducer';
import { RootState } from '../reducers';
import { postUploadFeedThunk, postBringFeedsThunk } from '../actions/actions';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import MainpagePoemList from '../components/Main/MainpagePoemList';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';

export default function MainPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [poem, setPoem] = useState<Welcome>({ data: { userFeeds: [] } });
  const [error, setError] = useState(null);
  console.log('state:', state);

  const handlePostUploadFeed = (content: Content) => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      dispatch(postUploadFeedThunk(content, accessToken));
    }

    console.log('uploadCheck:', content);
    console.log('uploadCheck2:', poem);
  };

  // TODO: postBringFeedT()파라미터 topicId를 api로 가져오기
  const topicId = 1;
  useEffect(() => {
    dispatch(postBringFeedsThunk({ topicId: topicId, limit: 30 }));
    // const interval = setInterval(() => {
    //   dispatch(postBringFeedsThunk({ topicId: topicId, limit: 30 }));
    // }, 600000);
    if (state.userFeeds.data?.data.userFeeds) {
      setPoem({
        data: { userFeeds: [...state.userFeeds.data?.data.userFeeds] },
      });
      // setPoem((prevState) => {
      //   return {
      //     data: {
      //       userFeeds: [
      //         ...prevState.data.userFeeds,
      //         state.userFeeds.data.data.userFeeds,
      //       ],
      //     },
      //   };
      // });
    }
  }, [poem]);
  return (
    <>
      <Homebutton />
      <Sidebar />
      <div>[MainPage]</div>
      <MainpagePoemInput handlePostUploadFeed={handlePostUploadFeed} />
      <MainpagePoemList poem={poem} />
    </>
  );
}
