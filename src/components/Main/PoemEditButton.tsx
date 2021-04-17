type PoemEditButtonProps = {
  handleEdit: () => void;
};

export default function PoemEditButton({ handleEdit }: PoemEditButtonProps) {
  const onClickEdit = () => {
    handleEdit();
  };

  return <div onClick={onClickEdit}>(E)</div>;
}
