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
  Input,
  Row,
  Col,
  Button,
  Popconfirm
} from 'antd'
import List from './List'
// import Filter from './Filter'
import Modal from './Modal'

const Search = Input.Search;

const Crmaccount = ({
  location,
  dispatch,
  crmaccount,
  loading
}) => {
  const {
    list,
    pagination,
    isMotion,
    modalVisible,
    currentItem,
    modalType
  } = crmaccount
  const {
    pageSize
  } = pagination
  console.log(crmaccount);

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    modalType: modalType,
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
    pagination,
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

  const onAdd = ()=>{
    dispatch({
      type: 'crmaccount/showModal',
      payload: {
        modalType: 'create',
      },
    })
  }

  return (
    <div className="content-inner">
      <Row gutter={24} type="flex" justify="start" style={{marginBottom: '12px'}}>
        <Col xl={{ span: 4 }} md={{ span: 6 }}>
          <Search
            placeholder="根据手机号码搜索"
            style={{ width: 200 }}
            onSearch={value => console.log(value)}
          />
        </Col>
        <Col xl={{ span: 4 }} md={{ span: 6 }}>
          <Search
            placeholder="根据账号搜索"
            style={{ width: 200 }}
            onSearch={value => console.log(value)}
          />
        </Col>
        <Col xl={{ span: 3 }} md={{ span: 12 }} style={{textAlign: 'right'}}>
          {<Button size="large" type="ghost" onClick={onAdd}>新增员工账号</Button>}
        </Col>
      </Row>
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
