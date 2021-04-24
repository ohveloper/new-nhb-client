import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import '../../styles/mainPage.css';

type PoemEditButtonProps = {
  handleEdit: () => void;
};

export default function PoemEditButton({ handleEdit }: PoemEditButtonProps) {
  const onClickEdit = () => {
    handleEdit();
  };

  return (
    <>
      <FontAwesomeIcon icon={faEdit} onClick={onClickEdit} />
    </>
  );
}
