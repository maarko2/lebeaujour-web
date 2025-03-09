import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../assets/styles/Galeria.css';

const years = [
  {
    year: 2025,
    months: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]
  },
  {
    year: 2024,
    months: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]
  },
  {
    year: 2023,
    months: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]
  }
];

const DropdownYear = ({ year, months }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="nav-item dropdown-year">
      <button 
        className="dropdown-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {year}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {months.map((month, index) => (
            <li key={index} className="dropdown-item">
              <a href="#">{month}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Galeria() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Datos dummy para el feed de imágenes. En el futuro, conecta a tu base de datos.
    const dummyPhotos = [
      { id: 1, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/468431895_1136800085113283_623241384973288875_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHiCC4mnbHRJd3Iob7mMINaxil8ExHHoCrGKXwTEcegKvNDa8LjzuPHVZYShvHKvtmxsNZzdIy2UR4xFz8dAnjp&_nc_ohc=LSnmQ2a_0ZYQ7kNvgE-pMlJ&_nc_oc=Adh4m4mxeVa9oH2V93kryBTfQ2A8-efHDaErlMihaD9bI7AH6UKTkz0Ozsu89zJbG08&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=AcwOyEkvKSCZx_2tik8HoHs&oh=00_AYH1qDhZEEePxTDPTDbkJx_peWwegnentkkdh0QtXZg75A&oe=67CFE21F' },
      { id: 2, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/468156959_1133473098779315_3920914748323010382_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHGGRZHwTkO9ukLN3bCIQ6JL0ecHuk002UvR5we6TTTZRBscLfzqWpvOFZb0HsEzxwKknr2MoNFZePVAnDNApUq&_nc_ohc=Kxu37dS2fi4Q7kNvgGi4u47&_nc_oc=AdhRT1_-zEyfFc4wxz6kpm4XITZGTbE1Hrf3Bx-0y_X0grW7GMhpw_DyXkteKUfSMn0&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=AEFZFp_I3SiM32AOVqcFCWl&oh=00_AYEN7lzstXdk8FCwK5dJsm52hk4JGhB9iY2qmD1ora1RGQ&oe=67CFD44C' },
      { id: 3, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/466015230_1121798459946779_1733948963422957482_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFiDyzm815DgstrOAxE1qyrohCxYmJ2OCKiELFiYnY4IrbrbGk07OdQ2t25d0oHYFZhzBdW-EoPEVvs0XXM1To1&_nc_ohc=WI3ECECNlesQ7kNvgGNkku1&_nc_oc=AdgQgvGOCzhoNB2W6mdt8c3kcYEQ-HfkK1MxghYdb0omSOCUKJAP6a099LDvT565zBg&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=A9ocEf2fqzHoxbjXKY6J5YS&oh=00_AYHB91N86qCcdwBVkw0HCDLg5KxnsQOIyQf3llhg2flh0g&oe=67CFEC1F' },
      { id: 4, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/465123049_1114964763963482_7445978099841673576_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHvIjNP4CIgt5tZGgRTuJycGHnoNklAYgkYeeg2SUBiCdCR5eRdHe_pam3SB0TbSHCHD71Mfk3XxDKfMbzGNO_H&_nc_ohc=Cx05IoLmJQ4Q7kNvgHNkPWY&_nc_oc=Adis2EWFnaF5I2IsUaXpAahgt5-8EsjRP9itjO462VtmFQQiNJpWUc0KuU9tREDLrpM&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=AmeZjtv3bNa_SC5MNQw8zSb&oh=00_AYF97A_NI-10d7c6FE0AeX_avCKn1dXX7kQslBlojUR5fQ&oe=67D015B0' },
      { id: 5, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/464378597_1109952201131405_768915938771423375_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAxq89yDnUGCPvh_6c3EvNaDxMs8fYl6ZoPEyzx9iXpjEY5iqk0nF5yc41qpmq1UheD8JHZtM1m0mcs8P4J4nq&_nc_ohc=lhzGqijcRjAQ7kNvgHGam34&_nc_oc=AdjsgyWtLpboBPA89C2ZahcNrNhURCAk8uyg5TG6KxIzaEGdYknj7la6exaY8nFLxs4&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=AJuv-0tsfTal_Jd9Iwe1WWx&oh=00_AYFK0CDGwCsGE3ghK2X6II5ItD1WWFgk4GYXQqZk-VgTjQ&oe=67D02828' },
      { id: 6, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/461762631_1089704729822819_3263464083350856136_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFBqtAbrsqWiqHIr-hY3Rei_sKsIy4Bek7-wqwjLgF6TlQc8txUKsArAOz_WfAQTApIclxrrYSryR0BphxHp4hq&_nc_ohc=hXG7tqwH70wQ7kNvgG8pN5L&_nc_oc=AdgF7o7633NAcpa7vYk1yKkJgI-xxbDeKI7f-7Qrr3S06c0W0UInn51t6FimKZiB-WU&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=AHi_xovaZfGFqtSKijpL5c0&oh=00_AYHvbVVKtrl9NjiID1eWFv7b97smVm23Evg9tk4Fm7_KZQ&oe=67D0223F' },
      { id: 7, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/461543739_1088118949981397_5784659862947545107_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGVOTj_AYnXBu7X5lrJ0wdDcLL8x_3rRzFwsvzH_etHMdxOaoDqJ2G0geso9I8a57zT5uTEY5c_j6aFTkGKzXfp&_nc_ohc=2N5SKlAeu5kQ7kNvgEj5cNb&_nc_oc=AdhEgdgw1UcYu8LbBeLQL7Aq5TyrRMNa1IhxDptKAr44LKCB7_Z90Z-ZjMuVaBj6BkQ&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=Ayw0kofyIB1E1jRbkOdKDCY&oh=00_AYHSKRLXvAQ33ka78I2HA7SBpNXLOUydOLrn3PBRpj3QCA&oe=67D01CB6' },
      { id: 8, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/455356276_1052554113537881_1126833116493208472_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEhXEnSv-SLKDoNiExPv8y6EROJLGbvxG4RE4ksZu_Ebu65or3fzSjG4VJDTenNrhyTDnDmKNg5kUTs-ii9MBIH&_nc_ohc=Uf_8JyYLsX8Q7kNvgHYZXuM&_nc_oc=Adj5NG0uEU8cj-eyZa1I_R4WrhMN9lVvSfwsoaLGoLWxwfHTkGg2DUNJVArjCut7ZBs&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=AzL7svVwV1efXUTSZ3pMEEP&oh=00_AYF5U4_pk4uBiiMFXDzRMO_ie72eKEnnSKdBZGCY0OSn7w&oe=67D02610' },
      { id: 9, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/455256581_1052554143537878_3960021301073213184_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeESCHKmH1VHD-ZGyb-wAiAh2AwL1FSI5t3YDAvUVIjm3XTqNo9uJggv1jkqDbuxzDjUZ1KPx4P1vQ3owE09XPGL&_nc_ohc=LOJkZdqvBbYQ7kNvgHmLhCy&_nc_oc=AdhEiK7Dl6unCmecMEel-O6b2QnuQWIISHX8v2pjNb4tLCxM-LtqIyiEfNQ4KllAsKQ&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=A6kv6WC2f8FLpGW3xLCfiF0&oh=00_AYGZcvcWD3PMgzSKqlyAMgprBQcuLjK98UnLxyj6OOXlxg&oe=67D00BDD' },
      { id: 10, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/444149932_994310109362282_657623020686079247_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGm7Oz_NWJQaIRjnX6um5jHjr-Vx15TEECOv5XHXlMQQBVQux_fMzLmYYThAS4bUVFNlg1GPNmP7S6aFNqIviCI&_nc_ohc=aWlrke4EIy4Q7kNvgE3lDTv&_nc_oc=AdgSXTSLEFw9_-B8XkxaeXTKCPlBXCn6kba5ERvmRiYzipJlPB4OYdvSU0hqjR7qt74&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=Ah2hoq2xLSceSyJPOEW7DAJ&oh=00_AYHd6By8vdUF1eh_UZDXNfbQVQd7ytRsMhC_yLnEbbanbw&oe=67D00D9E' },
      { id: 11, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/444149932_994310109362282_657623020686079247_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGm7Oz_NWJQaIRjnX6um5jHjr-Vx15TEECOv5XHXlMQQBVQux_fMzLmYYThAS4bUVFNlg1GPNmP7S6aFNqIviCI&_nc_ohc=aWlrke4EIy4Q7kNvgE3lDTv&_nc_oc=AdgSXTSLEFw9_-B8XkxaeXTKCPlBXCn6kba5ERvmRiYzipJlPB4OYdvSU0hqjR7qt74&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=Ah2hoq2xLSceSyJPOEW7DAJ&oh=00_AYHd6By8vdUF1eh_UZDXNfbQVQd7ytRsMhC_yLnEbbanbw&oe=67D00D9E' },
      { id: 12, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/444149932_994310109362282_657623020686079247_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGm7Oz_NWJQaIRjnX6um5jHjr-Vx15TEECOv5XHXlMQQBVQux_fMzLmYYThAS4bUVFNlg1GPNmP7S6aFNqIviCI&_nc_ohc=aWlrke4EIy4Q7kNvgE3lDTv&_nc_oc=AdgSXTSLEFw9_-B8XkxaeXTKCPlBXCn6kba5ERvmRiYzipJlPB4OYdvSU0hqjR7qt74&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=Ah2hoq2xLSceSyJPOEW7DAJ&oh=00_AYHd6By8vdUF1eh_UZDXNfbQVQd7ytRsMhC_yLnEbbanbw&oe=67D00D9E' },
      { id: 13, url: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/444149932_994310109362282_657623020686079247_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGm7Oz_NWJQaIRjnX6um5jHjr-Vx15TEECOv5XHXlMQQBVQux_fMzLmYYThAS4bUVFNlg1GPNmP7S6aFNqIviCI&_nc_ohc=aWlrke4EIy4Q7kNvgE3lDTv&_nc_oc=AdgSXTSLEFw9_-B8XkxaeXTKCPlBXCn6kba5ERvmRiYzipJlPB4OYdvSU0hqjR7qt74&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=Ah2hoq2xLSceSyJPOEW7DAJ&oh=00_AYHd6By8vdUF1eh_UZDXNfbQVQd7ytRsMhC_yLnEbbanbw&oe=67D00D9E' },

    ];
    setPhotos(dummyPhotos);
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="title-news">Galería de Imágenes</h1>
      <div className="galeria-content">
        <ul className="year-menu">
          {years.map((yearObj) => (
            <DropdownYear 
              key={yearObj.year} 
              year={yearObj.year} 
              months={yearObj.months} 
            />
          ))}
        </ul>
        <div className="gallery-feed">
          {photos.map(photo => (
            <div key={photo.id} className="gallery-item">
              <img src={photo.url} alt={`Foto ${photo.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
