import React, { ReactNode } from 'react';

export interface LinkLabelPair {
  linkLabel: string;
  linkHRef: string;
}

export interface QuickLinks {
  quickLinksLabel: string;
  labelLinkPairs: Array<LinkLabelPair>;
}

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  quickLinks?: QuickLinks;
};

const getQuickLinksHtml = (linkData: QuickLinks) => (
  <React.Fragment>
    <div>
      {linkData.quickLinksLabel}
      {linkData.labelLinkPairs.map((aLink, i) => (
        <a key={i} href={aLink.linkHRef}>
          [{aLink.linkLabel}]
        </a>
      ))}
    </div>
  </React.Fragment>
);

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
        {props.quickLinks && (
          <div className="mt-4 text-xl md:px-20">
            {getQuickLinksHtml(props.quickLinks)}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
