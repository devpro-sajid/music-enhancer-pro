

const SectionTopTitle = ({sectionTitleTop, sectionTitle,sectionDesc}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 px-3">
            <p className="text-prime mb-2 sec-title-top text-[25px] font-bold">{sectionTitleTop}</p>
            <h3 className="lg:text-3xl text-2xl dark:text-white  pb-2 sec-title font-semibold">{sectionTitle}</h3>
            <p className="mb-2 sec-desc text-gray-500 dark:text-gray-300">{sectionDesc}</p>
        </div>
    );
};

export default SectionTopTitle;