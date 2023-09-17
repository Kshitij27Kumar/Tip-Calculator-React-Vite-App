const fs = require('fs')

const requiredPackages = ['prettier', 'eslint']

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const installedPackages = Object.keys(packageJson.dependencies || {}).concat(
  Object.keys(packageJson.devDependencies || {})
)

const missingPackages = requiredPackages.filter(
  (package) => !installedPackages.includes(package)
)

if (missingPackages.length > 0) {
  console.error(
    `Error: The following required packages are missing: ${missingPackages.join(
      ', '
    )}`
  )
  process.exit(1)
} else {
  console.log('All required packages are installed.')
}
