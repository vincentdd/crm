import React from 'react'
import PropTypes from 'prop-types'
import {
	connect
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

const Test = ({
	crmaccmanag,
	dispatch,
	loading,
	location
}) => {
	//debugger;
	const {
		list,
		pagination,
		modalVisible,
		modalType,
		currentItem
	} = crmaccmanag
	const {
		query = {}, pathname
	} = location

	const modalProps = {
		item: modalType === 'create' ? {} : currentItem,
		visible: modalVisible,
		maskClosable: false,
		confirmLoading: loading.effects['user/update'],
		title: `${modalType === 'create' ? 'Create User' : 'Update User'}`,
		wrapClassName: 'vertical-center-modal',
		onOk(data) {
			dispatch({
				type: `user/${modalType}`,
				payload: data,
			})
		},
		onCancel() {
			dispatch({
				type: 'user/hideModal',
			})
		},
	}

	const listProps = {
		pagination,
		dataSource: list,
		loading: loading.effects['user/query'],
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
		}
	}

	return (
		<div>
			<List {...listProps} />
			{modalVisible && <Modal {...modalProps} />}
		</div>
	);
}

Test.propTypes = {
	userListProps: PropTypes.object
};

export default connect(({
	crmaccmanag,
	loading
}) => ({
	crmaccmanag,
	loading
}))(Test)