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
	update,
	updateStatus
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
		detilVisible: false, //详情弹窗显示状态
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
				if (location.pathname === '/account') {
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
			let temp;
			if (payload.page === undefined) {
				temp = {
					pageNo: 1
				}
			} else {
				temp = {
					pageNo: payload.page
				}
			}
			console.log(payload);
			const data = yield call(query, temp)
			console.log(data);
			if (data.success) {
				yield put({
					type: 'querySuccess',
					payload: {
						list: data.dataList,
						pagination: {
							current: Number(data.page.currentPage),
							pageSize: Number(payload.pageSize) || 10,
							total: data.page.totalCount,
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
			payload = {...payload,
				id: 0
			};
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
		* updateStatus({
			payload
		}, {
			select,
			call,
			put
		}) {
			const newUser = {
				accountId: payload.currentItem.id,
				status: Number(!payload.currentItem.status)
			}
			const data = yield call(updateStatus, newUser);
			console.log(data);
			if (data.success) {
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
			const id = yield select(({
				account
			}) => account.currentItem.id)
			const newUser = {...payload,
				accountId: id
			}
			const data = yield call(update, newUser);
			console.log(data);
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