import React from 'react'
import moment from 'moment'
import {
	Table,
	Icon
} from 'antd'
import {
	DropOption
} from 'components'
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
		title: '员工编号',
		dataIndex: 'accountNo',
	}, {
		title: '姓名',
		dataIndex: 'name',
	}, {
		title: '手机',
		dataIndex: 'mobile',
	}, {
		title: '部门',
		dataIndex: 'department',
	}, {
		title: '职位',
		dataIndex: 'job',
	}, {
		title: '状态',
		render: (record) => {
			return <span>{record.status == true ? '启用' : '禁用'}</span>
		}
	}, {
		title: '生日',
		render: (record) => {
			return <span>{moment(record.birth).format("YYYY-MM-DD")}</span>
		}
	}, {
		title: '负责行业',
		dataIndex: 'industryNames',
	}, {
		title: '操作',
		key: 'operation',
		width: 100,
		render: (record) => {
			let method;
			record.status == true ? method = '禁用' : method = '启用';
			return <DropOption onMenuClick={e => handleClick(record, e)} menuOptions={[{ key: '1', name: method }, { key: '2', name: '查看' },{ key: '3', name: '编辑' }]} />
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
        		rowKey={record => record.accountId}
      		/>
    	</div>
	)
}

export default List