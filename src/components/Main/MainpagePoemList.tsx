import MainpagePoemContainer from './MainpagePoemContainer';

type MainpagePoemListProps = {
  poem: any;
};

export default function MainpagePoemList({ poem }: MainpagePoemListProps) {
  return (
    <>
      <h1>MainpagePoemList</h1>
      <MainpagePoemContainer poem={poem} />
    </>
  );
}
