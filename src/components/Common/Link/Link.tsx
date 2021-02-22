import React from 'react';
import { Typography } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
const { Link:AntLink } = Typography;

interface LinkProps {
  url: string,
  isInternal?: boolean,
  children: React.ReactNode,
}

const Link = (props: LinkProps) => {

  if (props.isInternal) {
    return <RouterLink to={props.url}>{props.children}</RouterLink>;
  }

  return <AntLink href={props.url} target="_blank">{props.children}</AntLink>
};

export default Link;
