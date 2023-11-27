import styled from 'styled-components';
import React, {useRef,useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import Features from './components/features/index'
import Products from './components/products/index'
import KlayStakingTable from "./components/klayStakingTable"
import StableLendTable from "./components/stableLendTable"

import klaytnLogo from "../../assets/ci/klaytn-logo.png"
import wemixLogo from "../../assets/ci/wemix-icon.webp"

const selector = [
  { type: 'Earn',
    token: "KLAY"
  },
  { type: 'Borrow',
    token: "STABLE" }
]


function Landing() {

  const [select, setSelect] = useState(selector[0])
  const homeRef = useRef(null);
  
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/products');
  };

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

  useEffect(() => {

    console.log("select",select)

  }, [select])
  

  return (
    <>

    <Heading props={homeRef}/>
    <Features />

    <div class="bg-gray-50 py-20 sm:py-20" ref={homeRef}>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Let's Start!</h2>
          <Products select={select} setSelect={setSelect}/>
          {select.type === "Earn" ?
            <KlayStakingTable data={investedAsset}/>
            :
            <StableLendTable data={investedAsset} />
          }

          <button onClick={handleButtonClick} type="button" data-modal-target="crypto-modal" data-modal-toggle="crypto-modal" class="text-black ml-1 bg-white hover:bg-gray-100 border border-gray-200 hover:bg-blue-100 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
          ... show all
        </button>
        <div style={{height:"12px"}} />
        <hr />
        </div>
      </div>
    </div>

    


    <Footer />

    </>
  );
}



function Heading (props) {

  // console.log("props", props.props)

  const onHomeClick = () => {
    props.props.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (

    <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 bg-gradient-to-r from-green-100 to-blue-200">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        DeFi {' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
          </svg>
          <span className="relative">made simple</span>
        </span>{' '}
        for <br /> Crypto Investors
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      Enhance profits easily while minimizing risks with Linkrypto.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <a
          className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
          variant="solid"
          color="slate"
          href="/portfolio"
        >
          Manage Assets
        </a>
        <button
          className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
          onClick={onHomeClick}
        >
          <svg aria-hidden="true" className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
          </svg>
          <span className="ml-3">Find Investment</span>
        </button>
      </div>
      <div className="mt-20 lg:mt-30">
        <p className="font-display text-base text-slate-900">Supported Chain</p>
        <ul role="list" className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          <li>
            <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <LogoNetwork target="_blank" class="logo-network" href="https://ethereum.org" title="https://ethereum.org" rel="noreferrer"><img src={klaytnLogo} alt="Klaytn" style={{width:"60px", borderRadius:"50%"}}/><span class="logo_label font-normal text-gray-500">Klaytn</span></LogoNetwork>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <LogoNetwork target="_blank" class="logo-network" href="https://ethereum.org" title="https://ethereum.org" rel="noreferrer"><img src={wemixLogo} alt="Klaytn" style={{width:"60px", borderRadius:"50%"}}/><span class="logo_label font-normal text-gray-500">Wemix 3.0</span></LogoNetwork>
            </ul>
          </li>
        </ul>
      </div>
    </div>

  )
}

function Footer () {

  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
          <span class="hover:underline"> Pure Velley Labs™</span>. All Rights Reserved.
        </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {/* <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li> */}
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}


const LogoNetwork = styled.div`
    display: grid;
    gap: 16px;
    grid-template-rows: 60px 1fr;
    justify-items: center;
    max-width: 135px;
    width: 100%;
    color: inherit;
`

export default Landing;

