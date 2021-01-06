export const isProduction = () => process.env.NODE_ENV === 'production'
export const isServiceWorkerEnabled = () =>
  process.env.REACT_APP_SERVICE_WORKER === 'register'
