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

const data = [{
	"childFlag": 1,
	"children": [{
		"childFlag": 1,
		"children": [{
			"childFlag": 0,
			"children": [],
			"createTime": {
				"date": 12,
				"day": 2,
				"hours": 17,
				"minutes": 31,
				"month": 8,
				"seconds": 37,
				"time": 1505208697000,
				"timezoneOffset": -480,
				"year": 117
			},
			"creatorId": 3,
			"id": 7,
			"level": 3,
			"nodeName": "毛衣",
			"parentId": 5,
			"path": "#1#2#3"
		}, {
			"childFlag": 0,
			"children": [],
			"createTime": {
				"date": 12,
				"day": 2,
				"hours": 18,
				"minutes": 44,
				"month": 8,
				"seconds": 21,
				"time": 1505213061000,
				"timezoneOffset": -480,
				"year": 117
			},
			"creatorId": 3,
			"id": 9,
			"level": 3,
			"nodeName": "方领衬衫\t",
			"parentId": 5,
			"path": "#1#2#3"
		}],
		"createTime": {
			"date": 12,
			"day": 2,
			"hours": 17,
			"minutes": 30,
			"month": 8,
			"seconds": 47,
			"time": 1505208647000,
			"timezoneOffset": -480,
			"year": 117
		},
		"creatorId": 3,
		"id": 5,
		"level": 2,
		"nodeName": "衬衫",
		"parentId": 1,
		"path": "#1#2"
	}, {
		"childFlag": 1,
		"children": [],
		"createTime": {
			"date": 12,
			"day": 2,
			"hours": 17,
			"minutes": 31,
			"month": 8,
			"seconds": 3,
			"time": 1505208663000,
			"timezoneOffset": -480,
			"year": 117
		},
		"creatorId": 3,
		"id": 6,
		"level": 2,
		"nodeName": "裤子",
		"parentId": 1,
		"path": "#1#2"
	}],
	"createTime": {
		"date": 13,
		"day": 3,
		"hours": 16,
		"minutes": 31,
		"month": 8,
		"seconds": 51,
		"time": 1505291511000,
		"timezoneOffset": -480,
		"year": 117
	},
	"creatorId": 3,
	"id": 1,
	"level": 1,
	"nodeName": "服装",
	"parentId": 0,
	"path": "1"
}, {
	"childFlag": 1,
	"children": [{
		"childFlag": 1,
		"children": [{
			"childFlag": 0,
			"children": [],
			"createTime": {
				"date": 13,
				"day": 3,
				"hours": 16,
				"minutes": 53,
				"month": 8,
				"seconds": 0,
				"time": 1505292780000,
				"timezoneOffset": -480,
				"year": 117
			},
			"creatorId": 0,
			"id": 12,
			"level": 3,
			"nodeName": "螺帽1",
			"parentId": 10,
			"path": "#1#2#3"
		}, {
			"childFlag": 0,
			"children": [],
			"createTime": {
				"date": 13,
				"day": 3,
				"hours": 16,
				"minutes": 53,
				"month": 8,
				"seconds": 29,
				"time": 1505292809000,
				"timezoneOffset": -480,
				"year": 117
			},
			"creatorId": 0,
			"id": 13,
			"level": 3,
			"nodeName": "螺帽2",
			"parentId": 10,
			"path": "#1#2#3"
		}],
		"createTime": {
			"date": 13,
			"day": 3,
			"hours": 16,
			"minutes": 51,
			"month": 8,
			"seconds": 29,
			"time": 1505292689000,
			"timezoneOffset": -480,
			"year": 117
		},
		"creatorId": 0,
		"id": 10,
		"level": 2,
		"nodeName": "螺帽",
		"parentId": 2,
		"path": "#1#2"
	}, {
		"childFlag": 1,
		"children": [{
			"childFlag": 0,
			"children": [],
			"createTime": {
				"date": 13,
				"day": 3,
				"hours": 16,
				"minutes": 53,
				"month": 8,
				"seconds": 52,
				"time": 1505292832000,
				"timezoneOffset": -480,
				"year": 117
			},
			"creatorId": 0,
			"id": 14,
			"level": 3,
			"nodeName": "扳手1",
			"parentId": 11,
			"path": "#1#2#3"
		}, {
			"childFlag": 0,
			"children": [],
			"createTime": {
				"date": 13,
				"day": 3,
				"hours": 16,
				"minutes": 54,
				"month": 8,
				"seconds": 14,
				"time": 1505292854000,
				"timezoneOffset": -480,
				"year": 117
			},
			"creatorId": 0,
			"id": 15,
			"level": 3,
			"nodeName": "扳手2",
			"parentId": 11,
			"path": "#1#2#3"
		}, {
			"childFlag": 0,
			"children": [],
			"createTime": {
				"date": 13,
				"day": 3,
				"hours": 18,
				"minutes": 53,
				"month": 8,
				"seconds": 35,
				"time": 1505300015000,
				"timezoneOffset": -480,
				"year": 117
			},
			"creatorId": 0,
			"id": 16,
			"level": 3,
			"nodeName": "扳手3",
			"parentId": 11,
			"path": "#1#2#3"
		}],
		"createTime": {
			"date": 13,
			"day": 3,
			"hours": 16,
			"minutes": 52,
			"month": 8,
			"seconds": 32,
			"time": 1505292752000,
			"timezoneOffset": -480,
			"year": 117
		},
		"creatorId": 0,
		"id": 11,
		"level": 2,
		"nodeName": "扳手",
		"parentId": 2,
		"path": "#1#2"
	}],
	"createTime": {
		"date": 13,
		"day": 3,
		"hours": 16,
		"minutes": 49,
		"month": 8,
		"seconds": 44,
		"time": 1505292584000,
		"timezoneOffset": -480,
		"year": 117
	},
	"creatorId": 0,
	"id": 2,
	"level": 1,
	"nodeName": "五金",
	"parentId": 0,
	"path": "1"
}];


export default modelExtend(pageSizeModel, {
	namespace: 'industry',

	state: {
		list: data,
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
	// 			if (location.pathname === '/account') {
	// 				dispatch({
	// 					type: 'query',
	// 					payload: location.query,

	// 				})
	// 			}
	// 		})
	// 	},
	// },
	// effects: { * query({
	// 		payload = {}
	// 	}, {
	// 		call,
	// 		put
	// 	}) {
	// 		payload = {
	// 			pageNo: 1
	// 		}
	// 		const data = yield call(query, payload)
	// 		console.log(data);
	// 		if (data.success) {
	// 			yield put({
	// 				type: 'querySuccess',
	// 				payload: {
	// 					list: data.dataList,
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
	// },
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