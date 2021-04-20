import '../../styles/mainPage.css';

type PoemEditButtonProps = {
  handleEdit: () => void;
};

export default function PoemEditButton({ handleEdit }: PoemEditButtonProps) {
  const onClickEdit = () => {
    handleEdit();
  };

  return (
    <button className="poem-edit-button" onClick={onClickEdit}>
      EDIT
    </button>
  );
}
