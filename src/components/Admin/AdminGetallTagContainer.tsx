import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import AdminGetAllTag from './AdminGetAllTag';

export default function AdminGetallTagContainer() {
  const state = useSelector((state: RootState) => state.reducer);
  const adminAllTags = state.adminTags.data?.data.tags;

  return (
    <div>
      <h1>모든 뱃지</h1>
      <div id="admin-tag-contaniner">
        {adminAllTags?.map((x) => {
          return (
            <AdminGetAllTag
              id={x.id}
              tagName={x.tagName}
              description={x.description}
              tagUrl={x.tagUrl}
              key={x.id}
            />
          );
        })}
      </div>
    </div>
  );
}
