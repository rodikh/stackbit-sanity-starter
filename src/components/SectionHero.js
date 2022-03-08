import React from 'react';
import _ from 'lodash';

import { markdownify } from '../utils';
import Action from './Action';


export default class SectionHero extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block hero-block bg-accent outer" data-sb-field-path={this.props.annotationPrefix}>
                <div className="inner">
                    <div className="grid">
                        {_.get(section, 'image') &&
                        <div className="cell block-preview">
                            <img src={_.get(section, 'image')} alt={_.get(section, 'title')} data-sb-field-path=".image" />
                        </div>
                        }
                        <div className="cell block-content">
                            {_.get(section, 'title') &&
                            <h2 className="block-title underline" data-sb-field-path=".title">{_.get(section, 'title')}</h2>
                            }
                            <div className="block-copy" data-sb-field-path=".content">
                                {markdownify(_.get(section, 'content'))}
                            </div>
                            {_.get(section, 'actions') &&
                            <p className="block-buttons" data-sb-field-path=".actions">
                                {_.map(_.get(section, 'actions'), (action, actionIdx) => (
                                    <Action key={actionIdx} action={action} className="button white large" data-sb-field-path={`.${actionIdx} .${actionIdx}.label`}/>
                                ))}
                            </p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
