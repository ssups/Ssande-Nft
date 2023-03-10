import React, { useEffect, useRef, useState, useContext } from "react";
import useWeb3 from "../../hooks/useWeb3";
// import TestTokenContract from "../../contracts/TestToken.json";
// import useContract from "../../hooks/useContract";
import useSsandeContracts from "../../hooks/useSsandeContracts";
import { Context } from "../../App";

const Minseop = () => {
  const netWorkId = 7722;

  //context
  const { account, web3, balance } = useContext(Context);
  // hooks
  const [testTokenInstance, testTradeInstance] = useSsandeContracts();
  // states
  const [owner, setOwner] = useState();
  const [isMintOn, setIsMintOn] = useState();
  const [mintPrice, setMintPrice] = useState();
  const [maxAmountPerMint, setMaxAmountPerMint] = useState();
  const [currentSupply, setCurrentSupply] = useState();
  const [maxSupply, setMaxSupply] = useState();
  // ref
  const priceRef = useRef();
  const mintQuantityRef = useRef();

  //   // ==========================================useEffect==========================================
  //   // =============================================================================================

  // 컨트렉트랑 연결되면 실행시킬것들
  useEffect(() => {
    if (!testTokenInstance) return;
    // 누군가 민팅할때마다 현재공급량 고쳐주기(이벤트)
    testTokenInstance.events.MintTestToken((err, data) => {
      setCurrentSupply(data.returnValues.totalSupply);
    });
    // 민팅시작되거나 가격바뀌면 실행(이벤트)
    testTokenInstance.events.SetMintOn((err, data) => {
      const price = data.returnValues.mintPrice;
      const priceToEth = web3.utils.fromWei(price, "ether");
      setMintPrice(priceToEth);
      setIsMintOn(data.returnValues.isMintOn);
    });

    (async () => {
      // owner계정 가져오기
      const ownerAccount = await testTokenInstance.methods.owner().call();
      setOwner(ownerAccount);
      // 민팅 진행중인지 확인
      const mintState = await testTokenInstance.methods.isMintOn().call();
      setIsMintOn(mintState);
      // 민트 한번에 최대갯수 가져오기
      const maxAmount = await testTokenInstance.methods.maxAmountPerMint().call();
      setMaxAmountPerMint(maxAmount * 1);
      // 총 발행량 가져오기
      const collectionSize = await testTokenInstance.methods.maxSupply().call();
      setMaxSupply(collectionSize);
      // 가지고있는토큰 확인하는거 테스트
      // const tokensOfOwner = await testTokenInstance.methods.tokensOfOwner(account).call();
      // console.log(tokensOfOwner);
    })();
  }, [testTokenInstance]);

  // 민팅 시작되면 가져올 값들
  useEffect(() => {
    (async () => {
      if (!(isMintOn && testTokenInstance)) return;
      // 민팅가격
      const price = await testTokenInstance.methods.mintPrice().call();
      const priceToEth = web3.utils.fromWei(price, "ether");
      setMintPrice(priceToEth);

      // 현재 발행량
      const supplyAmount = await testTokenInstance.methods.totalSupply().call();
      setCurrentSupply(supplyAmount);

      // 토큰URI 테스트용
      //   const tokeUri = await testTokenInstance.methods.tokenURI(1).call();
      //   console.log(tokeUri);
    })();
  }, [isMintOn, testTokenInstance]);

  //   // =============================================================================================
  //   // =============================================================================================

  //   // ==========================================functions==========================================
  //   // =============================================================================================

  // 민팅 시작시키기(owner만 실행가능)
  async function startMint(price) {
    if (!price > 0) {
      alert("가격다시");
      return;
    }
    const adjustedPrice = web3.utils.toWei(price, "ether");
    testTokenInstance.methods.setMintOn(adjustedPrice).send({ from: account });
  }

  // 민팅하기
  async function mint(quantity) {
    const remainingAmount = maxSupply - currentSupply;
    const totalPayment = quantity * web3.utils.toWei(mintPrice, "ether");
    if (!quantity > 0) {
      alert("수량 0개이상");
      return;
    }
    if (quantity > maxAmountPerMint) {
      alert("민트한번당 최대갯수 3개입니다");
      return;
    }
    if (remainingAmount < quantity) {
      alert("남은수량이 부족합니다");
      return;
    }
    if (totalPayment > balance) {
      alert("잔액부족");
      return;
    }

    try {
      await testTokenInstance.methods
        .mintTestToken(quantity)
        .send({ from: account, value: totalPayment });
    } catch (err) {
      alert(err.message);
    }
    // await testTokenInstance.methods
    //   .mintTestToken(quantity)
    //   .send({ from: account, value: totalPayment })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err.message));
  }

  //   // =============================================================================================
  //   // =============================================================================================

  //   // ===========================================returns===========================================
  //   // =============================================================================================

  // console.log(account);
  if (!account) return <h1>지갑 연결하세요</h1>;
  return (
    <div
      style={{
        color: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {account?.toLowerCase() === owner?.toLowerCase() && (
        <div style={{}}>
          <input type="number" ref={priceRef} />
          <button onClick={() => startMint(priceRef.current.value)}>
            민팅시작하기 , 민팅가격 바꾸기
          </button>
        </div>
      )}
      <div>{isMintOn ? "민팅진행중 가격: " + mintPrice + "Eth" : "민팅시작전"}</div>
      <div>
        {isMintOn ? currentSupply : 0} / {maxSupply}
      </div>
      {isMintOn && (
        <div>
          <input type="text" ref={mintQuantityRef} disabled={currentSupply === maxSupply} />
          <span></span>
          <button
            onClick={() => mint(mintQuantityRef.current.value * 1)}
            disabled={currentSupply === maxSupply}
          >
            Mint
          </button>
        </div>
      )}
    </div>
  );
};

export default Minseop;
