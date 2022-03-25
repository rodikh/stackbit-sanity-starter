import Action from '../Action';

const CtaSection = (props) => {
    const { section } = props;
    const { section_id, title, subtitle, actions } = section;

    return (
        <section id={section_id} className="block cta-block bg-accent outer">
            <div className="inner-large">
                <div className="grid">
                    <div className="cell block-content">
                        {title &&
                            <h2 className="block-title">{title}</h2>
                        }
                        {subtitle &&
                            <p className="block-subtitle">{subtitle}</p>
                        }
                    </div>
                    {actions &&
                        <div className="cell block-buttons">
                            {actions.map((action, actionIdx) => (
                                <Action key={actionIdx} action={action} className="button white large" />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default CtaSection;
