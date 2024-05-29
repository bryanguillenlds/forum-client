import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router/router'

const app = createApp(App)

app.use(router)

// Require all Vue components in the './components' directory that have a filename starting with 'App'
// followed by one or more uppercase letters and any number of alphanumeric characters,
// and ending with either '.vue' or '.js' extension
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)

// Loop through all the required component files
requireComponent.keys().forEach(function (fileName) {
  // Require the component file and get its configuration
  let baseComponentConfig = requireComponent(fileName)

  // If the component is a module (ES6 syntax), get the default export
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig

  // Get the component name from the component configuration,
  // or if not defined, derive it from the filename
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '') // Remove the directory path
      .replace(/\.\w+$/, '') // Remove the file extension
  )

  // Register the component globally with the derived name
  app.component(baseComponentName, baseComponentConfig)
})

app.mount('#app')
