export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    /*如果action是一个函数，则先执行action，否则通过next进入到下一个action对应的reducer*/
    typeof action === 'function' ?
      action(dispatch, getState) : //这里action(dispatch, getState)指的是getThenShow返回函数的执行
      next(action);
}}