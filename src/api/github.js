import { API } from '@api'

// eslint-disable-next-line import/prefer-default-export
export const getReactQueryRepoData = () =>
  API.get('repos/tannerlinsley/react-query')
