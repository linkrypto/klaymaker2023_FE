import React, {useContext, useState, useEffect} from "react";
import icons from "assets/tokenIcons"
import poolInfos from "./poolInfos.json"
import {Link} from "react-router-dom"
import styled, { keyframes } from 'styled-components';
import {useNavigate} from 'react-router-dom';

function KlayStakingTable(props) {

    console.log("props", props)

    const navigate = useNavigate();

    // useEffect(() => {    
    //   return () => {
    //     setPooldata()
    // }
    // }, [])
    

    // const pooldata = props.data.klayProtocolCategory

    const [pooldata, setPooldata] = useState([
        {
            "poolName": "Ozys (Klaystation)",
            "contractAddress": "0xe33337cb6fbb68954fe1c3fde2b21f56586632cd",
            "category": "node-Staking",
            "investedKLAY": 7.21,
            "tvlKLAY": 166053093,
            "tvlKRW": 47956133258.4,
            "apr": 5.67,
            "liqToken": "sKLAY",
            "unStakingOption": [
                "스왑",
                "7일대기"
            ]
        },
        {
            "poolName": "Stake.ly",
            "contractAddress": "0xf80f2b22932fcec6189b9153aa18662b15cc9c00",
            "category": "node-Staking",
            "investedKLAY": 1.0302,
            "tvlKLAY": 86769464,
            "tvlKRW": 25059021203.2,
            "apr": 6,
            "liqToken": "stKLAY",
            "unStakingOption": [
                "7일대기"
            ]
        },
        {
            "poolName": "Swapscanner",
            "contractAddress": "0xf50782a24afcb26acb85d086cf892bfffb5731b5",
            "category": "node-Staking",
            "investedKLAY": 2121.312354,
            "tvlKLAY": 73203690.37578553,
            "tvlKRW": 21141225780.526863,
            "apr": 6.242580760723835,
            "liqToken": "X",
            "unStakingOption": [
                "스왑",
                "7일대기"
            ]
        },
        {
            "poolName": "Klayswap",
            "contractAddress": "0xe4c3f5454a752bddda18ccd239bb1e00ca42d371",
            "category": "Lending",
            "investedKLAY": 0.000001982720951333,
            "tvlKLAY": 23934822.7031,
            "tvlKRW": 6912376796.65528,
            "apr": 1.52
        }
    ])
    
      const homeJson = {
        "Klayswap" : "https://klayswap.com/exchange/pool",
        "Kokonutswap" : "https://kokonutswap.finance/pools",
        "Klaymore": "https://klaystake.house/",
        "klaystation": "https://klaystation.io/staking",
        "stakely": "https://stake.ly/klay",
        "klexfinance": "https://app.klex.finance/",
        "PangeaSwap": "https://app.pangeaswap.com/pool",
        "hashquark": "https://klayportal.hashquark.io/",
        "Claimswap": "https://app.claimswap.org/",
        "PALA": "https://pala.io/dex"
      }

    

    const [investedAsset, setInvestedAsset] = useState({
        "isInvested": false,
        "totalInvested": 0,
        "totalDailyIncome": 0,
        "totalApr": 0,
        "klayInvestedinKlay": 0,
        "klayInvestedinKRW": 0,
        "klayDailyIncomeKlay": 0,
        "klayDailyIncomeKRW": 0,
        "KlayTotalApr": 0,
        "investCategory": {
            "klayStaking": 0,
            "ousdtStaking": 0
        },
        "klayStaking": {
            "Min": 0,
            "Max": 0,
            "balance": 0
        },
        "ousdtStaking": {
            "Min": 0,
            "Max": 0,
            "balance": 0
        },
        "klayAprStatus": {
          "myStatus": 0,
          "maxApr": 0
        },
        "klayProtocolCategorySummary":[
          {"":0},{"":0}
        ],
        "klayProtocolCategory": [
          {
            "poolName": "hashed-Ozys (Klaystation)",
            "category": "노드 스테이킹",
            "investedKLAY": 0,
            "tvlKLAY": 0,
            "tvlKRW": 0,
            "apr":0,
            "liqToken": "sKLAY",
            "unStakingOption": [
                "스왑",
                "7일대기"
            ]
          }
      ]
    })

    function clickHandler(contAddr,e) {
        e.preventDefault();
        console.log("contAddr",contAddr)
        navigate(`/detail/staking/${contAddr}`);
      }

    return (

    <>
<div class="">
    <div class="p-3 px-0">
  <table class="w-full">

    <thead class="border-y border-gray-200 bg-white">
      <tr>
        <th class="bg-blue-gray-50/50 pl-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-left">Token/Protocol/Chain</p>
        </th>
        <th class="bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-left">Type</p>
        </th>
        <th class="bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-left">Net APY</p>
        </th>
        <th class="bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-right">Liquidity</p>
        </th>
      </tr>
    </thead>
    
    <tbody>

      {pooldata.map((res) => (
      <tr class="border-b border-gray-100 cursor-pointer hover:bg-white hover:border border-gray-200" onClick={(e)=>{clickHandler(res.contractAddress, e)}}>
        <td>
          <div className="flex items-center gap-3 p-5">
          <PoolinfoBox>
                    <Iconbox>
                    <div class="flex-shrink-0">
                          {res.poolName === "Kokoa Finance" ?
                          <img class="w-8 h-8 rounded-full" src={icons["Kokoa"]} alt=""/> :      
                          res.poolName === "Kleva" ?      
                          <img class="w-8 h-8 rounded-full" src={icons["kleva"]} alt=""/> :  
                          res.poolName === "Klaymore stakehouse" ?      
                          <img class="w-8 h-8 rounded-full" src={icons["Klaymore"]} alt=""/> :  
                          res.poolName === "Stake.ly" ?      
                          <img class="w-8 h-8 rounded-full" src={icons["stakely"]} alt=""/> :  
                          res.poolName === "Swapscanner" ?      
                          <img class="w-8 h-8 rounded-full" src={icons["Swapscanner"]} alt=""/> :  
                          res.poolName === "Klayswap" ?      
                          <img class="w-8 h-8 rounded-full" src={icons["Klayswap"]} alt=""/> :  
                          res.poolName === "BiFi" ?      
                          <img class="w-8 h-8 rounded-full" src={icons["BiFi"]} alt=""/> :  
                          res.poolName === "Klaybank" ?      
                          <img class="w-8 h-8 rounded-full" src={icons["Klaybank"]} alt=""/> :  
                          <img class="w-8 h-8 rounded-full" src={icons["Klaystation"]} alt=""/>
                          }
                      </div>
                    </Iconbox>
                    <Explainbox>
                    <Protocol style={{fontWeight:"500", fontSize:"13px"}}>
                        {res.poolName}
                    </Protocol>
                    <Token>
                        Klaytn
                    </Token>
                    </Explainbox>
                  </PoolinfoBox>
        </div>
        </td>

        <td className="p-4">
        <Th style={{fontSize:"15px", fontWeight:"500"}}>
            {res.category}
        </Th>
        </td>
        <td className="p-4">
        <Th style={{fontSize:"15px", fontWeight:"500"}}>
            {res.apr.toFixed(1)} %
        </Th>
        </td>
        <td className="p-4 text-right">
          <div className="">
            <div style={{fontSize:"15px", fontWeight:"500"}}>
                $ {(res.tvlKLAY/1000000).toFixed(1)} M
            </div>
          </div>
        </td>
     </tr>
     
      ))}
    </tbody>
  </table>

</div>

</div>
  </>
  )
}

