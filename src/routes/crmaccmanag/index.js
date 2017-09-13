import React from 'react'
import PropTypes from 'prop-types'
import {
	connect,
} from 'dva'
import {
	Tabs
} from 'antd'
import {
	routerRedux
} from 'dva/router'
import 'antd/dist/antd.css';
import List from './List';
import Modal from './Modal'
import Filter from './Filter'

const Account = ({
	crmaccmanag,
	dispatch,
	loading,
	location,
}) => {
	const {
		list,
		pagination,
		modalVisible,
		modalType,
		currentItem,
		isMotion,
		selectedRowKeys
	} = crmaccmanag
	const {
		query = {}, pathname
	} = location

	const modalProps = {
		item: modalType === 'create' ? {} : currentItem,
		visible: modalVisible,
		maskClosable: false,
		confirmLoading: loading.effects['crmaccmanag/update'],
		title: `${modalType === 'create' ? 'Create Account' : 'Update Account'}`,
		wrapClassName: 'vertical-center-modal',
		onOk(data) {
			debugger;
			dispatch({
				type: `crmaccmanag/${modalType}`,
				payload: data,
			})
		},
		onCancel() {
			dispatch({
				type: 'crmaccmanag/hideModal',
			})
		},
	}

	const listProps = {
		pagination,
		dataSource: list,
		loading: loading.effects['crmaccmanagcrmaccmanag/query'],
		onChange(page) {
			dispatch(routerRedux.push({
				pathname,
				query: {
					...query,
					page: page.current,
					pageSize: page.pageSize,
				},
			}))
		},
		onEditItem(item) {
			dispatch({
				type: 'crmaccmanag/showModal',
				payload: {
					modalType: 'update',
					currentItem: item,
				},
			})
		},
		onAdd() {
			dispatch({
				type: 'crmaccmanag/showModal',
				payload: {
					modalType: 'create',
				},
			})
		}
	}

	const filterProps = {
		isMotion,
		filter: {
			...location.query,
		},
		onSearch(fieldsValue) {
			fieldsValue.keyword.length ? dispatch(routerRedux.push({
				pathname: '/crmaccmanag',
				query: {
					field: fieldsValue.field,
					keyword: fieldsValue.keyword,
				},
			})) : dispatch(routerRedux.push({
				pathname: '/crmaccmanag',
			}))
		},
		onAdd() {
			dispatch({
				type: 'crmaccmanag/showModal',
				payload: {
					modalType: 'create',
				},
			})
		},
	}

	return (
		<div className="content-inner">
      		<Filter {...filterProps} />
			<List {...listProps} />
			{modalVisible && <Modal {...modalProps} />}
		</div>
	);
}

Account.propTypes = {
	userListProps: PropTypes.object
};

export default connect(({
	crmaccmanag,
	loading
}) => ({
	crmaccmanag,
	loading
}))(Account)