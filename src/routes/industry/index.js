import React from 'react'
import PropTypes from 'prop-types'
import {
    connect
} from 'dva'
import {
    Tree,
  Button
} from 'antd'
import {
    routerRedux
} from 'dva/router'

const TreeNode = Tree.TreeNode;

const Industry = ({
    industry,
    dispatch,
    loading,
    location
}) => {
    const {
        list,
    } = industry
    const {
        query = {}, pathname
    } = location

    let setTreeNodes = (parentKey,list)=> {
      for(var i =0; i<list.length; i++){
        var key = parentKey + '-' + i;
        list[i].key = key;
        list[i].title = list[i].nodeName;
        if(list[i].children.length > 0){
          setTreeNodes(key,list[i].children);
        }
      }
    }
    console.log(list);
    setTreeNodes(0, list);
    console.log(list);

  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });

  }


  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }

  return (<div className="content-inner">
    <Button type="primary">新增</Button>
    <Button>修改</Button>
    <Button type="danger">删除</Button>
    <Tree onSelect={onSelect}
          onCheck={onCheck}>
      {renderTreeNodes(list)}
    </Tree>
  </div>)
}

Industry.propTypes = {
    industry: PropTypes.object,
    loading: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
}

export default connect(({
    industry,
    loading
}) => ({
    industry,
    loading
}))(Industry)
