<template>
  <div class="text-editor">
    <div class="text-editor__control d-flex ai-center">
      <IconBtn @click="formatText('undo')" class="mr-1">
        <Icon name="back" class="sm" />
      </IconBtn>
      <IconBtn @click="formatText('redo')">
        <Icon name="back" class="sm left" />
      </IconBtn>
      <Divider class="vertical mx-1" />
      <IconBtn @click="formatText('bold')" class="mr-1">
        <Icon name="bold" class="sm" />
      </IconBtn>
      <IconBtn @click="formatText('italic')" class="mr-1">
        <Icon name="italic" class="sm" />
      </IconBtn>
      <IconBtn @click="formatText('underline')">
        <Icon name="underline" class="sm" />
      </IconBtn>
      <Divider class="vertical mx-1" />
      <IconBtn @click="formatText('justifyleft')" class="mr-1">
        <Icon name="align-left" class="sm" />
      </IconBtn>
      <IconBtn @click="formatText('justifycenter')" class="mr-1">
        <Icon name="align-center" class="sm" />
      </IconBtn>
      <IconBtn @click="formatText('justifyright')" class="mr-1">
        <Icon name="align-right" class="sm" />
      </IconBtn>
      <IconBtn @click="formatText('justifyfull')">
        <Icon name="align-justify" class="sm" />
      </IconBtn>
      <Divider class="vertical mx-1" />
      <IconBtn @click="formatText('insertorderedlist')" class="mr-1">
        <Icon name="ol" class="sm" />
      </IconBtn>
      <IconBtn @click="formatText('insertunorderedlist')">
        <Icon name="ul" class="sm" />
      </IconBtn>
      <Divider class="vertical mx-1" />
      <IconBtn @click="formatText('')" class="mr-1">
        <Icon name="link" class="sm" />
      </IconBtn>
      <IconBtn @click="formatText('formatblock','blockquote')">
        <Icon name="quotes" class="sm" />
      </IconBtn>
      <Divider class="vertical mx-1" />
      <IconBtn @click="formatText('justifyleft')">
        <Icon name="dots" class="sm" />
      </IconBtn>
    </div>
    <div
      novalidate
      ref="content"
      contenteditable="true"
      class="text-editor__content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import IconBtn from '@components/IconBtn.vue'
import Icon from '@components/Icon.vue'
import Divider from '@components/Divider.vue'

export default {
  components: {
    IconBtn,
    Icon,
    Divider,
  },
  name: 'TextEditor',
  methods: {
    formatText(command, commandValue) {
      document.execCommand(command, false, commandValue)
      this.$refs.content.focus()
    },
  },
}
</script>

<style src="@components/TextEditor.scss" lang="scss"></style>