import CountUp, { useCountUp } from 'react-countup';
import StatisticsCard from './StatisticsCard/StatisticsCard';

const Statistics = () => {
    const countersInfo = [
        { name: 'Students', number: 444 },
        { name: 'Teachers', number: 14 },
        { name: 'Programmes', number: 32 },
        { name: 'Awards', number: 21 },
    ]
    return (
        <div className='py-16 dark:bg-[#151515]'>

            <div className="mx-auto text-center  px-3">
                <p className="text-prime mb-2 sec-title-top text-[25px] font-bold">Classes Analytics</p>
                <h3 className="lg:text-3xl text-2xl dark:text-white  pb-2 sec-title font-semibold"> Statistics Of Our Institute</h3>
                <p className="mb-2 sec-desc text-gray-500 dark:text-gray-300">See the progress of our institute and classes</p>
            </div>

            <div className='main-container'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4  gap-8 md:gap-12 mt-10 bg-prime py-8 rounded-xl'>
                    {countersInfo?.map((counter, i) => <StatisticsCard key={i} counter={counter}></StatisticsCard>)}
                </div>
            </div>



        </div>
    );
};

export default Statistics;