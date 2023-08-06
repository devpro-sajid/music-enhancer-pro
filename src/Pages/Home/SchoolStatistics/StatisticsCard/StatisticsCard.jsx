import CountUp, { useCountUp } from 'react-countup';

const StatisticsCard = ({counter}) => {
    const {number,name}=counter
    useCountUp({
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 2000,
    });
    return (
        <div className='text-center'>
            <div className="content" />
            <CountUp className='text-white text-5xl font-bold' end={counter.number}  enableScrollSpy /><span className='text-5xl text-white'>+</span>
            <h2 className="sm:text-2xl text-xl font-bold sec-title text-black pt-2">{name}</h2>
        </div>
    );
};

export default StatisticsCard;