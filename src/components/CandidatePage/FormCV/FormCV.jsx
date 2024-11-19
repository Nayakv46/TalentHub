import './formCV.scss'
import { storage } from '../../../config/firebase'
import { ref, listAll, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { IoClose } from 'react-icons/io5'

const FormCV = () => {
  const [file, setFile] = useState(null);
  const [fileURLs, setFileURLs] = useState([]);

  const { currentUser } = useAuth();

  const fetchFiles = async () => {
    if(!currentUser) return;
    try {
        const folderRef = ref(storage, `cv/${currentUser.email}`);
        const result = await listAll(folderRef);
        const fileURLs = await Promise.all(
            result.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                return { name: itemRef.name, url };
            })
        );
        return fileURLs;
    } catch (error) {
        console.log('Error fetching files', error);
    }
  }

  const fetchAndSetFiles = async () => {
      const urls = await fetchFiles();
      setFileURLs(urls);
  }
  useEffect(() => {

    fetchAndSetFiles()
  }, [])

  const handleFileUpload = async (file) => {
    if (!file) return;
    try {
        const storageRef = ref(storage, `cv/${currentUser.email}/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        fetchAndSetFiles();

        return downloadURL;
    } catch (error) {
        console.log('Error uploading file', error);
    }
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleFileDelete = async (fileName) => {
    if (!currentUser) return;
    try {
        const fileRef = ref(storage, `cv/${currentUser.email}/${fileName}`);
        await deleteObject(fileRef);

        setFileURLs((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    } catch (error) {
        console.log('Error deleting file', error);
    }
  }
  return (
    <>
    <div className='form-cv'>
        <p className='form-cv__title'>Upload your CV, so the recruiters may inspect your details the old fashioned way.</p>
        <div className='form-cv__upload'>
            <label htmlFor="input-cv" className='form-cv__upload-label'>{file?.name ? file.name : "Choose a file"}</label>
            <input className='form-cv__upload-input' id="input-cv" type="file" onChange={handleFileChange} />
            <button className='form__add' onClick={() => handleFileUpload(file)}>Upload File</button>
        </div>

        {fileURLs.length > 0 &&
        <>
            <p>Your Resumes</p>
            <div className='form-cv__files'>
                {fileURLs.map((file, index) => (
                    <div className='form-cv__files-file' key={index}>
                    <a href={file.url} target="_blank" rel="noopener noreferrer">
                        {file.name}
                    </a>
                    <IoClose className='form-cv__delete' onClick={() => handleFileDelete(file.name)}>Delete</IoClose>
                    </div>
                ))}
            </div>
        </>
        }
    </div>
    </>

  )
}

export default FormCV