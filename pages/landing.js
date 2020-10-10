import React, { useEffect } from 'react';

// components
import Layout from '../components/Elements/Layout';
import Seo from '../components/Base/Seo';

// api
import * as client from '../api';
import loadDb from '../firebase.config';

// templates
import Landing from '../templates/Landing';

// constants
import { PAGES_IDS } from '../constants';

const LandingPage = ({ page }) => (
  <>
    <Seo title={page.seoTitle} description={page.description} />
    <Layout useBackground={false} hideMenuIcon hideMenuBar>
      <Landing content={page.content} />
    </Layout>
  </>
);

export async function getStaticProps() {
  const page = await client.getPage(PAGES_IDS.LANDING);
  return {
    props: {
      page: page.fields,
    },
  };
}

export default LandingPage;
