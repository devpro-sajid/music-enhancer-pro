import CountUp, { useCountUp } from 'react-countup';

const StatisticsCard = ({counter}) => {
    useCountUp({
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 2000,
    });
    return (
        <div className='text-center'>
            <div className="content" />
            <CountUp className='text-white text-5xl font-bold' end={counter.number} enableScrollSpy />
            <h2 className="sm:text-2xl text-xl font-bold sec-title text-black pt-2">{counter.name}</h2>
        </div>
    );
};

export default StatisticsCard;