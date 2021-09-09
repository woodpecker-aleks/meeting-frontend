<template>
  <div class="calendar">
    <IconBtn
      class="calendar__arrow prev"
      @click="prevMonth"
    >
      <Icon
        name="arrow"
        class="left"
      />
    </IconBtn>
    <ul
      class="calendar__header"
    >
      <li
        v-for="index of 7"
        :key="index"
      >
        {{ trans(`day.${index}`) }}
      </li>
    </ul>
    <ul class="calendar__list">
      <CalendarCell
        v-for="day in targetMonth"
        :key="day.id"
        :day="day"
      />
    </ul>
    <div
      class="calendar__canvas"
    />
    <IconBtn
      class="calendar__arrow next"
      @click="nextMonth"
    >
      <Icon name="arrow" />
    </IconBtn>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import CalendarCell from '@components/CalendarCell.vue'
import IconBtn from '@components/IconBtn.vue'
import Icon from '@components/Icon.vue'


export default {
  name: 'Calendar',
  components: {
    CalendarCell,
    IconBtn,
    Icon,
  },
  computed: {
    ...mapGetters([
      'targetMonth',
      'trans',
    ]),
  },
  methods: {
    ...mapMutations(['nextMonth', 'prevMonth']),
  },
}
</script>

<style src="@components/Calendar.scss" lang="scss"></style>
