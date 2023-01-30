import React from 'react'
import { GiCricketBat } from 'react-icons/gi'
import { BsFillHeartFill, BsPinAngleFill } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import Image from 'next/image'



const DataTable = () => {
    return (
        <div>

            <table className="w-full divide-y table-auto bg-light-dark">
                <thead className="bg-[#2F6457] shadow-none">
                    <tr className=''>

                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase flex items-center w-[456px]"
                        >
                            <span className='mr-2'><GiCricketBat /> </span> Bangladesh Premieer Ligue
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            1
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            x
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            2
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            1
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-[10px] font-bold text-left text-white uppercase "
                        >
                            Team wins
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            2
                        </th>

                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            0
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            Total
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            U
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                        >
                            +6
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(i => {
                            return (
                                <tr key={i}>

                                    <td className="px-6  text-sm font-medium text-wihite whitespace-nowrap flex border-b border-white border-r">
                                        <div className='text-white flex flex-col gap-1  mr-4'>
                                            <BsPinAngleFill />
                                            <GoGraph />
                                            <BsFillHeartFill />


                                        </div>
                                        <div>
                                            <div className='flex items-center mb-2'>
                                                <Image className='mr-2' src={"/images/au.png"} height={19} width={12} alt="" />
                                                <h3 className='text-[14px] text-white'>South Africa</h3>
                                            </div>
                                            <div className='flex items-center'>
                                                <Image className='mr-2' src={"/images/sa.png"} height={19} width={12} alt="" />
                                                <h3 className='text-[14px] text-white'>Australlia</h3>
                                            </div>
                                        </div>
                                        <div className='text-white ml-auto text-right'>
                                            <div className='flex items-center mb-2'>
                                                <span className='mr-2'><GiCricketBat /> </span>
                                                <p>112/2</p>
                                            </div>
                                            <div>
                                                <h3>0/0</h3>
                                            </div>
                                        </div>

                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            1
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            1
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            1
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            1
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            -
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            1
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            -
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            1
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            -
                                        </div>
                                    </td>
                                    <td className="  font-semibod px-2 whitespace-nowrap border-b  border-white">
                                        <div className='bg-light text-center rounded-md px-4 '>
                                            1
                                        </div>
                                    </td>


                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default DataTable