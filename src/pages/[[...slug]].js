import React from 'react';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';

import pageLayouts from '../layouts';

const Page = (props) => {
    const PageLayout = pageLayouts[_.get(props, 'page._type')];

    return (<PageLayout {...props} />);
}

export async function getStaticPaths() {
    const paths = await sourcebitDataClient.getStaticPaths();
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
    return { props };
}

export default withRemoteDataUpdates(Page);
