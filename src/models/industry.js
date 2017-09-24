// import {
// 	parse
// } from 'qs'
import modelExtend from 'dva-model-extend'
import {
	config
} from 'utils'
import {
  create,
  update,
	query,
  del
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
      type: 'updateState',
      payload: {
        list: data.dataList,
      },
    })
  },
  * del({payload = {}}, {
      call,
      put
    }) {
      const data = yield call(del, payload);
      yield put({
        type: 'updateState',
        payload: {
          list: data.dataList,
        },
      })
		},
    * update({
      payload,
    }, {
      call,
      put
    }) {
      const data = yield call(update, payload);
      console.log('updateSuccess-------------------------'+ data);
      yield put({
        type: 'query',
      });
      yield put({
        type: 'hideModal'
      })
    },
    * create({
      payload,
    }, {
      call,
      put
    }) {
      payload.id = 0;
      const data = yield call(create, payload);
      yield put({
        type: 'query',
      })
      yield put({
        type: 'hideModal'
      })
    },
	},
	reducers: {
		// showLoading() {}, // 控制加载状态的 reducer
		updateState(state, {payload}) {
			return {...state,
        ...payload
			}
		},
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
	}
})
