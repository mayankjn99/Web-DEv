import PropTypes from 'prop-types'
import { useState } from 'react';

const TreeNode = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = node.children && node.children.length > 0;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="tree-node">
            <div className={node?.type === 'file' ? 'node-label-file' : 'node-label'}onClick={toggleExpand}>
                {hasChildren && (
                    <span>{isExpanded ? '-' : '+'}</span>
                )}
                {node.name}
            </div>
            {isExpanded && hasChildren && (
                <div className="node-children">
                    {node.children.map(child => (
                        <TreeNode key={child.id} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeNode;

TreeNode.propTypes = {
    node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['file', 'folder']).isRequired,
        children: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
}