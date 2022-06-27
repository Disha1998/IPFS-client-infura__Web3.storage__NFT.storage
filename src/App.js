import './App.css'
import { useState } from 'react'
import NFTstorage from './NFTstorage';
import Web3storage from './web3storage';
import { create } from 'ipfs-http-client'
const client = create('https://ipfs.infura.io:5001/api/v0')
function App() {


  const [fileUrl, updateFileUrl] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      console.log('IPFS URL--->', url);
      updateFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  return (
    <>

      <div className="App">
        <h1>IPFS Demo with 'ipfs-http-client' & infura</h1>
        <input
          type="file"
          onChange={onChange}
        />
        {
          fileUrl && (
            // <img src={URL.createObjectURL(fileUrl)} width="600px" alt='IPFS' />
            <p>{fileUrl}</p>
          )
        }
      </div>

      <Web3storage />


      <NFTstorage />


    </>
  );
}
export default App