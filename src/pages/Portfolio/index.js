import {Link} from "react-router-dom"
import styled, { keyframes } from 'styled-components';
import icons from "assets/tokenIcons"
import React, {useState, useEffect} from "react";
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import WalletManageBox from './components/WalletManageBox'
import WalletBalance from './components/WalletBalance'
import WalletHistory from './components/WalletHistory'
import TotalBalanceBox from './components/TotalBalanceBox'
import PositionList from './components/PositionList'

import 'App.css'; 
import './index.css';

function Portfolio() {

  const [userBalance, useUserBalance] = useState({
    totalValue : 21212,
    positionList : [
      {
        type: 'lending',
        protocol: 'klaybank',
        totalStats: {
          totalCollateralUSD: 1233.000129039337,
          totalDebtUSD: 300.20251400945,
          netValue: 932.7976150298871
        },
        detailStats: {
          CollateralList: {"tokenName":"KLAY","tokenAmount":6000.000296639029,"tokenPrice":0.2055,"tokenValue":1233.0000609593205},
          DebtList: {"tokenName":"oUSDT","tokenAmount":300.000014,"tokenPrice":1.000675,"tokenValue":300.20251400945},
          healthRate: 2.6854849986208764
        },
        poolAddress: '0x4b6ece52d0ef60ae054f45c45d6ba4f7a0c2cc67'
      }
    ],
    walletHistory : [
      {
        type: 'send',
        date: '2023-11-08',
        time: '23:03',
        send: {
          tokenAmount: '0.010',
          toAddr: '0x1e572678738674481de656233e8456bbc4b3b0ab',
          tokenName: 'KLAY'
        },
        receive: [],
        interaction: { type: 'application', detail: 'haha' }
      },
      {
        type: 'swap',
        date: '2023-11-08',
        time: '11:37',
        send: {
          tokenAmount: '75.587',
          toAddr: '0xe18bc93d39f5795f02ef88a0c63ba6af3fa7338d',
          tokenName: 'oUSDT'
        },
        receive: {
          tokenAmount: '534.171',
          fromAddr: '0x804903569b0f071efae7f93ec3655701ce360103',
          tokenName: 'KLAY'
        },
        interaction: { type: 'application', detail: 'swapscanner' }
      },
      {
        type: 'swap',
        date: '2023-11-08',
        time: '11:37',
        send: {
          tokenAmount: '1.518',
          toAddr: '0x68d19a7cae31b12d9ea932cfec4104db0a766ca6',
          tokenName: 'KCD'
        },
        receive: {
          tokenAmount: '10.783',
          fromAddr: '0x804903569b0f071efae7f93ec3655701ce360103',
          tokenName: 'KLAY'
        },
        interaction: { type: 'application', detail: 'swapscanner' }
      },
      {
        type: 'approve',
        date: '2023-11-08',
        time: '11:37',
        send: [],
        receive: [],
        interaction: { type: 'application', detail: 'swapscanner' }
      },
      {
        type: 'withdrawAll',
        date: '2023-11-08',
        time: '11:36',
        send: [],
        receive: {
          tokenAmount: '600.000',
          fromAddr: '0x0de3b6163852fb47508578f92ae1d352692304cf',
          tokenName: 'KLAY'
        },
        interaction: { type: 'application', detail: 'kurrency' }
      },
      {
        type: 'send',
        date: '2023-11-08',
        time: '11:36',
        send: {
          tokenAmount: '35.000',
          toAddr: '0xe2e1d0601e16bbc502251a76853bddda1f9b33cb',
          tokenName: 'KCD'
        },
        receive: [],
        interaction: { type: 'application', detail: 'kurrency' }
      },
      {
        type: 'withdrawAll',
        date: '2023-11-08',
        time: '11:36',
        send: [],
        receive: {
          tokenAmount: '75.587',
          fromAddr: '0xe2e1d0601e16bbc502251a76853bddda1f9b33cb',
          tokenName: 'oUSDT'
        },
        interaction: { type: 'application', detail: 'kurrency' }
      },
      {
        type: 'send',
        date: '2023-11-08',
        time: '11:35',
        send: {
          tokenAmount: '61.180',
          toAddr: '0xe2e1d0601e16bbc502251a76853bddda1f9b33cb',
          tokenName: 'KCD'
        },
        receive: [],
        interaction: { type: 'application', detail: 'kurrency' }
      },
      {
        type: 'approve',
        date: '2023-11-08',
        time: '11:35',
        send: [],
        receive: [],
        interaction: { type: 'application', detail: 'kurrency' }
      },
      {
        type: 'unstakeAll',
        date: '2023-11-08',
        time: '11:35',
        send: {
          tokenAmount: '61.310',
          toAddr: '0x0000000000000000000000000000000000000000',
          tokenName: 'kKCD'
        },
        receive: {
          tokenAmount: '72.698',
          fromAddr: '0x5fcec2586c614857005676f1f194a3d104f37e75',
          tokenName: 'KCD'
        },
        interaction: { type: 'application', detail: 'kurrency' }
      },
      {
        type: 'receive',
        date: '2023-11-08',
        time: '11:33',
        send: [],
        receive: {
          tokenAmount: '1088.000',
          fromAddr: '0x1e572678738674481de656233e8456bbc4b3b0ab',
          tokenName: 'KLAY'
        },
        interaction: { type: 'application', detail: 'haha' }
      },
      {
        type: 'swap',
        date: '2023-11-06',
        time: '17:21',
        send: {
          tokenAmount: '266.162',
          toAddr: '0xd137babb233045bc28734dcea8b02a30a75c1838',
          tokenName: 'oUSDT'
        },
        receive: {
          tokenAmount: '1883.278',
          fromAddr: '0x804903569b0f071efae7f93ec3655701ce360103',
          tokenName: 'KLAY'
        },
        interaction: { type: 'application', detail: 'swapscanner' }
      },
      {
        type: 'claimRewards',
        date: '2023-11-06',
        time: '17:20',
        send: [],
        receive: {
          tokenAmount: '729.080',
          fromAddr: '0x62e92bd61c20d3e40699a3f5f5332b3928243ab2',
          tokenName: 'KBT'
        },
        interaction: { type: 'application', detail: 'klaybank' }
      },
      {
        type: 'withdraw',
        date: '2023-11-06',
        time: '17:20',
        send: {
          tokenAmount: '266.162',
          toAddr: '0x0000000000000000000000000000000000000000',
          tokenName: 'bKUSDT'
        },
        receive: {
          tokenAmount: '266.162',
          fromAddr: '0x241758b187714f6763787d01e365b2ef9aa71370',
          tokenName: 'oUSDT'
        },
        interaction: { type: 'application', detail: 'klaybank' }
      },
      {
        type: 'swap',
        date: '2023-11-06',
        time: '17:18',
        send: {
          tokenAmount: '229.687',
          toAddr: '0xd137babb233045bc28734dcea8b02a30a75c1838',
          tokenName: 'oUSDT'
        },
        receive: {
          tokenAmount: '1624.005',
          fromAddr: '0x804903569b0f071efae7f93ec3655701ce360103',
          tokenName: 'KLAY'
        },
        interaction: { type: 'application', detail: 'swapscanner' }
      },
      {
        type: 'swap',
        date: '2023-11-06',
        time: '17:16',
        send: [],
        receive: {
          tokenAmount: '229.687',
          fromAddr: '0x0000000000000000000000000000000000000000',
          tokenName: 'oUSDT'
        },
        interaction: { type: 'application', detail: 'haha' }
      },
      {
        type: 'deposit',
        date: '2023-10-24',
        time: '12:37',
        send: {
          tokenAmount: '60.006',
          toAddr: '0x241758b187714f6763787d01e365b2ef9aa71370',
          tokenName: 'oUSDT'
        },
        receive: {
          tokenAmount: '60.006',
          fromAddr: '0x0000000000000000000000000000000000000000',
          tokenName: 'bKUSDT'
        },
        interaction: { type: 'application', detail: 'klaybank' }
      },
      {
        type: 'receive',
        date: '2023-10-24',
        time: '12:37',
        send: [],
        receive: {
          tokenAmount: '58.989',
          fromAddr: '0x1e572678738674481de656233e8456bbc4b3b0ab',
          tokenName: 'oUSDT'
        },
        interaction: { type: 'application', detail: 'haha' }
      },
      {
        type: 'send',
        date: '2023-10-24',
        time: '12:22',
        send: {
          tokenAmount: '58.942',
          toAddr: '0x1e572678738674481de656233e8456bbc4b3b0ab',
          tokenName: 'USDC'
        },
        receive: [],
        interaction: { type: 'application', detail: 'haha' }
      },
      {
        type: 'withdraw',
        date: '2023-10-24',
        time: '12:14',
        send: {
          tokenAmount: '60.620',
          toAddr: '0x0000000000000000000000000000000000000000',
          tokenName: 'KDAUSDC'
        },
        receive: {
          tokenAmount: '58.942',
          fromAddr: '0xd0971c067b140df013fde52e43c514aa8b1e931f',
          tokenName: 'USDC'
        },
        interaction: { type: 'application', detail: 'haha' }
      }
    ]
  })

  // const [isloading, setIsloading] = useState(false)
  // const [selectedItems, setSelectedItems] = useState([]);

  // const userAccount = useSelector(state => state.account) // 지갑주소
  // const walletProvider = useSelector(state => state.walletProvider) // 프로바이더

  return (
    <>
      <div class="bg-gray-50 h-screen">
        <div class="p-4">   
          <OverBox class="bg-gradient-to-r from-green-100 to-blue-200" >
            <SubTemplateBlockVertical>     

              <Wrappertitle >
                  <Title>Portfolio</Title>               
              </Wrappertitle>

              <WalletManageBox />

              <TotalBalanceBox data={userBalance.totalValue}/>

              <Tabs class="pt-5">

                <TabList>
                  <Tab>Positions</Tab>
                  <Tab>Wallet</Tab>
                  <Tab>History</Tab>
                </TabList>

                <TabPanels>

                  <TabPanel> 
                    <PositionList data={userBalance.positionList}/>           
                  </TabPanel>

                  <TabPanel>
                    <WalletBalance />
                  </TabPanel>

                  <TabPanel>
                    <WalletHistory data={userBalance.walletHistory}/>
                  </TabPanel>
                  
                </TabPanels>

              </Tabs>
           </SubTemplateBlockVertical>
          </OverBox>
        </div>
      </div>

    </>
  );
}


const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const ProductSkeleton = styled.div`
  display: inline-block;
  height: ${props => props.height || "20px"};
  width: ${props => props.width || "50%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-top: ${props => props.marginTop || "0"}
`;



const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
`

const Wrappertitle = styled.div`
  margin: 0px auto 10px auto;
  /* width: 1136px; */
  @media screen and (max-width: 950px){
    width: 100%;
    padding-top: 20px;
    color: black;
  }
  @media screen and (max-width: 500px){
    width: 100%;
    padding-top: 20px;
    /* color: gray; */
  }
`

const OverBox = styled.div`

`

const SubTemplateBlockVertical = styled.div`
    margin: 10px auto;
    max-width: 800px;
    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    padding:15px;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    min-width: 0px;
    overflow-wrap: break-word;
    
  @media screen and (max-width: 500px){
      width: 100%;
      font-size: 12px;
    }
`;


export default Portfolio;

