# IPFS-client-infura__Web3.storage__NFT.storage
### IPFS-client-infura__Web3.storage__NFT.storage, store files/images with ipfs-client-infura &amp; Web3.storge &amp; Nft.storage.


## In App.js file there is IPFS-client-infura code
### I took reference for ipfs-client-infura from : https://dabit3.medium.com/uploading-files-to-ipfs-from-a-web-application-37d75fb326ed


## For web3.storage --- I took reference from : https://www.npmjs.com/package/web3.storage
### https://web3.storage/tokens/   ---   1st we need to create token account  (from(oficial document: https://web3.storage ) : (Accounts=>Create an API)
### Once uploaded you can fetch your data from any IPFS gateway via ----->   https://dweb.link/ipfs/<root cid>

## For NFT.storage  --- I took reference from : https://www.npmjs.com/package/nft.storage
### 1) https://nft.storage   ---------Login with email or github
### 2) after login in NFT STORAGE-- Go to -- API keys -- and  Generate API --and pest it in code(Visual code API_key)
### For NFT metadata use this --- https://ipfs.io/ipfs/<add your C_ID--from NFT Storage>/metadata.json 
## Example : https://ipfs.io/ipfs/bafyreicefnwiwevhsw3bo6ghkdek526k7zohqi7f3ra2iu77nn3gt5peki/metadata.json

### For Get an image/File used this ---- https://ipfs.io/ipfs/<Add the id and name which is you got in metadata>/MicrosoftTeams-image.png
## Example : https://ipfs.io/ipfs/bafybeievzcwwwgltfh746ffjghywoa4xrwtl2ctv2yt7zdlsgrj3w3a3te/MicrosoftTeams-image.png

