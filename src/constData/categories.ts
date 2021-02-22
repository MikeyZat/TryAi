import { useTranslation } from 'react-i18next';
import { CardInfo } from "../components/Common/CardsGrid/CardsTypes";


export const useCategories = (): CardInfo[] => {
  const { t } = useTranslation('common');
  return getCategories(t);
};

// add categories info here
export const getCategories = (t: (id: string) => string): CardInfo[] => [
  {
    id: 'digits-recognition',
    title: t('components.DigitsRecognition.sectionTitle'),
    description: t('constData.categories.digitsRecognitionDesc'),
    url: '/categories/digit_recognition',
  },
  {
    id: 'image-recognition',
    title: t('components.ImageRecognition.sectionTitle'),
    description: t('constData.categories.imageRecognitionDesc'),
    url: '/categories/image_recognition',
  }
];
