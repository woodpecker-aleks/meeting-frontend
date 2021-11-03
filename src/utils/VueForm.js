export default class VueForm {
  constructor(formName, fields) {
    this.data = {}
    const methods = {}
    const computed = {}

    for (const fieldName of Object.keys(fields)) {
      this.data[formName][fieldName] = {
        name: `${fieldName}`,
        ...fields[fieldName],
      }
    }

    this.methods = methods
    this.computed = computed
  }
}