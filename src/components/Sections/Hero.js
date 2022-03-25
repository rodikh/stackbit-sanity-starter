import { toFieldPath } from '@stackbit/annotations';
import { markdownify } from '../../utils';
import Action from '../Action';

const HeroSection = (props) => {
    const { section, annotationPrefix } = props;
    const { section_id, title, image, content, actions } = section;

    return (
        <section id={section_id} className="block hero-block bg-accent outer" {...toFieldPath(annotationPrefix)}>
            <div className="inner">
                <div className="grid">
                    {image &&
                        <div className="cell block-preview">
                            <img src={image} alt={title} {...toFieldPath('.image')} />
                        </div>
                    }
                    <div className="cell block-content">
                        {section.title &&
                            <h2 className="block-title underline" {...toFieldPath('.title')}>{title}</h2>
                        }
                        <div className="block-copy" {...toFieldPath('.content')}>
                            {markdownify(content)}
                        </div>
                        {section.actions &&
                            <p className="block-buttons" {...toFieldPath('.actions')}>
                                {actions.map((action, actionIdx) => (
                                    <Action key={actionIdx} action={action} className="button white large" {...toFieldPath(`.${actionIdx} .${actionIdx}.label`)} />
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
