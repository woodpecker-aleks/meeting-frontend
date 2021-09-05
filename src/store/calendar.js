import parseDate from "@utils/parseDate"

const calendar = {
  state() {
    const currentDate = new Date()

    return {
      targetDate: currentDate,
      currentDate,
    }
  },
  mutations: {
    nextMonth(state) {
      const { year, month } = parseDate(state.targetDate)

      state.targetDate = new Date(year, month + 1)
    },
    prevMonth(state) {
      const { year, month } = parseDate(state.targetDate)

      state.targetDate = new Date(year, month - 1)
    },
  },
  getters: {
    targetMonth(state) {
      const monthArray = []
      const { year, month } = parseDate(state.targetDate)

      const daysCountInCurrentMonth = 32 - new Date(year, month, 32).getDate()

      let dayOfFirstDateInMonth = new Date(`${year}-${month + 1}-01`).getDay()

      dayOfFirstDateInMonth =
        dayOfFirstDateInMonth === 0 ? 7 : dayOfFirstDateInMonth

      if (dayOfFirstDateInMonth !== 1) {
        const daysCountInPrevMonth =
          32 - new Date(year, month - 1, 32).getDate()

        for (let i = 1; i < 7 - (7 - dayOfFirstDateInMonth); i++) {
          monthArray.push({
            index: daysCountInPrevMonth - (dayOfFirstDateInMonth - 1) + i,
            month: 0,
            id: Date.now() + Math.random(),
          })
        }
      }

      for (let i = 1; i < daysCountInCurrentMonth + 1; i++) {
        monthArray.push({
          index: i,
          month: 1,
          id: Date.now() + Math.random(),
        })
      }

      let dayOfLastDateInMonth = new Date(
        year,
        month,
        daysCountInCurrentMonth,
      ).getDay()

      dayOfLastDateInMonth =
        dayOfLastDateInMonth === 0 ? 7 : dayOfLastDateInMonth

      if (dayOfLastDateInMonth !== 0) {
        for (let i = 1; 42 - monthArray.length; i++) {
          monthArray.push({
            index: i,
            month: 2,
            id: Date.now() + Math.random(),
          })
        }
      }

      return monthArray
    },
  },
}

export default calendar
