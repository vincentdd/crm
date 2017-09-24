/**
 * Created by wxy on 2017/9/24.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  routerRedux
} from 'dva/router'
import {
  connect
} from 'dva'
import {
  Row,
  Col,
  Button,
  Popconfirm
} from 'antd'
import List from './List'
// import Filter from './Filter'
import Modal from './Modal'

const Crmaccount = ({
  location,
  dispatch,
  crmaccount,
  loading
}) => {
  const {
    list,
    page,
    isMotion,
    modalVisible,
    currentItem,
    modalType
  } = crmaccount
  const {
    pageSize
  } = page
  console.log(crmaccount);

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['crmaccount/update'],
    title: `${modalType === 'create' ? '创建员工' : '修改员工'}`,
    wrapClassName: 'vertical-center-modal',
    onOk(data) {
      dispatch({
        type: `crmaccount/${modalType}`,
        payload: data,
      })
    },
    onCancel() {
      dispatch({
        type: 'crmaccount/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['crmaccount/query'],
    page,
    location,
    isMotion,
    onChange(page) {
      const {
        query,
        pathname
      } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          //pageSize: page.pageSize,
        },
      }))
    },
    onDeleteItem(id) {
      dispatch({
        type: 'crmaccount/delete',
        payload: id,
      })
    },
    onEditItem(item) {
      dispatch({
        type: 'crmaccount/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
    onUpdateStatusItem(accountId, status){
      dispatch({
        type: 'crmaccount/updateSatatus',
        payload: {
          accountId: accountId,
          status: status
        },
      })
    }
  }

  return (
    <div className="content-inner">
      {/*<Filter {...filterProps} />*/}
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </div>
  )
}

Crmaccount.propTypes = {
  crmaccount: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({
  crmaccount,
  loading
}) => ({
  crmaccount,
  loading
}))(Crmaccount)
