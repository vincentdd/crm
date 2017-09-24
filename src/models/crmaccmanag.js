import {
	parse
} from 'qs'
import modelExtend from 'dva-model-extend'
import {
	config
} from 'utils'
import {
	create,
	query,
	update
} from 'services/crmaccmanag'
import {
	pageSizeModel
} from './common'
const {
	prefix
} = config

export default modelExtend(pageSizeModel, {
	namespace: 'crmaccmanag',

	state: {
		total: null,
		loading: false, // 控制加载状态
		current: null, // 当前分页信息
		currentItem: {}, // 当前操作的用户对象
		modalVisible: false, // 弹出窗的显示状态
		modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
		isMotion: window.localStorage.getItem(`${prefix}userIsMotion`) === 'true',
	},
	subscriptions: {
		setup({
			dispatch,
			history
		}) {
			history.listen((location) => {
				if (location.pathname === '/crmaccmanag') {
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
			// let temp = {};
			const temp = {
				pageNo: payload.page || 1
			};
			// if (payload.page === undefined) {
			// 	temp = {
			// 		pageNo: 1
			// 	}
			// } else {
			// 	temp = {
			// 		pageNo: payload.page
			// 	}
			// }
			const data = yield call(query, temp)
				// console.log(data);
				// debugger;
			if (data.success) {
				yield put({
					type: 'querySuccess',
					payload: {
						list: data.crmList,
						page: {
							...data.page
						},
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

		* create({
			payload
		}, {
			call,
			put
		}) {
			const data = yield call(create, payload)
			console.log(`result:${data}`);
			debugger;
			if (data.success) {
				yield put({
					type: 'hideModal'
				})
				yield put({
					type: 'query'
				})
			} else {
				throw data
			}
		},

		* update({
			payload
		}, {
			select,
			call,
			put
		}) {
			const customerId = yield select(({
				crmaccmanag
			}) => crmaccmanag.currentItem.customerId)
			const newCustomer = {...payload,
				customerId
			}
			console.log(customerId);
			const data = yield call(update, newCustomer)
			if (data.success) {
				yield put({
					type: 'hideModal'
				})
				yield put({
					type: 'query'
				})
			} else {
				throw data
			}
		},
		//	* update() {}
	},
	reducers: {
		// showLoading() {}, // 控制加载状态的 reducer
		showModal(state, {
			payload
		}) {
			return {...state,
				...payload,
				modalVisible: true
			}
			console.log(state.modalVisible);
		},
		hideModal(state) {
			return {...state,
				modalVisible: false
			}
		},
		// querySuccess() {},
		// createSuccess() {},
		// deleteSuccess() {},
		// updateSuccess() {},
	}
})