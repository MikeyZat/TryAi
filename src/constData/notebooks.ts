import { useTranslation } from 'react-i18next';
import { CardInfo } from "../components/Common/CardsGrid/CardsTypes";


export const useNotebooks = (): CardInfo[] => {
  const { t } = useTranslation('common');
  return getNotebooks(t);
};

// add notebooks info here
export const getNotebooks = (t: (id: string) => string): CardInfo[] => [
  {
    id: 'handwritten',
    title: t('constData.notebooks.handwrittenTitle'),
    description: t('constData.notebooks.handwrittenDescription'),
    url: 'https://github.com/MikeyZat/TryAi/blob/master/notebooks/handwritten/handwritten.ipynb',
  }
];
