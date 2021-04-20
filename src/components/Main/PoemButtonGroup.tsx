import '../../styles/mainPage.css';

type PoemButtonGroupProps = {
  likeNum: string;
  commentNum: number;
};

export default function PoemButtonGroup({
  likeNum,
  commentNum,
}: PoemButtonGroupProps) {
  return (
    <div className="poem-button-group">
      [likes] {likeNum} &nbsp; [comments] {commentNum} &nbsp; [share] &nbsp;
      [report]
    </div>
  );
}
