import { markdownify } from '../../utils';
import Action from '../Action';

const HeroSection = (props) => {
    const { section, annotationPrefix } = props;
    const { section_id, title, image, content, actions } = section;

    return (
        <section id={section_id} className="block hero-block bg-accent outer" data-sb-field-path={annotationPrefix}>
            <div className="inner">
                <div className="grid">
                    {image &&
                        <div className="cell block-preview">
                            <img src={image} alt={title} data-sb-field-path=".image" />
                        </div>
                    }
                    <div className="cell block-content">
                        {section.title &&
                            <h2 className="block-title underline" data-sb-field-path=".title">{title}</h2>
                        }
                        <div className="block-copy" data-sb-field-path=".content">
                            {markdownify(content)}
                        </div>
                        {section.actions &&
                            <p className="block-buttons" data-sb-field-path=".actions">
                                {actions.map((action, actionIdx) => (
                                    <Action key={actionIdx} action={action} className="button white large" data-sb-field-path={`.${actionIdx} .${actionIdx}.label`} />
                                ))}
                            </p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
