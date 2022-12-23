import React, { useEffect, useState } from "react";

import NftInfo from "./NftInfo_j";
import useWeb3 from "../../hooks/useWeb3_j";
import useContract from "../../hooks/useContract_j";
import TestTokenContract from "../../contracts/TestToken.json";

const MyNfts = () => {
  //
  const [, account] = useWeb3();
  const testTokenInstance = useContract(TestTokenContract);

  const [myNftsURI, setMyNftsURI] = useState({});

  // ==========================================useEffect==========================================
  // =============================================================================================

  // 컨트랙트 인스턴스
  useEffect(() => {
    //
    (async () => {
      //
      if (!testTokenInstance) return;

      // 보유 토큰 조회 및 토큰의 JSON 객체가 담긴 파일 경로 가져오기
      const tokenURI = {};
      const tokenIds = await testTokenInstance.methods.tokensOfOwner(account).call();

      for (const tokenId of tokenIds) {
        tokenURI[tokenId] = await testTokenInstance.methods.tokenURI(tokenId).call();
      }
      setMyNftsURI(tokenURI);
    })();

    // 메타마스크의 접속 계정 변경 시 고려
  }, [testTokenInstance, account]);

  return (
    <div>
      <div>나의 NFT</div>
      <div style={{ display: "flex" }}>
        {/*  */}
        {myNftsURI &&
          Object.keys(myNftsURI).map((tokenId) => {
            return <NftInfo key={tokenId} tokenId={tokenId} nftURI={myNftsURI[tokenId]} />;
          })}
        {/*  */}
      </div>

      <div style={{ marginTop: "100px" }}>
        <input className="buy-button" type="number" placeholder="토큰ID" />
        <button>구매하기 (test용)</button>
      </div>

      <div>
        <input className="register-sell-button" type="number" placeholder="토큰ID" />
        <button>판매 상품으로 등록하기</button>
      </div>

      <div>
        <input className="register-auction-button" type="number" placeholder="토큰ID" />
        <button>경매 상품으로 등록하기</button>
      </div>
    </div>
  );
};

export default MyNfts;
