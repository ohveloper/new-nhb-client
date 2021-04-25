import './styles/MyPhoto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild } from '@fortawesome/free-solid-svg-icons';

export default function MyPhoto() {
  const setIcon = <FontAwesomeIcon icon={faChild} />;
  return (
    <div id="my_photo">
      <div>{setIcon}</div>
    </div>
  );
}
