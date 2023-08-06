import SectionTopTitle from '../../../Components/SectioTopTitle/SectionTopTitle';
import { Disclosure } from '@headlessui/react'
import { FaChevronUp } from 'react-icons/fa'

const FaqSction = () => {
    return (
        <div className='bg-dashboard py-16 dark:bg-[#151515]'>
            <SectionTopTitle sectionTitle='Frequently Asked Questions' sectionTitleTop='F.A.Q' sectionDesc='Well organized for beginners and everyone as well'></SectionTopTitle>

            <div className='flex main-container space-x-8 py-6'>

                <div className='w-1/2'>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mt-3">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mt-3">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mt-3">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mt-3">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className='w-1/2'>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mt-3">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mt-3">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mt-3">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mt-3">
                                    <span className='sec-title text-lg font-bold'>Where can I edit my billing and shipping address?</span>
                                    <FaChevronUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-prime`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-5 pb-2  bg-white -mt-4 sec-desc rounded-b-lg">
                                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.We often send out our newsletter with news and great offers.If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    );
};

export default FaqSction;