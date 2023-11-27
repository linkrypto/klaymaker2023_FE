import React from "react";
import icons from "assets/tokenIcons"
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PositionList = (props) => {


const navigate = useNavigate();

  const positionData = props.data

  function goProtocol () {
    navigate("/detail/Lending/klaybank")
  }

  return (
    <div>  

      {positionData.map((data)=>(
         <div class="bg-white p-3 cursor-pointer hover:border border-blue-300 rounded-lg mb-5" onClick={goProtocol}>
        <table class="w-full">
        <thead class="">
                <tr>
                <th class="bg-blue-gray-50/50 p-2" colSpan={4} >
                    <div class="flex flex-row block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-left">                       
                       <Img src={icons["Klaybank"]} alt="logo" /> 
                       <div style={{marginTop:"8px", marginLeft:"10px", marginRight:"10px"}}>Klaybank</div>
                       <div style={{marginTop:"8px", marginLeft:"10px"}}>
                        <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Active</span>
                       </div>
                       <div style={{marginTop:"8px", marginLeft:"10px"}}>
                        <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Noti</span>
                       </div>
                       
                       
                    </div>
                </th>
                <th class="bg-blue-gray-50/50 p-2" >

                </th>
                </tr>
            </thead>

      
            

                <tbody class="bg-white">
                    <tr>
                    <td className="">
                        <div className="flex items-center gap-3 pl-4">
                        <PoolinfoBox>                                    
                            <Explainbox>
                                <p class="block antialiased font-sans text-xs text-blue-gray-900 font-normal leading-none opacity-70 text-left">
                                </p>
                                {data.type}
                            </Explainbox>
                        </PoolinfoBox>
                        </div>
                    </td>
            
                    <td className="p-4">
                        <Th>
                        <PoolinfoBox>                                    
                            <Explainbox>
                                <p class="block antialiased font-sans text-xs text-blue-gray-900 font-normal leading-none opacity-70 text-left">
                                <div>Collateral</div>
                                </p>
                                $ {data.totalStats.totalCollateralUSD.toFixed(2)}
                            </Explainbox>
                        </PoolinfoBox>
                        </Th>
                    </td>

                    <td className="p-4">
                        <Th>
                        <PoolinfoBox>                                    
                            <Explainbox>
                                <p class="block antialiased font-sans text-xs text-blue-gray-900 font-normal leading-none opacity-70 text-left">
                                <div>Debt</div>
                                </p>

                                $ {data.totalStats.totalDebtUSD.toFixed(2)}
                            </Explainbox>
                        </PoolinfoBox>
                        </Th>
                    </td>

                    <td className="p-4">
                        <Th>
                        <PoolinfoBox>                                    
                            <Explainbox>
                                <p class="block antialiased font-sans text-xs text-blue-gray-900 font-normal leading-none opacity-70 text-left">
                                <div>Health Rate</div>
                                </p>

                                {data.detailStats.healthRate.toFixed(2)}
                            </Explainbox>
                        </PoolinfoBox>
                        </Th>
                    </td>

                    <td className="p-4">
                        <Th>
                        <PoolinfoBox>                                    
                            <Explainbox>
                                <p class="block antialiased font-sans text-xs text-blue-gray-900 font-normal leading-none opacity-70 text-left">
                                <div>APY</div>
                                </p>
                                -0.33 %
                            </Explainbox>
                        </PoolinfoBox>
                        </Th>
                    </td>

                    </tr>
                </tbody>
               
            </table>
            </div>
             ))}
            
        </div>
  )}


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
    height: 30px;
    border:1px solid #eaeaea;
    border-radius: 100%;
    background-color: #f5f5f5;
  `

const Th = styled.th`
  height:25px;
  vertical-align:middle;
  padding-left:5px;
  @media screen and (max-width: 500px){
    max-width: 150px;
  }

`;


export default PositionList;