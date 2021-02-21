import React from 'react';
import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import Link from '../Link/Link';
import { CardInfo } from './CardsTypes';

interface CardGridProps {
  cardsInfo: CardInfo[],
  onlyInternalLinks?: boolean,
}

const NotebooksGrid = (props: CardGridProps) => {
  const { t } = useTranslation('common');
  return (
    <div className="site-card-wrapper">
      <Row gutter={[16, 16]}>
        {props.cardsInfo.map((cardInfo) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4} key={cardInfo.id}>
            <Card
              title={cardInfo.title}
              type="inner"
              bordered
              extra={(
                <Link url={cardInfo.url} isInternal={props.onlyInternalLinks}>
                  {t('components.CardsInfo.cardLinkLabel')}
                </Link>
              )}
            >
              {cardInfo.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    );
};

export default NotebooksGrid;
