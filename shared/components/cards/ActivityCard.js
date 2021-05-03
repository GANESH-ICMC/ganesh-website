
// Locale Configurations
import i18n from '../../../locale/locale.js';
import { Trans, withTranslation, useTranslation } from 'react-i18next';

function ActivityCard({ title, date, description, imagesrc, link}) { 

  const { t, _ } = useTranslation();

  return (
    <div className="ActivityCard bg-white rounded-lg shadow-lg w-full flex flex-col">
      <img className="ActivityCard__Image" src={imagesrc} />
      <div className="ActivityCard__Content p-4 flex-grow">
        
        <h4 className="ActivityCard__Title font-bold">{title}</h4>
        
        <p className="ActivityCard__Date text-gray-600">{date}</p>
        
        { description && 
        <p className="ActivityCard__Description mt-2 flex-grow">{description}</p>
        }

        <a href={link} className="btn btn-primary mt-2 flex-end" target="_blank">{t('activities:seemore')}</a>
      </div>
    </div>
  )
}

export default ActivityCard