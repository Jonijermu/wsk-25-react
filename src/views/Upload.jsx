import useForm from '../hooks/formHooks.js';
import {useState} from 'react';
import {useFile, useMedia} from '../hooks/apiHooks.js';
import {useNavigate} from 'react-router';

const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const navigate = useNavigate();
  const {postMedia} = useMedia();

  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');
      const fileResult = await postFile(file, token);
      console.log('file result', fileResult);
      const mediaResult = await postMedia(fileResult.data, inputs,token);
      console.log('Media result', mediaResult);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doUpload);

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      setFile(evt.target.files[0]);
    }
  };

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://placehold.co/600x400?text=Choose+image'
          }
          alt="preview"
          width="200"
        />
        <button type="submit" disabled={!(file && inputs?.title.length > 3)}>
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
