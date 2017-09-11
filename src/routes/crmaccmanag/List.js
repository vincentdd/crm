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
		title: '公司信息',
		dataIndex: 'title',
	}, {
		title: '行业',
		dataIndex: 'industry',
	}, {
		title: '联系人',
		dataIndex: 'name',
	}, {
		title: '联系人邮箱',
		dataIndex: 'mail',
	}, {
		title: '联系人电话',
		dataIndex: 'tel',
	}, {
		title: '创建时间',
		dataIndex: 'date',
	}, {
		title: '有效期',
		dataIndex: 'indate',
	}, {
		title: '员工限制',
		dataIndex: 'limit',
	}, {
		title: '状态',
		dataIndex: 'state',
	}, {
		title: '操作',
		render: (state, record) => {
			return <span>
      			<a href="#">{state == true?<Icon type="down" style={{ fontSize: 16, color: 'green' }} />:<Icon type="close-circle-o" style={{ fontSize: 16, color: 'green' }} />}</a>
      			<a href="#" >查看</a>
			<a href="#" onClick={(e) => {debugger;handleClick(record, e,'3')}}>编辑</a>
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