function TransScale(props) {

    return (
      <>
        풀 규모 :   
        {props.data > 100000000 ?
          " " + (props.data / 100000000).toFixed(2) + " 억원"
          : props.data >  10000 ?
          " " + (props.data / 10000).toFixed(2) + " 만원"
          :
          " " + props.data
        }
      </>
    )
  
  }

  const Span = styled.span`
  cursor: pointer;
  /* color: gray;
  float: right; */

  /* &:hover {
    color: blue;
    text-decoration: underline;
  }; */
`


const Protocol = styled.div`
  padding-left: 15px;
  /* text-decoration: underline; */
  font-size: 12px;
  
`

const Token = styled.div`
  padding-left: 15px;
    color: #657795;
    font-size: 11px;
    text-align: left;
`

const Explainbox = styled.div`
  display : flex;
  flex-direction : column;
`

const PoolinfoBox = styled.div`
  text-align: left;
  display : flex;
  flex-direction : row;
  align-items: center;
`

const Img = styled.img`
    /* width: 50px; */
    height: 30px;
    /* width: */
    /* /* height:25px;  */
    border:1px solid #eaeaea;
    border-radius:50%;
    background-color: #f5f5f5;
    /* padding: 1px; */
    /* background-color:ㅎㄱ묘; */
  `

const Imgs = styled.img`
  width: 20px;
  height: 20px;
  border: 0.5px solid #eaeaea;
  border-radius:50%;
`

const Iconwrapper = styled.div`
    /* width: 30px;
    height: 20px; */
    /* overflow: hidden; */
`

const Iconbox = styled.div`
  display: flex;
  flex-direction: row;
`


const TodoTemplateBlock = styled.div`
  /* width: 100%; */
  width:1024px;
  /* max-height: 1024px; */

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 1px 1px 1px gray;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  /* margin-top: 16px; */
  margin-bottom: 16px;
  padding-left:18px;
  padding-right:20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;

  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  min-width: 0px;
  overflow-wrap: break-word;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  overflow: visible;
  
  .loader {
    margin-left:200px;
  }
  
  @media screen and (max-width: 950px){
    width: 90%;
    padding-left:20px;
    padding-right:20px;
    border-radius: 8px;
    box-shadow: 1px 1px 1px gray;

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    min-width: 0px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    background-clip: border-box;
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.75rem;
    box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
    overflow: visible;

    .loader {
      margin-left:135px;
    }
    .mobtrans{
      display:none;
    }
    .tablecss{
      font-size:13px;
      
    }
    /* .head{
    }
    .headcol:before {
      content: 'Row ';
    }
  .content {
    background: #8cdba3;
} */
  }
`;

const Th = styled.th`
  height:25px;
  vertical-align:middle;
  padding-left:5px;
  @media screen and (max-width: 500px){
    max-width: 150px;
  }

`;

const Tdc = styled.td`
  @media screen and (max-width: 500px){
    display:none;
  }
  height:25px;
  vertical-align:middle;
`;


const Td = styled.td`
  height:25px;
  vertical-align:middle;
`

const Tr = styled.tr`
  &:hover {
    background-color: #E8E8E8;
  }
`



  


export default KlayStakingTable;