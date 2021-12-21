function graduate(credential) {
  return fullName => `${fullName}, ${credential}`
}

const medicalSchool = graduate('M.D.')
const lawSchool = graduate('Esq.')

console.log(medicalSchool('Jay Park'))
console.log(lawSchool('Jay Park'))
