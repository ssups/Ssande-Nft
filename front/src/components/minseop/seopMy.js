import React from "react";
import useWeb3 from "../../hooks/useWeb3";
import TestTokenContract from "../../contracts_seop/TestToken.json";

const SeopMy = () => {
  const [account, web3, balance] = useWeb3();
  return <div>SeopMy</div>;
};

export default SeopMy;
