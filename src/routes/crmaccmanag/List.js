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
		dataIndex: 'createTime',
	}, {
		title: '有效期',
		// render: (record) => {
		// 		debugger;
		// 		return <span>{`${record[1].moment} 至 ${record[2].moment}`}</span>;
		// 	}
		dataIndex: 'validPeriod',
	}, {
		title: '员工限制',
		dataIndex: 'limitAcctNum',
	}, {
		title: '状态',
		render: (record) => {
			return <a href="#">{record.status === true ? '启用' : '禁用'}</a>
		}
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