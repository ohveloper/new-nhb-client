import './styles/Withdrawal_Modal.scss';

interface Withdrawal_Modal_Props {
  withdrawalHandler: () => void;
  byeByeHandler: () => void;
}

export default function Withdrawal_Modal({
  withdrawalHandler,
  byeByeHandler,
}: Withdrawal_Modal_Props) {
  return (
    <div className="withdrawal_modal_cotainer">
      <div className="test">정말 탈퇴 하시겠습니까?</div>
      <div className="withdrawal_modal_cotainer_button_group">
        <button onClick={byeByeHandler}>취소</button>
        <button onClick={withdrawalHandler}>확인</button>
      </div>
    </div>
  );
}
