<template>
  <li
    :class="[
      'calendar__item',
      day.index === currentDate.getDate() &&
        currentDate.getMonth() === targetDate.getMonth() &&
        day.month === 1
        ? 'active'
        : '',
      day.month === 0 ? 'prev' : '',
      day.month === 2 ? 'next' : '',
    ]"
    @click="handleClick"
  >
    <div class="calendar__item-backdrop" />
    <span class="calendar__item-num">{{ day.index }}</span>
  </li>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CalendarCell',
  props: {
    day: Object,
  },
  computed: {
    ...mapState({
      targetDate: (state) => state.calendar.targetDate,
      currentDate: (state) => state.calendar.currentDate,
    }),
    ...mapGetters(['targetMonth']),
  },
  methods: {
    ...mapMutations(['nextMonth', 'prevMonth']),
    handleClick() {
      if (this.day.month === 0) this.prevMonth()
      else if (this.day.month === 2) this.nextMonth()
    },
  },
}
</script>

<style src="@components/CalendarCell.scss" lang="scss"></style>