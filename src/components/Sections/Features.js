import { markdownify } from '../../utils';
import CtaButtons from '../CtaButtons';

const FeaturesSection = (props) => {
    const { section } = props;
    const { section_id, background, title, subtitle, features } = section;

    return (
        <section id={section_id} className={`block features-block bg-${background} outer`}>
            <div className="block-header inner-small">
                {title &&
                    <h2 className="block-title">{title}</h2>
                }
                {subtitle &&
                    <p className="block-subtitle">
                        {subtitle}
                    </p>
                }
            </div>
            {features &&
                <div className="inner">
                    {features.map((feature, featureIndex) => {
                        const { image, title, content, actions } = feature;

                        return (
                            <div key={featureIndex} className="block-item">
                                <div className="grid">
                                    {image &&
                                        <div className="cell block-preview">
                                            <img src={image} alt={title} />
                                        </div>
                                    }
                                    <div className="cell block-content">
                                        <h3 className="block-title underline">{title}</h3>
                                        <div className="block-copy">
                                            {markdownify(content)}
                                        </div>
                                        <CtaButtons actions={actions} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    );
}

export default FeaturesSection;
