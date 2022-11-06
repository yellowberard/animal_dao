import { useState } from 'react'
import { create } from 'ipfs-http-client'
import axios from 'axios';

function CheckingIPFS() {

const REACT_APP_PINATA_API_KEY = "c1c83af9816e0d9730ac" ;
const REACT_APP_PINATA_API_SECRET= "6b0a89da575688da425a5ca6d4d97639b63b791d763bb837a072ac198f008c2d" ;

  const [fileImg, setFileImg] = useState(null);
 
  const sendFileToIPFS = async (e) => {
    e.preventDefault()
    if (fileImg) {
        try {

            const formData = new FormData();
            formData.append("file", fileImg);

            console.log(formData) ;

            const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': `${REACT_APP_PINATA_API_KEY}`,
                    'pinata_secret_api_key': `${REACT_APP_PINATA_API_SECRET}`,
                    "Content-Type": "multipart/form-data"
                },
            });

            const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
         console.log(ImgHash); 
        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error)
        }
    }}

    return(
      <form onSubmit={sendFileToIPFS}>
        <h1>adufhlakhfclad</h1>
      <input type="file" onChange={(e) =>setFileImg(e.target.files[0])} required />
      <button type='submit' >Mint NFT</button>            
      </form>
      );
}

export default CheckingIPFS