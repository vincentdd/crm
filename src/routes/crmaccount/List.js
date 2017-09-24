/**
 * Created by wxy on 2017/9/24.
 */
import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import {
  Table,
  Icon,
  Modal,
} from 'antd'
import {
  DropOption
} from 'components'

const confirm = Modal.confirm

const List = ({
  onEditItem,
  onUpdateStatusItem,
  ...tableProps
}) => {
  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    }
    else if (e.key === '2') {
      const opration = record.status == 1? '禁用':'启用';
      const modifyStatus = record.status == 1 ? 2 : 1;
      confirm({
        title: '确定是否'+opration+'该账号?',
        onOk() {
          onUpdateStatusItem(record.accountId, modifyStatus);
        },
      })
    }
  }

  const columns = [{
    title: '员工编号',
    dataIndex: 'accountNo',
  }, {
    title: '姓名',
    dataIndex: 'name',
  }, {
    title: '账号',
    dataIndex: 'account',
  }, {
    title: '联系电话',
    dataIndex: 'contactPhone',
  }, {
    title: '部门',
    dataIndex: 'department',
  }, {
    title: '职位',
    dataIndex: 'job',
  },
    {
    title: '状态',
    render: (record) => {
      {switch (record.status){
        case 1:
          return <span style={{color: '#69d07a'}}>启用</span>
          break;
        case 2:
          return <span style={{color: '#ff4444'}}>禁用</span>
          break;
      }}
    }
  },
    {
      title: '创建时间',
      render: (record) => {
        return <span>{moment(record.createTime.time).format("YYYY-MM-D")}</span>
      }
      //dataIndex: 'moment(createTime.time).format("YYYY-MM-D")',
    },
    {
      title: '记录ID',
      dataIndex: 'accountId',
    }, {
    title: '操作',
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '修改' }, { key: '2', name: record.status == 1? '禁用':'启用' }]} />
      },
  }]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.accountId}
      />
    </div>
  )
}

List.propTypes = {
  onUpdateStatusItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List
