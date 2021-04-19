type PoemEditButtonProps = {
  handleEdit: () => void;
};

export default function PoemEditButton({ handleEdit }: PoemEditButtonProps) {
  const onClickEdit = () => {
    handleEdit();
  };

  return <button onClick={onClickEdit}>EDIT</button>;
}
