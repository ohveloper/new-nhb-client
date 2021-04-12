import EditMyInfoContainer from '../components/EditMyInfo/EditMyInfoContainer';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';

export default function EditMyInfoPage() {
  return (
    <div>
      <>
        <Homebutton />
        <Sidebar />
        <EditMyInfoContainer />
      </>
    </div>
  );
}
