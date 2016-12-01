import {SHOW_MESSAGE_SUCESS} from '../../types'
const jsonp = require('../../../utils/jsonp')

export function getThenShow(value) {
  return dispatch => {
    const url = 'https://gsp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su';
    jsonp(url, {wd: value}, 'cb', (data) => {
        dispatch({
          type: SHOW_MESSAGE_SUCESS,
          lists: data.s
        });
    })
  }
}
