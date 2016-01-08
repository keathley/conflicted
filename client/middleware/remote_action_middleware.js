export default channel => store => next => action => {
  if (action.meta && action.meta.remote)
    channel.push('action', action)

  return next(action)
}
