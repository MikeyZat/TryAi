import React from 'react';
import type { ReactNode } from 'react';
import { Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Link from '../Link/Link';
const { Title } = Typography;

const renderers = {
  code: ({ language, value }: { language: string; value: ReactNode }) => {
    return <SyntaxHighlighter language={language} children={value} />;
  },
  heading: (props: { level?: 1 | 2 | 3 | 4 | 5; children: ReactNode }) => {
    if (props.level) {
      return <Title level={props.level}>{props.children}</Title>;
    }
    return <ReactMarkdown.renderers.Heading {...props} />;
  },
  link: (props: { href: string; children: ReactNode }) => {
    return (
      <Link url={props.href} isInternal={props.href.startsWith('/')}>
        {props.children}
      </Link>
    );
  },
};

const MarkdownRenderer = ({ source }: { source: string }) => {
  return <ReactMarkdown renderers={renderers} source={source} />;
};

export default MarkdownRenderer;
