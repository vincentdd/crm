import React from 'react'
import moment from 'moment'
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
			return <a href="#">{record.status === 1 ? '启用' : '禁用'}</a>
		}
	}, {
		title: '操作',
		render: (record) => {
			return <span style={{display:"flex",justifyContent:"space-around"}} >
      			<a href="#">{record.status === 1?<Icon type="down" style={{ fontSize: 16, color: 'green' }} />:<Icon type="close-circle-o" style={{ fontSize: 16, color: 'green' }} />}</a>
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