// import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import TreeNode from './TreeNode'
import Data from './TreeData'
import "./index.scss"

const Tree = () => {

  const [treeData, setTreeData] = useState([])
//   console.log(initialPath    )
  useEffect(()=>{
      setTreeData(Data)
  }, [])
  // fetch treeData based on path 
  return (
    // <div>hello</div>
    <div>
      <div>Tree File Structure</div>
      <div className='tree'>
        {
            treeData.map((node)=> (
                <TreeNode key={node.id} node={node}/>
            ))
        }
      </div>
    </div>
  )
}

export default Tree


// Tree.propTypes = {
//     initialPath: PropTypes.string
// }

// Tree.defaultProps = {
//     initialPath: '.'
// }