/**
 * Created by wxy on 2017/9/16.
 */
import { request, config } from 'utils'

const { api } = config
const { clue } = api

export async function query (params) {
  return request({
    url: clue,
    method: 'get',
    data: params,
  })
}
