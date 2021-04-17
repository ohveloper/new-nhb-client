import MainpagePoemContainer from './MainpagePoemContainer';
import { Welcome } from '../../reducers/reducer';

type MainpagePoemListProps = {
  poem: Welcome;
  isLoading: boolean;
};

export default function MainpagePoemList({
  poem,
  isLoading,
}: MainpagePoemListProps) {
  return (
    <>
      <h1>MainpagePoemList</h1>
      <MainpagePoemContainer poem={poem} isLoading={isLoading} />
    </>
  );
}
