import {
	parse
} from 'qs'
import modelExtend from 'dva-model-extend'
import {
	query
} from 'services/dashboard'
import {
	pageModel
} from 'models/common'

export default modelExtend(pageModel, {
	namespace: 'crmaccmanag',

	state: {
		list: [{
			title: '杭州再启信息',
			industry: '计算机',
			name: '徐坚',
			mail: 'xujian@izaiqi.com',
			tel: '13456325500',
			date: '2017-09-08',
			indate: '2017-09-08至2020-09-08',
			limit: '100',
			state: '可用'
		}],
		total: null,
		loading: false, // 控制加载状态
		current: null, // 当前分页信息
		currentItem: {}, // 当前操作的用户对象
		modalVisible: false, // 弹出窗的显示状态
		modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
	},
	// subscriptions: {
	// 	setup({
	// 		dispatch,
	// 		history
	// 	}) {
	// 		history.listen((location) => {
	// 			if (location.pathname === '/crmaccmanag') {
	// 				dispatch({
	// 					type: 'query',
	// 					payload: {
	// 						status: 2,
	// 						...location.query,
	// 					}
	// 				})
	// 			}
	// 		})
	// 	},
	// },
	// effects: { * query({
	// 		payload,
	// 	}, {
	// 		call,
	// 		put
	// 	}) {
	// 		const data = yield call(query, payload)
	// 		if (data.success) {
	// 			yield put({
	// 				type: 'querySuccess',
	// 				payload: {
	// 					list: data.data,
	// 					pagination: {
	// 						current: Number(payload.page) || 1,
	// 						pageSize: Number(payload.pageSize) || 10,
	// 						total: data.total,
	// 					},
	// 				},
	// 			})
	// 		} else {
	// 			throw data
	// 		}
	// 	},
	// 	* create() {},
	// 	* 'delete' () {},
	//	* update() {}
	// },
	reducers: {
		// showLoading() {}, // 控制加载状态的 reducer
		showModal(state, {
			payload
		}) {
			return {...state,
				...payload,
				modalVisible: true
			}
		},
		// hideModal() {},
		// querySuccess() {},
		// createSuccess() {},
		// deleteSuccess() {},
		// updateSuccess() {},
	}
})