import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyAchievementBadges() {
  const state = useSelector((state: RootState) => state.reducer);
  // const { tags } = state.userInfo;
  // const { badges } = state;
  // const myTagsId = tags.map((x) => x.tagId);

  // return (
  //   <div>
  //     <h1>MyAchievementBadges</h1>
  //     <div>
  //       {badges.map((badge) =>
  //         !myTagsId.includes(badge.tagId) ? (
  //           <p key={badge.tagId} style={{ color: 'gray' }}>
  //             {badge.tagName}
  //           </p>
  //         ) : tags[badge.tagId - 1].isUsed ? (
  //           <p
  //             key={badge.tagId}
  //             style={{ border: 'blue 2px solid', color: 'red' }}
  //           >
  //             {badge.tagName}
  //           </p>
  //         ) : (
  //           <p key={badge.tagId} style={{ color: 'red' }}>
  //             {badge.tagName}
  //           </p>
  //         )
  //       )}
  //     </div>
  //     <button>뱃지선택</button>
  //   </div>
  // );
}
