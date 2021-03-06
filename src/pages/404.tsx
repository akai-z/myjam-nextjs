import React from 'react';

import Layout from '@components/layout';
import NotFound from '@components/not-found';

const NotFoundPage: React.FC = () => (
  <Layout title="Page Not Found" description="Page not found" isNotFound={true}>
    <NotFound />
  </Layout>
);

export default NotFoundPage;
