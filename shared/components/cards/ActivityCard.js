
// Locale Configurations
import i18n from '../../../locale/locale.js';
import { Trans, withTranslation, useTranslation } from 'react-i18next';

function ActivityCard({ title, date, description, imagesrc, link}) { 

  const { t, _ } = useTranslation();

  return (
    <div className="ActivityCard bg-white rounded-lg shadow-lg w-full">
      <img className="ActivityCard__Image" src={imagesrc} />
      <div className="ActivityCard__Content">
        <h4 className="ActivityCard__Title">{title}</h4>
        <p className="ActivityCard__Date">{date}</p>
        <p className="ActivityCard__Description">{description}</p>
        <a href={link} className="btn btn-secondary" target="_blank">{t('activities:seemore')}</a>
      </div>
    </div>
  )
}

export default ActivityCard