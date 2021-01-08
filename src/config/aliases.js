const aliases = (prefix = `src`) => ({
  '@ui': `${prefix}/ui`,
  '@config': `${prefix}/config`,
  '@api': `${prefix}/api`,
  '@utils': `${prefix}/utils`,
  '@pages': `${prefix}/pages`,
  '@components': `${prefix}/components`,
  '@hooks': `${prefix}/hooks`,
  '@context': `${prefix}/context`,
})

module.exports = aliases
