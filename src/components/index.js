import app from '@/main'

const requireComponent = require.context('.', false, /.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = fileName
    .replaceAll('.', '')
    .replaceAll('/', '')
    .replace('vue', '')

  app.component(componentName, componentConfig.default || componentConfig)
})