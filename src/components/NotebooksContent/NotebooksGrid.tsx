import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { NotebookDetails } from './notebookTypes';
const { Link } = Typography;

const NotebooksGrid = (props: { notebooks: NotebookDetails[] }) => {
  const { t } = useTranslation('common');
  return (
  <div className="site-card-wrapper">
    <Row gutter={[16, 16]}>
      {props.notebooks.map((notebook) => (
        <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4} key={notebook.id}>
          <Card
            title={notebook.title}
            type="inner"
            bordered
            extra={<Link href={notebook.url} target="_blank">{t('components.NotebooksGrid.notebookLink')}</Link>}
          >
            {notebook.description}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
}; 

export default NotebooksGrid;
