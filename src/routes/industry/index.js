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
// import {
//     BuildTree
// } from 'components'

import Modal from './Modal'

const TreeNode = Tree.TreeNode;

const Industry = ({
    industry,
    dispatch,
    loading,
    location
}) => {
    const {
        list,
        modalVisible,
        modalType,
        currentItem
    } = industry
    const {
        query = {}, pathname
    } = location

  console.log(industry);
  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    modalType: modalType,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['crmaccount/update'],
    title: `${modalType === 'create' ? '创建行业节点' : '修改行业节点'}`,
    wrapClassName: 'vertical-center-modal',
    onOk(data) {
      dispatch({
        type: `industry/${modalType}`,
        payload: data,
      })
    },
    onCancel() {
      dispatch({
        type: 'industry/hideModal',
      })
    },
  }

    let selectInfo = {};

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

  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children.length > 0) {
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
    selectInfo = info;
    dispatch({
      type: 'industry/updateState',
      payload: {
        currentItem: selectInfo.node.props.dataRef ? selectInfo.node.props.dataRef: selectInfo.node.props
      },
    })
  }
  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }
  const onDel = () =>{
    console.log(selectInfo.node.props.dataRef.id);
    dispatch({
      type: 'industry/del',
      payload: {
        industryId: selectInfo.node.props.dataRef.id
      },
    })
  }
  const onEdit = () =>{
    dispatch({
      type: `industry/showModal`,
      payload: {
        modalType: 'update',
      },
    })
  }
  const onAdd = ()=>{
    dispatch({
      type: 'industry/showModal',
      payload: {
        modalType: 'create',
      },
    })
  }
  setTreeNodes(0, list);


  return (<div className="content-inner">
    <Button type="primary" onClick={onAdd}>新增</Button>
    <Button type="primary" onClick={onEdit}>修改</Button>
    <Button type="danger" onClick={onDel}>删除</Button>
    <Tree onSelect={onSelect}
          onCheck={onCheck}>
      {renderTreeNodes(list)}
    </Tree>
    {modalVisible && <Modal {...modalProps} />}
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
