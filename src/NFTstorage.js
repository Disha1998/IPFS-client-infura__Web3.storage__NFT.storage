import React, { useState } from 'react'
import { NFTStorage, File } from 'nft.storage'

// import { Web3Storage } from 'web3.storage';

export default function NFTstorage() {
    const [NFTstorage, setNFTstorage] = useState();

    var API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU2OTBEMzVkMTBEOWQxMEVCNGI4YTMwNDJGQkM4RTZEZjY4ZTg5RjEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjEzOTY2NjA3OSwibmFtZSI6IkRpc2hhX05GVFN0b3JhZ2VfRGVtbyJ9.w_uIcVZ5En1uMhZRJzmMmbl7lyDWTVGArhfecJorsd4"
    const client = new NFTStorage({ token: API_KEY })



    async function NFTstorageUploadfile(e) {
        var file = e.target.files[0];
        const metadata = await client.store({
            name: 'Dishaa',
            description: 'Disha is learning how to set data in !',
            Examination: "By Disha",
            // image: new File(
            //     [
            //         // NFTStorage
            //     ],
            //     'pinpie.png',
            //     { type: 'image/png' }
            // ),
            image: file,
            // image: new File([URL.file], `${file.name}`),

        })
        console.log(metadata.url)
        // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json

        console.log('fileee===>', file);
        setNFTstorage(file)

    }
    return (
        <>
            <div className="App">
                <h1>NFTstorageUploadfile</h1>
                <input type="file" onChange={NFTstorageUploadfile} />
                {

                    NFTstorage && (
                        <div>
                            <p>{NFTstorage.name}</p>
                            <img src={URL.createObjectURL(NFTstorage)} width="600px" alt='not displaying' />
                        </div>
                    )
                }
                {/* {console.log('fileuploadd NFTstorage======>', NFTstorage)} */}
            </div>
        </>
    )
}
