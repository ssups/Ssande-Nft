# Ssande - NFT Minting, Trade, Auction Project

## ๐ฅ๏ธ Project Page

<li><a href = "https://ipfs.io/ipfs/QmeU5qkmDpJJRhmVa82tGRwsQZufNRPXFQrKMCpjeBZcyA">https://ipfs.io/ipfs/QmeU5qkmDpJJRhmVa82tGRwsQZufNRPXFQrKMCpjeBZcyA</a></li>
<br><br>

## ๐ Documents

 <li><a href = "https://frost-wok-c3f.notion.site/784be7e84fd94a11b6d3be2e00183cc8?v=a2faa34c9d1d4c17ae075cb61d011f82">๐Project Info</a></li>
 <li><a href = "https://frost-wok-c3f.notion.site/85f791cb7345498ebb80c87bd0f1e3aa?v=f409f934557b4683bc10a71f2e3e8e6d">๐ Meeting Materials</a></li>
 <br><br>

## ๐งพ Project Description

3์ธ์ผ๋ก ๊ตฌ์ฑ๋ ํ์ผ๋ก ์ผ์ฃผ์ผ๊ฐ ์งํํ Solidity ํ๋ก์ ํธ.<br><br>
Goerli(Test-Network)์ <br>

1. ERC721Token(NFT)์ปจํธ๋ ํธ<br>
2. ํด๋น ํ ํฐ์ ๊ฑฐ๋ํ  ์ ์๋ ์ปจํธ๋ ํธ<br>

๋๊ฐ์ง์ ์ปจํธ๋ ํธ๋ฅผ ๋ฐฐํฌํ๊ณ  ํด๋น ์ปจํธ๋ ํธ๋ค๊ณผ ์ํธ์์ฉ ํ  ์ ์๋ ์นํ์ด์ง๋ฅผ ๊ตฌํํ๋ ๊ฒ์ ๋ชฉํ๋ก ์งํ.<br><br>

๋ฏผํ๋ฐฉ์์ ํ๋ฒ์ 2๊ฐ์ด์์ ๋ฏผํ์ด ๊ฐ๋ฅํ BatchMinting.<br>
BatchMinting์ ์ฌ์ฉ์์ ๊ฐ์ค๋น ์ง์ถ์ ์ค์ด๊ธฐ์ํด์ Azukiํ์์ ๋ง๋  ERC721A-standard๋ฅผ ์ฌ์ฉ.<br><br>
์ผ๋ฐ์ ์ธ ํ ํฐ๊ฑฐ๋ ์ปจํธ๋ ํธ๋ค๊ณผ์ ์ฐจ๋ณ์ฑ์ ๋๊ธฐ ์ํด์, ๊ฒฝ๋งค๋ฅผ ํตํ ๊ฑฐ๋๊ธฐ๋ฅ์ ์ถ๊ฐ์ ์ผ๋ก ๊ตฌํํจ.
<br><br>

## ๐๏ธ Project Structure

![image](https://user-images.githubusercontent.com/107898015/218940897-f58aa2bb-ecc2-4065-a0c4-49ee75d37e8e.png)
<br><br>

## ๐  Tech Stack

<img src="https://img.shields.io/badge/Solidity-purple?style=flat-square&logo=Solidity&logoColor=white"> <img src="https://img.shields.io/badge/OpenZeppelin-purple?style=flat-square&logo=OpenZeppelin&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-61DAFB?style=flat-square&logo=ReactRouter&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-61DAFB?style=flat-square&logo=ReactContext&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-61DAFB?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-yellow?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/.env-yellow?style=flat-square&logo=.env&logoColor=white"/>
<br><br>

## ๐จ Preview

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/97073355/218945995-c08d52a2-614b-49f0-b482-b3d367ec2921.gif)
<img width="1499" alt="image" src="https://user-images.githubusercontent.com/107898015/218937998-7a3f64c9-da9c-4300-a330-8a5b08425cc8.png">
<img width="1481" alt="image" src="https://user-images.githubusercontent.com/107898015/218936915-973fa1d4-e5a6-428a-b466-d0321ee572e6.png">
<br><br>

## ๋ชฉ์ฐจ

