// eslint-disable-next-line import/prefer-default-export
export const login = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        status: 200,
        data: { user: { name: 'Javier' } },
        headers: { Authorization: 'Bearer 24342' },
      })
    }, 2500)
  })
