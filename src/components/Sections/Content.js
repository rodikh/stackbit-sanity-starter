import { markdownify } from '../../utils';
import CtaButtons from '../CtaButtons';

const ContentSection = (props) => {
    const { section } = props;
    const { section_id, background, image, title, content, actions } = section;

    return (
        <section id={section_id} className={`block text-block bg-${background} outer`}>
            <div className="inner">
                <div className="grid">
                    {image &&
                        <div className="cell block-preview">
                            <img src={image} alt={title} />
                        </div>
                    }
                    <div className="cell block-content">
                        {title &&
                            <h2 className="block-title underline">{title}</h2>
                        }
                        <div className="block-copy">
                            {markdownify(content)}
                        </div>
                        <CtaButtons actions={actions} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentSection;
