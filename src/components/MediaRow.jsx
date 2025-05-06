import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks.js';
import {useAuthentication} from '../hooks/apiHooks.js';

const MediaRow = (props) => {
  const {isLoggedIn} = useAuthentication();
  const {user} = useUserContext()

  const {item, setSelectedItem, deleteMedia, modifyMedia} = props;

  console.log(item.user_id)
  console.log(user.user_id)
  return (
    <tr className="*:border-2 *:border-[#ccc] *:p-4">
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-52 object-cover"
        />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td className="p-0!">
        {/*<button onClick={handleClick}>View</button>*/}
        <Link
          to="/single"
          state={{item}}
          className="hover:bg-amber-300 hover:text-gray-900"
          onClick={() => {

            setSelectedItem(item);
          }}
        >
          View
        </Link>
        {user && item.user_id === user.user_id && (
          <>
            <button
              type="button"
              className="rounded border-2 bg-blue-400 hover:bg-sky-400 hover:text-black"
              onClick={() => {
                console.log('Modify button');
              }}
            >
              Edit
            </button>

            <button
              type="button"
              className="rounded border-2 bg-blue-400 hover:bg-sky-400 hover:text-black"
              onClick={() => {
                console.log('Delete button');
              }}
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

MediaRow.PropTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;
