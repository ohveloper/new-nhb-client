import { Welcome } from '../../reducers/reducer';

type PoemButtonGroupProps = {
  likeNum: string;
  commentNum: number;
};

export default function PoemButtonGroup({
  likeNum,
  commentNum,
}: PoemButtonGroupProps) {
  return (
    <div>
      [likes] {likeNum} &nbsp; [comments] {commentNum} &nbsp; [share]
    </div>
  );
}
