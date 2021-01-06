// eslint-disable-next-line import/prefer-default-export
export const getReactQueryRepoData = () =>
  fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>
    res.json(),
  )
