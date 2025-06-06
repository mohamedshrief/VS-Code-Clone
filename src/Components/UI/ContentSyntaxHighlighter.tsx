import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
    content: string | undefined
}


export default function ContentSyntaxHighlighter({ content }: IProps) {
    return (
        <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            customStyle={{
                backgroundColor: "transparent",
                width: "100%",
                maxHeight: "100vh",
                overflowX: "auto",
                fontSize: "1.5rem",
            }}
            showLineNumbers
        >
            {String(content)}
        </SyntaxHighlighter>
    )
}