import './Withdrawal_Modal.scss';

interface Withdrawal_Modal_Props {
  withdrawalHandler: () => void;
  byeByeHandler: () => void;
}

export default function Withdrawal_Modal({
  withdrawalHandler,
  byeByeHandler,
}: Withdrawal_Modal_Props) {
  return (
    <div>
      <h1>Withdrawal_Modal</h1>
      <div className="test">정말 탈퇴 하시겠습니까?</div>
      <button onClick={withdrawalHandler}>확인</button>
      <button onClick={byeByeHandler}>취소</button>
    </div>
  );
}
