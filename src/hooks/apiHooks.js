import {fetchData} from '../utils/fetchData.js';
import {uniqBy} from 'lodash';
import {useEffect, useState} from 'react';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const mediaData = await fetchData(
        import.meta.env.VITE_MEDIA_API + '/media'
      );

      const uniqueUserIds = uniqBy(mediaData, 'user_id');

      console.log('uniqueUserIds', uniqueUserIds);

      const authApiUrl = import.meta.env.VITE_AUTH_API;

      const userData = await Promise.all(
        uniqueUserIds.map(
          async (item) =>
            await fetchData(`${authApiUrl}/users/${item.user_id}`)
        )
      );

      console.log('userData', userData);

      const newData = mediaData.map((item) => {
        const user = userData.find(({user_id}) => user_id === item.user_id);
        return {...item, username: user.username};
      });

      setMediaArray(newData);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};

};

export default useMedia;
