import modelExtend from 'dva-model-extend'
import {
	config
} from 'utils'
import {
	create,
	remove,
	update
} from 'services/employee'
import * as employeeService from 'services/employees'
import {
	pageModel
} from './common'

const {
	query
} = employeeService
const {
	prefix
} = config