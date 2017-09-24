import {
	request,
	config
} from 'utils'

const {
	api
} = config
const {
	GET_INDUSTRY,
  DEL_INDUSTRY,
  UPDATE_INDUSTRY,
} = api

export async function query(params) {
	return request({
		url: GET_INDUSTRY,
		method: 'post',
		data: params,
	})
}

export async function del(params) {
  return request({
    url: DEL_INDUSTRY,
    method: 'post',
    data: params
  })
}

export async function update(params) {
  return request({
    url: UPDATE_INDUSTRY,
    method: 'post',
    data: params,
  })
}

export async function create(params) {
  return request({
    url: UPDATE_INDUSTRY,
    method: 'post',
    data: params,
  })
}
