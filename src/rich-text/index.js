import Image from "next/image";

const renderText = (textNode) => {
  return textNode.marks.reduce((content, mark) => {
    switch (mark.type) {
      case "bold":
        return <strong>{content}</strong>;
      case "italic":
        return <em>{content}</em>;
      case "underline":
        return <u>{content}</u>;
      case "code":
        return (
          <div className="mockup-code">
            <code>{content}</code>
          </div>
        );
      default:
        return content;
    }
  }, textNode.value);
};

const renderNode = (node, key) => {
  switch (node.nodeType) {
    case "text":
      return <span key={key}>{renderText(node)}</span>;
    case "paragraph":
      return (
        <p key={key}>
          {node.content.map((child, index) => renderNode(child, `p-${index}`))}
        </p>
      );
    case "heading-1":
      return (
        <h1 key={key}>
          {node.content.map((child, index) => renderNode(child, `h1-${index}`))}
        </h1>
      );
    case "heading-2":
      return (
        <h2 key={key}>
          {node.content.map((child, index) => renderNode(child, `h2-${index}`))}
        </h2>
      );
    case "unordered-list":
      return (
        <ul key={key}>
          {node.content.map((child, index) => renderNode(child, `ul-${index}`))}
        </ul>
      );
    case "ordered-list":
      return (
        <ol key={key}>
          {node.content.map((child, index) => renderNode(child, `ol-${index}`))}
        </ol>
      );
    case "list-item":
      return (
        <li key={key}>
          {node.content.map((child, index) => renderNode(child, `li-${index}`))}
        </li>
      );
    case "hyperlink":
      return (
        <a href={node.data.uri} key={key}>
          {node.content.map((child, index) => renderNode(child, `a-${index}`))}
        </a>
      );
    case "embedded-asset-block":
      const imageUrl = `https:${node.data.target.fields.file.url}`;
      return (
        <Image
          key={key}
          width={100}
          height={100}
          src={imageUrl}
          alt={node.data.target.fields.title}
        />
      );
    default:
      return null;
  }
};

const renderRichText = (node) => {
  if (!node || !node.content) return null;

  if (Array.isArray(node.content)) {
    return node.content.map((childNode, index) => renderNode(childNode, index));
  }

  return renderNode(node, "root-node");
};

export default renderRichText;
