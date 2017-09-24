// import {
// 	parse
// } from 'qs'
import modelExtend from 'dva-model-extend'
import {
	config
} from 'utils'
import {
	query,
  del
} from 'services/industry'
import {
	pageModel
} from './common'
const {
	prefix
} = config

export default modelExtend(pageModel, {
	namespace: 'industry',

	state: {
		list: [],
		total: null,
		loading: false, // 控制加载状态
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
    yield put({
      type: 'update',
      payload: {
        list: data.dataList,
      },
    })
  },
  * del({payload = {}}, {
      call,
      put
    }) {
      const data = yield call(del, payload.id);
      yield put({
        type: 'update',
        payload: {
          list: data.dataList,
        },
      })
		}

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
	reducers: {
		// showLoading() {}, // 控制加载状态的 reducer
		update(state, {payload}) {
			return {...state,
        ...payload
			}
		},
	}
})
