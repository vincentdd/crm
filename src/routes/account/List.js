import React from 'react'
import {
	Table,
	Icon
} from 'antd'

const List = ({
	onEditItem,
	...tableProps
}) => {
	const handleClick = (record, e, text) => {
		if (text === '1') {
			//dosomething;
		} else if (text === '3') {
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
			return <span>{record.status === true ? '启用' : '禁用'}</span>
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
			return <span style={{display:"flex",justifyContent:"space-between"}} >
      			<a href="#">{record.status === true?<Icon type="down" style={{ fontSize: 16, color: 'green' }} />:<Icon type="close-circle-o" style={{ fontSize: 16, color: 'green' }} />}</a>
      			<a href="#" >查看</a>
				<a href="#" onClick={(e) => {handleClick(record, e,'3')}}>编辑</a>
    		</span>
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