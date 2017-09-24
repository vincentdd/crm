import React from 'react'
import moment from 'moment'
import {
	DropOption
} from 'components'
import {
	Table,
	Icon
} from 'antd'

const List = ({
	onEditItem,
	toggleStatus,
	...tableProps
}) => {
	const handleClick = (record, e) => {
		if (e.key === '1') {
			toggleStatus(record);
		} else if (e.key === '3') {
			onEditItem(record);
		}
	}

	const columns = [{
		title: '公司信息',
		dataIndex: 'companyName',
	}, {
		title: '行业',
		dataIndex: 'industryName',
	}, {
		title: '联系人',
		dataIndex: 'contactor',
	}, {
		title: '联系人邮箱',
		dataIndex: 'contatorEmail',
	}, {
		title: '联系人电话',
		dataIndex: 'contactPhone',
	}, {
		title: '创建时间',
		render: (record) => {
				return <span>{moment(record.createTime.time).format("YYYY-MM-D")}</span>
			}
			//dataIndex: 'moment(createTime.time).format("YYYY-MM-D")',
	}, {
		title: '有效期',
		render: (record) => {
				return <span>{`${moment(record.validStartTime.time).format("YYYY-MM-D")} 至 ${moment(record.validEndTime.time).format("YYYY-MM-D")}`}</span>
			}
			//dataIndex: 'validPeriod'
	}, {
		title: '员工限制',
		dataIndex: 'limitAcctNum',
	}, {
		title: '状态',
		render: (record) => {
			return <span>{record.status === 1 ? '启用' : '禁用'}</span>
		}
	}, {
		title: '操作',
		key: 'operation',
		width: 100,
		render: (record) => {
			return <DropOption onMenuClick = {e => handleClick(record, e)} menuOptions = {[{key: '1',name: record.status == 1 ? '禁用' : '启用'}, {key: '2',name: '查看'}, {key: '3',name: '编辑'}]}/>
		}
	}]

	return (
		<div>
      		<Table
        		{...tableProps}
        		bordered
        		scroll={{ x: 1200 }}
        		columns={columns}
        		simple
        		rowKey={record => record.id}
      		/>
    	</div>
	)
}

export default List