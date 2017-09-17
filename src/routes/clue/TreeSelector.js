import React from 'react'
import {
  TreeSelect,
} from 'antd'

const { TreeNode } = TreeSelect;

const TreeSelector = ({ onChangeItem }) => {
  const onTreeChange = (value) => {
      onChangeItem(value);
  }


  return (
    <div>
      <TreeSelect
        showSearch
        style={{ width: 250 }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="产品关键字"
        allowClear
        treeDefaultExpandAll
        onChange={onTreeChange}
      >
        <TreeNode value="parent 1" title="服装销售" key="0-1">
          <TreeNode value="parent 1-0" title="服装进出口" key="0-1-1">
            <TreeNode value="leaf1" title="服装进出口贸易" key="random" />
            <TreeNode value="leaf2" title="服装成品定制" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="面料加工" key="random2">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>绍兴面料加工厂</b>} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </div>
  )
}

export default TreeSelector
