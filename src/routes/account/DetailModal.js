import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal,
	Button
} from 'antd';
// const {
// 	info
// } = Modal;

function info(item) {
	let childNode = [];
	for (let key in item) {
		const temp = [];
	}
	Modal.info({
		title: '详细信息',
		content: (
			<div>
        		<p>some messages...some messages...</p>
        		<p>some messages...some messages...</p>
      		</div>
		),
		onOk() {},
	});
}
const detailModal = ({
	item = {},
	...modalProps
}) => {}