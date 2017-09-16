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
  querylist,
} from 'services/account'
import {
	pageModel
} from './common'
const {
	prefix
} = config

export default modelExtend(pageModel, {
	namespace: 'account',

	state: {
		list: [],
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
<<<<<<< HEAD
				if (location.pathname === '/account') {
					dispatch({
						type: 'query',
						payload: location.query,
=======
				console.log(location.query);
				// debugger;
				if (location.pathname === '/account') {
					dispatch({
						type: 'query',
>>>>>>> 6a99edceea82476388ff26b2c8664e6a28e51d89
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
<<<<<<< HEAD
			const temp = {
				pageNo: "1",
				//pageSize: "10"
			}
			if (payload.page === undefined)
				payload = temp;
			else
				payload = {
					pageNo: payload.page
				}
			const data = yield call(query, payload)
=======
			const data = yield call(querylist, payload)
>>>>>>> 6a99edceea82476388ff26b2c8664e6a28e51d89
			if (data.success) {
				yield put({
					type: 'querySuccess',
					payload: {
						list: data.data,
						pagination: {
							current: Number(payload.page) || 1,
							pageSize: Number(payload.pageSize) || 10,
							total: data.total,
						},
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
		// 	* 'delete' () {},
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
