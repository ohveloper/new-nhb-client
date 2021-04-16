import MainpagePoemContainer from './MainpagePoemContainer';

type MainpagePoemListProps = {
  poem: any;
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
