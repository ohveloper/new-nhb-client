import EditMyInfoContainer from '../components/EditMyInfo/EditMyInfoContainer';
import Homebutton from '../components/Home/Homebutton';
import Sidebar from '../components/Home/Sidebar';

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
