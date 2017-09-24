import {
	request,
	config
} from 'utils'

const {
	api
} = config
const {
	GET_INDUSTRY,
} = api

export async function query(params) {
	return request({
		url: GET_INDUSTRY,
		method: 'post',
		data: params,
	})
}

// export async function create(params) {
//   return request({
//     url: UPDATA_CRMACCMANAG,
//     method: 'post',
//     data: params,
//   })
// }

// export async function update(params) {
//   return request({
//     url: UPDATA_CRMACCMANAG,
//     method: 'patch',
//     data: params,
//   })
// }