1. [Front](#Front)

   1. [3D Slide](#3D-Slide)

   2. [Connect Wallet](#Connect-Wallet)

   3. [Loading](#Loading)

   4. [Modal && Minting](#Modal-&&-Minting)

2. [Contract](#Contract)

   1. [Token Contract](#Token-Contract)

   2. [Trade Contract(์ผ๋ฐ๊ฑฐ๋)](#Trade-Contract์ผ๋ฐ๊ฑฐ๋)

   3. [Trade Contract(๊ฒฝ๋งค๊ฑฐ๋)](#Trade-Contract๊ฒฝ๋งค๊ฑฐ๋)

<br>

---

<br>

## Front

<br>

### 3D Slide

<!-- <br><br><br><br><br><br><br><br><br><br><br><br> -->

```

์ ๋ชํ NFT์ฌ์ง๋ค๋ก  3D ๋๋์ด ๋๊ฒ ๊ตฌํํด๋ดค์ต๋๋ค

.moveImg {
	width: 100%;
	position: absolute;
	float: right;
	animation: rotar 15s infinite linear;
	transform-style: preserve-3d;

}

๊ฐ๊ฐ ์ด๋ฏธ์ง์ nth-child๋ก ์ง์ ํด์ค๋ค์ ์์น๋ฅผ ์ ํด๋๊ณ 
์ฌ์ง๋ค์ ์ค๋ฅธ์ชฝ์ผ๋ก ๋๊ฒํ๋ animation ํจ๊ณผ์ preserve-3d
๋ง์ง๋ง์ผ๋ก @keyframes ์ผ๋ก rotateY ๊ฐ์ ๋ฃ์ด์ฃผ๋ฉด ๋ฉ์ง 3d-slide๋ฅผ ๋ง๋ค์ ์์ต๋๋ค
```

<br>
<br>

### Connect Wallet

<br>

![asdasd](https://user-images.githubusercontent.com/97073355/218951174-69cf3424-08f9-4479-be10-170e9a5c84c0.png)

```JS
๋ฉํ๋ง์คํฌ์ ์ฐ๊ฒฐํ  ์ ์๋ ๋ฒํผ์๋๋ค


  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        if (currentProvider !== window.ethereum) {
        }
        await currentProvider.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const chainId = await web3.eth.getChainId();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        ethBalance = web3.utils.fromWei(ethBalance, 'ether');
        saveUserInfo(ethBalance, account, chainId);
        if (userAccount.length === 0) {
        }
      }
    } catch (err) {}
  };

  const onDisconnect = () => {
    window.localStorage.removeItem('userAccount');
    setUserInfo({});
    setIsConnected(false);
  };

์ง๊ฐ์ ์ฐ๋ํ๊ฒํด์ฃผ๋ onConnenct ํจ์์
์ง๊ฐ์ด๋ ์ฐ๋์  "์ง๊ฐ์ฐ๋" ๊ธ์๊ฐ -> "ํด์ ํ๊ธฐ"๋ก ๋ฐ๋๊ฒ ๋๋ฉด์
์ง๊ฐ์ ์ฐ๋์ ํด์  ํ  ์ ์๋ onDisconnectํจ์๋ฅผ ๋ง๋ค์์ต๋๋ค

```

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/97073355/218985250-592e8d44-4008-41b1-b0bf-47ec54a6a88d.gif)

์ง๊ฐ์ฐ๊ฒฐ์ ํ๋ฉด ๋ณด์ ํ ์ด๋์ ๊ณ์ ์ฃผ์๋ฅผ ํ์ธํ  ์ ์์ต๋๋ค.

<br>
<br>

### Loading

<br>

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/97073355/220532292-d5c030fb-9105-4109-b4ea-073fd93e98fd.gif)

<br>
ํธ๋์ญ์ ์ฒ๋ฆฌํ๋ ๋์ ์ ์ ๊ฐ ๋ค๋ฅธ ํ๋์ ๋ชปํ๋๋ก
๋ง๋ค์๋ Loading.css๋ฅผ ์ด์ฉํด ์ค๋ฅ๋ฐฉ์ง์ ์๊ฐ์ ์ธ ํจ๊ณผ๋ฅผ  ๋ฃ์ด์คฌ์ต๋๋ค

<br>
<br>

### Modal && Minting

<br>

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/97073355/220283276-ff88f8ed-3b9b-4f94-a0ce-3418a026f5ef.gif)

<br>
๋ฏผํ ๋ฒํผ์ ๋๋ฅด๋ฉด ๋ชจ๋ฌ์ฐฝ์ด ๋์ค๊ณ  ๋ฏผํํ  NFT ๊ฐฏ์๋ฅผ ์ ํ  ์ ์์ต๋๋ค

๋ฏผํ ๊ฐฏ์์ ๋ฐ๋ผ ์ค์ ํ Goerli์ด ๋น ์ ธ๋๊ฐ๋๋ค.

<br>
<br>

### NFT Card

<br>

<img width="1499" alt="image" src="https://user-images.githubusercontent.com/107898015/218937998-7a3f64c9-da9c-4300-a330-8a5b08425cc8.png">

```JS
 { saleTokenURIs &&
            Object.keys(saleTokenURIs).map(tokenId => (

              <Col key={tokenId} lg="3" md="4" sm="6"

              className="mb-4">
                <ShopNftCard key={tokenId} tokenId={tokenId} tokenURI={saleTokenURIs[tokenId]} />
              </Col>
            ))}
```

<br>
 saleTokenURIs ๊ฐ์ฒด์ ๋ชจ๋  ํญ๋ชฉ์ ๋ํด ShopNftCard ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋งํ์ฌ NFT ํ ํฐ์ ํ์ํฉ๋๋ค.

<br>

NFT ์ฌ์ง์ ๋ฐฐ๊ฒฝํ๋ฉด, ๋ชธ , ๋ , ์๋ชจ์์ผ๋ก ๋๋์ด์ ์ง์  ๋ง๋ค์๊ณ  Hashlips ์์ ๋ง๋  ์ฝ๋๋ฅผ ์ด์ฉํด์ ์๋ฐฑ๊ฐ์ง์ ์ด๋ฏธ์ง๋ฅผ ์ถ์ถํ์ต๋๋ค

<br>
<br>
<br>

## Contract

์ปจํธ๋ ํธ ๊ตฌ์กฐ

![image](https://user-images.githubusercontent.com/107898015/221673138-e0304bf8-b2db-44b2-8f0a-951496e029e9.png)

![image](https://user-images.githubusercontent.com/107898015/221672828-9bdf2129-0807-43b2-9849-985c9dfd9cdc.png)

<br>

### Token Contract

<br>
Batch ๋ฏผํ์ ๋ฐ์ํ๋ ๊ฐ์ค๋น๋ฅผ ํ๊ธฐ์ ์ผ๋ก ์ค์ธ ERC721A-Standard๋ฅผ ํ์ฉํ์๋ค.

![image](https://user-images.githubusercontent.com/107898015/221669596-6418031d-f4a2-4cd7-9fdc-d8b0a163dbca.png)
![image](https://user-images.githubusercontent.com/107898015/221669714-f196894f-0e62-4cca-866b-ee7be1b63b63.png)

์ ๊ทธ๋ฆผ๊ณผ ๊ฐ์ด ERC721Enumerable์ ๋ฏผํ๊ฐฏ์์ ๋ฐ๋ผ ๊ฐ์ค๋น๊ฐ ๋น๋ก์ ์ผ๋ก ์ฆ๊ฐํ์ง๋ง ERC721A๋ ๋์์ ๋ช๊ฐ๋ฅผ ๋ฏผํํ๋๊ฐ์ ๊ฐ์ค๋น๊ฐ ๋น์ทํ๊ฒ ์๋ชจ๋๋ค๋ ๊ฒ์ ์ ์ ์๋ค.

์ด๋ ๊ฒ ๊ฐ์ค๋น๋ฅผ ํ๊ธฐ์ ์ผ๋ก ์ค์ผ์ ์๋ ์ด์ ๋

1. 2๊ฐ์ด์์ ํ ํฐ(NFT)์ ํ๋ฒ์ ๋ฏผํํ ๋ owner(address)์ balance(์์ ํ ํ ํฐ์ ๊ฐฏ์)๊ฐ์ ํ๋ฒ๋ง ์๋ฐ์ดํธ ํ๋ค.

2. 2๊ฐ์ด์์ ํ ํฐ(NFT)์ ํ๋ฒ์ ๋ฏผํํ ๋ ํ ํฐ(tokenId)์ owner(address)๊ฐ์ ํ๋ฒ๋ง ์๋ฐ์ดํธํ๋ค.<br>
   ์๋ฅผ๋ค์ด ์๋๊ทธ๋ฆผ์ฒ๋ผ 100๋ฒํ ํฐ๋ถํฐ 3๊ฐ๋ฅผ ํ๋ฒ์ ๋ฝ์๋ 100๋ฒํ ํฐ์ owner๋ง storage์ ๊ธฐ๋กํด๋๋๋ค.
   ![image](https://user-images.githubusercontent.com/107898015/221672267-19c00539-221d-4fbb-88c2-6c3aa0e3315c.png)

<br>
<br>

### Trade Contract(์ผ๋ฐ๊ฑฐ๋)

<br>

์ผ๋ฐํ๋งค๋ฅผ ์ํ storage ๋ณ์๊ฐ์ ๋ฑ ๋งคํ ํ๋๋ง ์ฌ์ฉํ์๋ค. (๊ฐ์ค๋น ์ต์ ํ๋ฅผ ์ํ์ฌ)

```js
mapping(uint => uint) private _tokensOnSale;
```

ํ๋งค์ค์ธ ํ ํฐ์ ์์ด๋๊ฐ๋ค์ ๋ด์๋๋ ๋ฐฐ์ด์ ๋ฐ๋ก ๋ง๋ค์ง ์์๊ธฐ๋๋ฌธ์

ํ์ฌ ๋ฐํ๋ ๋ชจ๋ ํ ํฐ๋ค์ ์ํํ๋ฉฐ ๋ฐํ๋ ํ ํฐ๋ค๋ง ๊ฑธ๋ฌ์ฃผ๋ ํจ์๋ฅผ ๋ฐ๋ก ๋ง๋ค์๋ค.

์ด๋ ๊ฒ ํจ์๋ก์จ ๋์ฒดํ ์ ์๋ ์ด์ ๋ ERC721A๊ท๊ฒฉ์ผ๋ก ์์ฑ๋ ํ ํฐID๊ฐ์ ์์ฐจ์ ์ผ๋ก ๋ฐฐ์ ๋๋ค๋ ํน์ง ๋๋ฌธ.

```js
function onSaleList() external view returns(uint256[] memory){
        uint256[] memory tokensOnSale = new uint256[](_countOnSale()); // ๋ฐฐ์ดํฌ๊ธฐ ๋ฏธ๋ฆฌ๋ฐฐ์ 
        uint256 index = 0;

        for(uint tokenId = 1; tokenId <= Token.totalSupply(); tokenId++) {
            if(isOnSale(tokenId)) {
                tokensOnSale[index] = tokenId;
                index ++;
            }
        }

        return tokensOnSale;
    }
```

์ผ๋ฐ ๊ฑฐ๋์ ๊ธฐ๋ฅ์ ๋ฑ ๊ตฌ๋งค, ํ๋งค ,ํ๋งค์ทจ์ ์ธ๊ฐ์ง์ด๊ณ , ํ๋งค์๋ ์์๋ฃ๋ฅผ ์ ์ธํ ๊ธ์ก์ ์ ์ฐ๋ฐ๊ฒ ์ค์ ํ์๋ค.

```js
uint256 incomeAfterFee = afterFee(price);
(bool success, ) = tokenOwner.call{value: incomeAfterFee}("");
require(success, "payment failed");
```

<br>
<br>

### Trade Contract(๊ฒฝ๋งค๊ฑฐ๋)

<br>

#### <๊ฒฝ๋งค ๋ก์ง>

- ๊ฒฝ๋งค์ ๋ฑ๋ก์ ์ํ๋ ์ฌ๋์ ์ต์๊ธ์ก๊ณผ ๊ฒฝ๋งค์๊ฐ ๋๊ฐ์ง๋ฅผ ์ ํด์ ๊ฒฝ๋งค์ ๋ฑ๋กํ
  ์ด๋ ํ ํฐ์ ์์ ๋ ๊ทธ๋๋ก ๋ณธ์ธ์๊ฒ ์๊ณ , ํ ํฐ์ ์ก์๋ํ ๊ถํ์ ์ปจํธ๋ ํธ์ ๋๊น.

- ์์ฐฐ์ ์ํ๋ ์ฌ๋์ ์ต์๊ธ์ก ์ด์์ ๊ฐ๊ฒฉ์ผ๋ก๋ง ์์ฐฐํ ์์๊ณ ,
  ์์ฐฐ์ ์์ฐฐ์ก์ ์์ ์ ์ง๊ฐ์์ ๋น ์ ธ๋๊ฐ๋ฉฐ,
  ์์ ์ ์์ฐฐ๊ฐ๋ณด๋ค ๋์ ์์ฐฐ๊ฐ๊ฐ ๋ค์ด์ค๋ฉด ๋ณธ์ธ์ ์์ฐฐ์ก์ ์๋์ผ๋ก ํ๋ถ๋จ.

- ๊ฒฝ๋งค์ ๋ฑ๋กํ ์ฌ๋์ด ์ ํ ๊ฒฝ๋งค์๊ฐ์ด ์ง๋๊ณ ๋๋ฉด,
  ๊ฒฝ๋งค๋ ๋ง๊ฐ๋๊ณ  ์์ฐฐ์๊ฐ ์๋ฌด๋ ์๋ ๊ฒฝ๋งค๋ ๊ทธ๋๋ก ์ ์ฐฐ๋จ.

- ์์ฐฐ์๊ฐ ์์๊ฒฝ์ฐ์๋ ํด๋น ๊ฒฝ๋งค๋ ์ ์ฐ๋์ง์์ ๊ฒฝ๋งค๋ก ๋ถ๋ฅ๋๊ฒ๋๊ณ ,
  ์์ฐฐ์๋ ํ๋งค์ ๋์ค์ ์๋ฌด๋ ํ๋ช์ด์ ์ฐ๋ฒํผ์ ๋๋ฅด๊ฒ๋๋ฉด,
  ์์ฐฐ์์๊ฒ๋ ํ ํฐ์ด ํ๋งค์์๊ฒ๋ ์์๋ฃ๊ฐ ์ ์ธ๋ ํ๋งค๊ธ์ด ์ ์ก๋จ.
  <br>
  <br>

#### <์ํ๋ณ์>

์ผ๋ฐ๊ฑฐ๋์ ๋ง์ฐฌ๊ฐ์ง๋ก ๊ฐ์ค๋น ์ต์ ํ๋ฅผ ์ํด์ mapping ํ๊ฐ๋ง์ ์ฌ์ฉ,
mapping์ value๋ก ๊ฒฝ๋งค์ ๋ณด๊ฐ ๋ด๊ธด ๊ตฌ์กฐ์ฒด๋ฅผ ํ ๋น.

```js
struct AuctionInfo {
        uint256 lastBidPrice;
        uint256 endTime;
        address bider;
    }

mapping(uint => AuctionInfo) private _tokensOnAuction;
```

<br>
<br>

#### <์ํ ๋ถ๋ฅ>

๊ฒฝ๋งค ๊ด๋ จ๋ ์ปจํธ๋ ํธ๋ฅผ ์ง๋๋ฐ ์์ด์ ๊ฒฝ๋งค์ํ์๋ํ ๋ถ๋ฅ๋ฅผ ์ผ๋ง๋ ํจ์จ์ ์ผ๋ก ํ๋๊ฐ๊ฐ ๊ฐ์ฅ ์ค์ํ ๋ฌธ์ ์๋ค.<br>
์ต์ข์ ์ผ๋ก ์ํ์ ์ด 4๊ฐ์ง๋ก ๋ถ๋ฅํ๋ค.

- ๊ฒฝ๋งค ์งํ์ค์ธ ์ํ
- ๊ฒฝ๋งค๋ ๋ง๊ฐ ๋์ง๋ง, ์ ์ฐ๋์ง์์ ์ํ
- ๊ฒฝ๋งค๋ง๊ฐ & ์ ์ฐ์ด ์๋ฃ๋ ์ํ
- ๊ฒฝ๋งค๊ฐ ์ ์ฐฐ๋ ์ํ

1. ๊ฒฝ๋งค ์งํ์ค์ธ ์ํ :
   <br>

   ๊ฒฝ๋งค๊ฐ ์งํ์ค์ธ ์ํ์ ๊ตฌ๋ณํ๋ ๊ธฐ์ค์ endTime(๊ฒฝ๋งค ๋ง๊ฐ์๊ฐ) ํ๊ฐ์ง.<br>
   endTime > block.timestamp<br>
   ์ ์กฐ๊ฑด์ ๋ถํฉํ๋ ๋ชจ๋  ์ํ์ ๊ฒฝ๋งค๊ฐ ์งํ์ค์ธ ์ํ์ผ๋ก ๋ถ๋ฅ๋๋ค.

   <image src="https://user-images.githubusercontent.com/107898015/221679237-aee22fde-33c2-4feb-ae2b-cf7b2c20d2e9.png" width="150">

2. ๊ฒฝ๋งค๋ ๋ง๊ฐ ๋์ง๋ง, ์ ์ฐ๋์ง์์ ์ํ:
   <br>

   ๊ฒฐ๋ก ๋ถํฐ ๋งํ์๋ฉด endTIme(๊ฒฝ๋งค ๋ง๊ฐ์๊ฐ) < block.timestamp(ํ์ฌ์๊ฐ) <br>
   bider ! = address(0)<br> ๋ ์กฐ๊ฑด์ ๋ง์กฑ์ํค๋ฉด ๊ฒฝ๋งค๋ ๋ง๊ฐ๋์ง๋ง ์ ์ฐ๋์ง ์์ ์ํ์ด๋ค.<br><br>
   ์ถ๊ฐ์ ์ผ๋ก ๊ฒฝ๋งค ์ ์ฐ์ ์ํค๋ ๋ก์ง์ ์ค๋ชํ์๋ฉด<br>
   ์ ์ฐํ๋ ํจ์๋ฅผ ์คํ์ํฌ๋ ๋ฆฌ์ํด์ฃผ๋ ๊ฐ์ ์์ฐฐ์(bider) ํ๊ฐ์ง์ด๋ค.<br>
   ๊ฒฝ๋งค๋ง๊ฐ์๊ฐ(endTIme) ๊ฐ์ ์ด๋ฏธ block.timestamp(๋ง์ง๋ง ๋ธ๋ก์์ฑ์๊ฐ == ํ์ฌ์๊ฐ) ๊ฐ๋ณด๋ค ์์์ก๊ธฐ๋๋ฌธ์ ๋ฆฌ์ํด์คํ์๊ฐ์๊ณ ,<br>
   ์ต์ข์์ฐฐ๊ฐ(lastBidPrice)๋ ์ํ๊ฐ์ ๋ถ๋ฅ๋ฅผ ์ํด์ ์ ํ ํ์ํ ๊ฐ์ด ์๋๊ธฐ๋๋ฌธ์ ๋ฆฌ์ํด์ค ํ์๊ฐ ์๋ค.<br>
   ๊ฒฐ๊ตญ ์์ฐฐ์(bider)๊ฐ ํ๋๋ง์ ๋ฆฌ์์์ผ์ ํจ์จ์ ์ผ๋ก ์ ์ฐ์ ๋ฌด ๋ณ๊ฒฐ์ํฌ ์ ์์๋ค.

   <image src="https://user-images.githubusercontent.com/107898015/221679635-7fce7533-4bed-4cac-a9a1-f83a1540f9c4.png" width="150">

3. ๊ฒฝ๋งค๋ง๊ฐ & ์ ์ฐ์๋ฃ ์ํ( + ๊ฒฝ๋งค๊ฐ ์ ์ฐฐ๋ ์ํ):
   <br>

   ๊ฒฝ๋งค๋ง๊ฐ & ์ ์ฐ์๋ฃ ์ํ๊ณผ, ๊ฒฝ๋งค๊ฐ ์ ์ฐฐ๋ ์ํ์ ๋๋ค ๋ฐ๋ก ํ์ฒ๋ฆฌ๊ฐ ํ์์๊ธฐ ๋๋ฌธ์ ๊ตฌ๋ถ์ง์ ํ์๊ฐ ์์๋ค.<br>

   - endTime(๊ฒฝ๋งค ๋ง๊ฐ์๊ฐ) < block.timestamp (ํ์ฌ์๊ฐ) โ ๊ฒฝ๋งค ๋ง๊ฐ๋จ
   - bider == address(0) โ ์ ์ฐ์ด ๋๊ฑฐ๋ ํน์ ์ ์ฐฐ๋์

   <image src="https://user-images.githubusercontent.com/107898015/221682255-38f33aef-5606-4936-981c-8ea7a6550a64.png" width="150">
