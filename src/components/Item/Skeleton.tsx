import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="378" y="120" rx="0" ry="0" width="11" height="3" />
    <rect x="8" y="14" rx="0" ry="0" width="269" height="226" />
    <rect x="15" y="258" rx="0" ry="0" width="253" height="31" />
    <rect x="19" y="302" rx="0" ry="0" width="250" height="89" />
    <rect x="29" y="415" rx="0" ry="0" width="75" height="41" />
    <rect x="154" y="420" rx="0" ry="0" width="82" height="32" />
    <rect x="204" y="434" rx="0" ry="0" width="12" height="2" />
  </ContentLoader>
);

export default Skeleton;
