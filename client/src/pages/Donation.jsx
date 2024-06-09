import { Link } from 'react-router-dom';
import lalibela from "../assets/Images/lalibela.jpg";
import lalibela_two from "../assets/Images/lalibela_two.jpg";
import boleMedhanealem from "../assets/Images/bole medhanealem.jpg";
import churchInAksum from "../assets/Images/church in aksum.jpg";
import abrehaAtsbeha from "../assets/Images/abreha atsbeha.jpg";
import debredamo from "../assets/Images/debre damo monastery.jpg";
import '../assets/styles/main.css';
import { useTranslation } from "react-i18next";


const images = [
    {
        id: 1,
        src: lalibela,
        alt: 'lalibela rock hewn church',
        title: 'የቤተ ክርስቲያን ጥገና እና እድሳት',
        description: 'ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::',
    },
    {
        id: 2,
        src: lalibela_two,
        alt: 'hymn inside lalibela rock hewn church',
        title: 'የቤተ ክርስቲያን ጥገና እና እድሳት',
        description: 'ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::',
    },
    {
        id: 3,
        src: boleMedhanealem,
        alt: 'bole medhanealem church',
        title: 'የቤተ ክርስቲያን ጥገና እና እድሳት',
        description: 'ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::',
    },
    {
        id: 4,
        src: churchInAksum,
        alt: 'church in axsum',
        title: 'የቤተ ክርስቲያን ጥገና እና እድሳት',
        description: 'ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::',
    },
    {
        id: 5,
        src: abrehaAtsbeha,
        alt: 'Abreha Atsbeha',
        title: 'የቤተ ክርስቲያን ጥገና እና እድሳት',
        description: 'ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::',
    },
    {
        id: 6,
        src: debredamo,
        alt: 'Debre Damo Monastery',
        title: 'የቤተ ክርስቲያን ጥገና እና እድሳት',
        description: 'ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::ልገሳዎች ለቤተክርስቲያን ህንጻዎች ጥገና፣ እድሳት ወይም ማስፋፊያ፣ ጥገና፣ ስዕል እና የመሠረተ ልማት ማሻሻያዎችን ጨምሮ ሊያገለግሉ ይችላሉ::',
    },
];

const Donation = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='text-4xl text-center font-bold mb-4 mt-10'>{t('cause')} </div>
            <div className="text-center mt-4 mb-6">
            {t('c_1')}
            </div>
            {/* Discover */}
            <h1 className="text-2xl font-bold mt-8 mb-8">{t('find')}</h1>
            <div className="grid grid-cols-3 gap-6 mt-4">
                {images.map((image, index) => (
                    <div key={index}>
                        <div className="aspect-w-1 aspect-h-1 imgListHeight">
                            <img src={image.src} alt={image.alt} className="w-full h-full object-contain transition-transform transform hover:scale-105" />
                        </div>
                        <h1 className="text-center text-xl mt-4 mb-4" key={image.id}> <Link to={`/donation/${image.id}`} className="hover:bg-dark-blue">{image.title}</Link></h1>
                        <p className="text-sm m-4">{image.description}</p>
                        <div className="flex justify-center items-center mt-8">
                            <button className="bg-dark-blue text-white px-4 py-2 rounded-full transform hover:scale-110 hover:bg-blue-600" style={{ width: '150px' }} >
                                {t('ለመለገስ')}
                                </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <Round numbered grid */}
            <div className="flex flex-row items-center justify-center mt-16 gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-dark-blue text-white rounded-full">1</div>
                <div className="flex items-center justify-center w-12 h-12 bg-dark-blue text-white rounded-full">2</div>
                <div className="flex items-center justify-center w-12 h-12 bg-dark-blue rounded-full">
                    <svg className="items-center justify-center" width="30px" height="50px" viewBox="-18.19 -18.19 112.18 112.18" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"
                        stroke-width="4.017612000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                            stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)">
                                <path id="Path_57" data-name="Path 57"
                                    d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#0c2c67">
                                </path> </g> </g></svg></div>
            </div>
        </div>
    );
};

export default Donation;


