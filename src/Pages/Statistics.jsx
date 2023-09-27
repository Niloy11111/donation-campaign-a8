import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import NavBar from '../NavBar/NavBar';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(1)}%`}
        </text>
    );
};

const Statistics = () => {
    const [yourDonation, setYourDonation] = useState([]);

    useEffect(() => {
        const yourDonationCard = JSON.parse(localStorage.getItem('donations'));
        const yourDonationLength = yourDonationCard.length;
        const parseYourDonation = parseFloat(yourDonationLength)
        setYourDonation(parseYourDonation)

    }, [])

    const data = [
        { name: 'Group A', value: 12 - yourDonation },
        { name: 'Group B', value: yourDonation },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    return (
        <div>

            <div>
                <NavBar></NavBar>
                <div className='flex justify-center h-[60vh] items-center'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={500} height={500}>
                            <Pie
                                data={data}

                                label={renderCustomizedLabel}

                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='flex justify-center'>

                    <div className='flex flex-col lg:flex-row md:flex-row md:gap-6 lg:gap-14 gap-6'>
                        <div className='flex items-center gap-4'>
                            <h4 className='text-[#0B0B0B] text-lg font-normal '>Your Donation  </h4>
                            <div className='w-[100px] h-[12px] bg-[#00C49F]'> </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <h4 className='text-[#0B0B0B] text-lg font-normal '>Total Donation </h4>
                            <div className='w-[100px] h-[12px] bg-[#FF444A]'> </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Statistics;