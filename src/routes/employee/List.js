import React from 'react'
import PropTypes from 'prop-types'
import {
    Table,
    Modal
} from 'antd'
import {
    Link
} from 'dva/router'
import AnimTableBody from '../../components/DataTable/AnimTableBody'
import styles from './List.less'

const confirm = Modal.confirm

const List = ({
    onDeleteItem,
    onEditItem,
    isMotion,
    location,
    ...tableProps
}) => {
    const handleMenuClick = (record, e) => {
        if (e.key === '1') {
            onEditItem(record)
        } else if (e.key === '2') {
            confirm({
                title: 'Are you sure delete this record?',
                onOk() {
                    onDeleteItem(record.id)
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
        title: '手机',
        dataIndex: 'account',
    }, {
        title: '电话',
        dataIndex: 'contactPhone',
    }, {
        title: '部门',
        dataIndex: 'department',
    }, {
        title: '职位',
        dataIndex: 'job',
    }, {
        title: '状态',
        render: (record) => {
            return <a href="#">{record.status === true ? '启用' : '禁用'}</a>
        }
    }, {
        title: '创建时间',
        dataIndex: 'createTime',
    }, {
        title: '负责行业',
        dataIndex: 'industryNames',
    }, {
        title: '操作',
        render: (record) => {
            return <span style={{display:"flex",justifyContent:"space-between"}}>
            <a href="#">{record.status === true?<Icon type="down" style={{ fontSize: 16, color: 'green' }} />:<Icon type="close-circle-o" style={{ fontSize: 16, color: 'green' }} />}</a>
            <a href="#" >查看</a>
        <a href="#" onClick={(e) => {handleClick(record, e,'3')}}>编辑</a>
        </span>
        }
    }]

    const getBodyWrapperProps = {
        page: location.query.page,
        current: tableProps.pagination.current,
    }

    return (
        <div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
    )
}

List.propTypes = {
    onDeleteItem: PropTypes.func,
    onEditItem: PropTypes.func,
    isMotion: PropTypes.bool,
    location: PropTypes.object,
}

export default List