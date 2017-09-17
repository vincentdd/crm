import {
	request,
	config
} from 'utils'

const {
	api
} = config
const {
	userLogin
	//USER_LOGIN,
} = api

export async function login(data) {
	return request({
		url: userLogin,
		//url: USER_LOGIN,
		method: 'post',
		data,
	})
}
