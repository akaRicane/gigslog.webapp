/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'

export const apiEndpoint: string = 'http://127.0.0.1:3333/'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => (title ? title : import.meta.env.VITE_APP_NAME),

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
