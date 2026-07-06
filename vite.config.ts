import { copyFile, readdir } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Connect } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = dirname(fileURLToPath(import.meta.url))
const startersDir = join(rootDir, 'src/challenge-starters')
const challengesDir = join(rootDir, 'src/challenges')

async function copyStarterExercises(dir = startersDir): Promise<number> {
  const entries = await readdir(dir, { withFileTypes: true })
  let copied = 0

  for (const entry of entries) {
    const sourcePath = join(dir, entry.name)

    if (entry.isDirectory()) {
      copied += await copyStarterExercises(sourcePath)
      continue
    }

    if (entry.name !== 'exercise.tsx') continue

    const targetPath = join(challengesDir, relative(startersDir, sourcePath))
    await copyFile(sourcePath, targetPath)
    copied += 1
  }

  return copied
}

function resetExercisesMiddleware(): Connect.NextHandleFunction {
  return async (req, res, next) => {
    if (req.url !== '/__workshop/reset-exercises' || req.method !== 'POST') {
      next()
      return
    }

    try {
      const restored = await copyStarterExercises()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ restored }))
    } catch (error) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        error: error instanceof Error ? error.message : 'Unable to reset exercise files',
      }))
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'workshop-reset-exercises',
      configureServer(server) {
        server.middlewares.use(resetExercisesMiddleware())
      },
      configurePreviewServer(server) {
        server.middlewares.use(resetExercisesMiddleware())
      },
    },
  ],
})
