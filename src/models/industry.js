// import {
// 	parse
// } from 'qs'
import modelExtend from 'dva-model-extend'
import {
	config
} from 'utils'
import {
	query
} from 'services/industry'
import {
	pageSizeModel
} from './common'
const {
	prefix
} = config

export default modelExtend(pageSizeModel, {
	namespace: 'industry',

	state: {
		list: [],
		total: null,
		loading: false, // 控制加载状态
		current: null, // 当前分页信息
		currentItem: {}, // 当前操作的用户对象
		modalVisible: false, // 弹出窗的显示状态
		modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
	},
	subscriptions: {
		setup({
			dispatch,
			history
		}) {
			history.listen((location) => {
				if (location.pathname === '/industry') {
					dispatch({
						type: 'query',
						payload: location.query,
					})
				}
			})
		},
	},
	effects: { * query({
			payload = {}
		}, {
			call,
			put
		}) {
			payload = {
				pageNo: 1
			}
			const data = yield call(query, payload)
			console.log(data);
			if (data.success) {
				yield put({
					type: 'querySuccess',
					payload: {
						list: data.dataList,
						// pagination: {
						// 	current: Number(payload.page) || 1,
						// 	pageSize: Number(payload.pageSize) || 10,
						// 	total: data.total,
						// },
					},
				})
			} else {
				throw data
			}
		},

		// 	* create({
		// 		payload
		// 	}, {
		// 		call,
		// 		put
		// 	}) {
		// 		const data = yield call(create, payload)
		// 		if (data.success) {
		// 			yield put({
		// 				type: 'hideModal'
		// 			})
		// 			yield put({
		// 				type: 'query'
		// 			})
		// 		} else {
		// 			throw data
		// 		}
		// 	},
		// 	// 	* 'delete' () {},
		// 	//	* update() {}
	},
	// reducers: {
	// 	// showLoading() {}, // 控制加载状态的 reducer
	// 	showModal(state, {
	// 		payload
	// 	}) {
	// 		return {...state,
	// 			...payload,
	// 			modalVisible: true
	// 		}
	// 		console.log(state.modalVisible);
	// 	},
	// 	hideModal(state) {
	// 		return {...state,
	// 			modalVisible: false
	// 		}
	// 	},
	// 	// querySuccess() {},
	// 	// createSuccess() {},
	// 	// deleteSuccess() {},
	// 	// updateSuccess() {},
	// }
})