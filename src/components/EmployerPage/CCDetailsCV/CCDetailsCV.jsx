import './ccDetailsCV.scss'
import { useState, useEffect } from 'react'
import { storage } from '../../../config/firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

const CCDetailsCV = ({ email }) => {
  const [fileURLs, setFileURLs] = useState([]);

  const fetchFiles = async () => {
    if(!email) return;
    try {
        const folderRef = ref(storage, `cv/${email}`);
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
  return (
    <>
    {fileURLs.length > 0 ?
        (<div className='ccd-files'>
            {fileURLs.map((file, index) => (
                <div className='ccd-files__file' key={index}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                    {file.name}
                </a>
                </div>
            ))}
        </div>)
        : (<p>
            No files found
        </p>)
    }
    </>
  )
}

export default CCDetailsCV