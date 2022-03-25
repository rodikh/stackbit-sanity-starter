import { Layout } from '../components';
import { markdownify } from '../utils';

const Page = (props) => {
    const { page } = props;
    const { title, image, subtitle, content } = page;

    return (
        <Layout {...props}>
            <div className="outer">
                <div className="inner-medium">
                    <article className="post post-full">
                        <header className="post-header">
                            <h1 className="post-title" data-sb-field-path="title">{title}</h1>
                        </header>
                        {image && (
                            <div className="post-thumbnail">
                                <img src={image} alt={title} />
                            </div>
                        )}
                        {subtitle && (
                            <div className="post-subtitle" data-sb-field-path="subtitle">
                                {subtitle}
                            </div>
                        )}
                        {content && (
                            <div className="post-content" data-sb-field-path="content">
                                {markdownify(content)}
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </Layout>
    );
}

export default Page;