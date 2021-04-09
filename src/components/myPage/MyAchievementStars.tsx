export default function MyAchievementStars() {
  const state = useSelector((state: RootState) => state.myPage);
  const { userInfo } = state;
  return (
    <div>
      <h1>MyAchievementStars</h1>
    </div>
  );
}
