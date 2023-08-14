import React from 'react';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import ContactForm from '../ContactComponents/ContactForm';
import ContactMap from '../ContactComponents/ContactMap';

const ContactUs = () => {
    return (
        <div className=" dark:bg-[#151515]">
      <PageTitle
        pageTitleBg="https://i.ibb.co/NnLVQg9/musicslide1.jpg"
        pageTitleBottom="Contact Us"
        pageTitle="Contact Us"
      ></PageTitle>
      <div className="main-container">
        <ContactForm></ContactForm>
        <ContactMap></ContactMap>
      </div>
    </div>
    );
};

export default ContactUs;