import React, { useState } from 'react'
import { Web3Storage } from 'web3.storage';

export default function Web3storage() {
    const [fileupload, setFileupload] = useState();

    async function web3storgeUpload(e) {
        let file = e.target.files[0];
        // console.log(file, 'fileee');
        // setFileupload(file)
        // Construct with token and endpoint
        var API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDllQ0E5OUNiRTEzRUMxM0MzRjU4QzE0RTc0MzgwNmU2MTE3MzNDRDAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTYwNTAxOTgxMjMsIm5hbWUiOiJEaXNoYV9EZW1vX3dlYjNzdG9yYWdlIn0.Os3UaL4MsjanU4EqAI81F-bze6jxN3HyauYSPPRMO08"
        const client = new Web3Storage({ token: API_TOKEN })
        // console.log(client, 'clieenntt');

        const fileInput = document.querySelector('input[type="file"]')
        // console.log(fileInput, 'fileInput');

        // Pack files into a CAR and send to web3.storage
        const rootCid = await client.put(fileInput.files) // Promise<CIDString>
        console.log('rootcid web3--', rootCid);
        setFileupload(rootCid);
        // Get info on the Filecoin deals that the CID is stored in
        const info = await client.status(rootCid) // Promise<Status | undefined>
        // console.log('infooo===',info);

        // Fetch and verify files from web3.storage
        const res = await client.get(rootCid) // Promise<Web3Response | null>
        const files = await res.files() // Promise<Web3File[]>
        for (const file of files) {
            console.log('C Id web3 ----> ', `${file.cid}`, `${file.name}`)
        }
    }



    return (
        <>
            <div className="App">
                <h1>Web3storage</h1>
                <input type="file" onChange={web3storgeUpload} />
                {
                    fileupload && (
                        // <img src={fileupload} />
                        <p>{fileupload}</p>
                        // <img  src={URL.createObjectURL(fileupload)} width="600px"  alt="Not display" />

                    )
                }
                {console.log('fileuploadd web3======>', fileupload)}
            </div>
        </>
    )
}
