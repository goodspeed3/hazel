const aliases = {
  darwin: ['mac', 'macos', 'osx'],
  'darwin-arm64': ['darwin-arm64'],
  'dmg-arm64': ['dmg-arm64'],
  'darwin-x64': ['darwin-x64'],
  'dmg-x64': ['dmg-x64'],
  'exe-x64': ['win32-x64'],
  exe: ['win32', 'windows', 'win'],
  deb: ['debian'],
  rpm: ['fedora'],
  AppImage: ['appimage'],
  dmg: ['dmg'],
  nupkg: ['nupkg']
}

module.exports = platform => {
  if (typeof aliases[platform] !== 'undefined') {
    return platform
  }

  for (const guess of Object.keys(aliases)) {
    const list = aliases[guess]

    if (list.includes(platform)) {
      return guess
    }
  }

  return false
}
