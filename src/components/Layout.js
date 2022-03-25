import React from 'react';
import Head from 'next/head';
import _ from 'lodash';

import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    componentDidMount() {
        // Sticky header
        let offsetY = 0;
        let ticking = false;

        window.addEventListener('scroll', function (e) {
            offsetY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    handleHeader(offsetY);
                    ticking = false;
                });
                ticking = true;
            }
        });

        function handleHeader(scrollPos) {
            if (scrollPos > 0) {
                document.body.classList.add('has--scrolled');
            } else {
                document.body.classList.remove('has--scrolled');
            }
        }
    }

    render() {
        const page = _.get(this.props, 'page');
        const title = (_.has(page, 'title') ? _.get(page, 'title') + ' - ' : '') + _.get(this.props, 'config.title');
        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" rel="stylesheet"/>
                </Head>
                <div id="page" className={'site palette-' + _.get(this.props, 'config.palette')} data-sb-object-id={page.__metadata.id}>
                    <Header {...this.props} />
                    <main id="content" className="site-content" data-sb-field-path="sections">
                        {this.props.children}
                    </main>
                    <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
