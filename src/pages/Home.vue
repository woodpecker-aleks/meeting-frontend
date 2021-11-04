<template>
  <Page class="home">
    <Container class="home__container md">
      <Section>
        <Text type="h3">Dynamic string examples</Text>
        <Divider />
        <DynamicString active>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </DynamicString>
      </Section>
      <Section>
        <Text type="h3">Image examples</Text>
        <Divider />
        <div class="grid cols-12 cols-md-4">
          <div class="list y">
            <Text type="h6">Default</Text>
            <Image
              class="format_16-9"
              src="https://7themes.su/php/imres/resize.php?width=1440&height=900&cropratio=8:5&image=/_ph/55/289730829.jpg"
              alt="Some image"
            />
          </div>
          <div class="list y">
            <Text type="h6">Failed</Text>
            <Image
              class="format_16-9"
              src="https://7themes.su/php/imres/resize.php?width=1440&height=900&cropratio=8:5&image=/_ph/55/28970829.jpg"
              alt="Some image"
            />
          </div>
        </div>
      </Section>
      <Section class="home__input-section">
        <Text type="h3">Input examples</Text>
        <Divider />
        <div class="grid cols-12 cols-sm-6 cols-md-3">
          <div class="list y">
            <Text type="h6">Default</Text>
            <Input
              class="clr-primary-reverse"
              placeholder="User Name"
              name="defaultInput"
              @input="e => defaultInput = e.target.value"
              :value="defaultInput"
            />
          </div>
          <div class="list y">
            <Text type="h6">Primary</Text>
            <Input
              class="primary"
              placeholder="User Name"
              name="primaryInput"
              @input="e => primaryInput = e.target.value"
              :value="primaryInput"
            />
          </div>
          <div class="list y">
            <Text type="h6">Disabled</Text>
            <Input
              name="disabled"
              disabled
              placeholder="User Name"
            />
          </div>
          <div>
          </div>
          <div class="list y">
            <Text type="h6">Password</Text>
            <PasswordInput
              name="passwordInput"
              @input="e => passwordInput = e.target.value"
              :value="passwordInput"
              placeholder="Password"
            />
          </div>
          <div class="list y">
            <Text type="h6">Search</Text>
            <SearchInput
              class="primary"
              name="searchInput"
              @input="e => searchInput = e.target.value"
              :value="searchInput"
              placeholder="Search"
            />
          </div>
          <div class="list y">
            <Text type="h6">Required</Text>
            <Input
              required
              name="requiredInput"
              @input="e => requiredInput = e.target.value"
              :value="requiredInput"
              placeholder="Email"
            />
          </div>
          <div>
          </div>
          <div class="list y">
            <Text type="h6">With Data</Text>
            <Input
              name="withDataInput"
              @input="e => withDataInput = e.target.value"
              :value="withDataInput"
              placeholder="Email"
            />
          </div>
          <div class="list y">
            <Text type="h6">With Error</Text>
            <Input
              required
              :error="true"
              name="withErrorInput"
              @input="e => withErrorInput = e.target.value"
              :value="withErrorInput"
              placeholder="Email"
            />
          </div>
        </div>
      </Section>
      <Section>
        <Text type="h3">Button examples</Text>
        <Divider />
        <div class="grid cols-6 cols-md-2">
          <div class="list y clr-primary-reverse">
            <Text type="h6">Default</Text>
            <Button>
              Click
            </Button>
          </div>
          <div class="list y">
            <Text type="h6">Disabled</Text>
            <Button disabled>
              Disabled
            </Button>
          </div>
          <div class="list y">
            <Text type="h6">With Icon</Text>
            <Button class="primary">
              Cart
              <template #start-icon>
                <Icon name="cart" class="sm" />
              </template>
            </Button>
          </div>
          <div class="list y">
            <Text type="h6">Filled</Text>
            <Button class="filled clr-primary">
              Login
              <template #start-icon>
                <Icon name="lock" class="sm" />
              </template>
            </Button>
          </div>
          <div class="list y">
            <Text type="h6">Disabled</Text>
            <Button class="filled clr-primary" disabled>
              Login
              <template #start-icon>
                <Icon name="lock" class="sm" />
              </template>
            </Button>
          </div>
        </div>
      </Section>
      <Section>
        <Text type="h3">Switch examples</Text>
        <Divider />
        <div class="grid cols-12 cols-md-6">
          <div class="clr-primary list ai-center">
            <Switch
              @change="switchVal = !switchVal"
              :value="switchVal"
              id="switch-def"
            />
            <Label for="switch-def">Default</Label>
          </div>
          <div class="clr-primary list ai-center">
            <Switch
              @change="switchVal = !switchVal"
              :value="switchVal"
              disabled
              id="switch-dis"
            />
            <Label for="switch-dis">Default</Label>
          </div>
        </div>
      </Section>
      <Section>
        <Text type="h3">Checkbox examples</Text>
        <Divider />
        <div class="grid cols-6">
          <div class="list ai-center">
            <Checkbox
              id="checkbox"
              @change="switchVal = !switchVal"
              :value="switchVal"
            />
            <Label for="checkbox">Confirm privacy</Label>
          </div>
          <div class="list ai-center">
            <Checkbox
              disabled
              id="dis"
              @change="switchVal = !switchVal"
              :value="switchVal"
            />
            <Label for="dis">Confirm privacy</Label>
          </div>
          <div class="list ai-center">
            <Radio
              @change="gender = 'male'"
              id="radio-male"
              :value="gender"
              targetValue="male"
            />
            <Label for="radio-male">Male</Label>
          </div>
          <div class="list ai-center">
            <Radio
              @change="gender = 'undef'"
              id="radio-undef"
              :value="gender"
              targetValue="undef"
              disabled
            />
            <Label for="radio-undef">Undefined</Label>
          </div>
          <div class="list ai-center">
            <Radio
              @change="gender = 'female'"
              id="radio-female"
              :value="gender"
              targetValue="female"
            />
            <Label for="radio-female">Female</Label>
          </div>
        </div>
      </Section>
      <Section>
        <Text type="h3">Slider examples</Text>
        <Divider />
          <div class="grid cols-6">
            <div>
              <Slider @change="rangeValue = $event.target.value" :value="rangeValue" class="clr-primary" />
            </div>
            <div>
              <Slider @change="rangeValue = $event.target.value" showSteps :step="20" :value="rangeValue" class="clr-primary" />
            </div>
            <div>
              <Slider disabled @change="rangeValue = $event.target.value" :value="rangeValue" class="clr-primary" />
            </div>
          </div>
      </Section>
      <Section>
        <Text type="h3">Loader examples</Text>
        <Divider />
        <CircleLoader class="clr-primary-reverse" />
        <LinearLoader class="clr-primary-reverse" />
      </Section>
    </Container>
  </Page>
</template>

<script>
import Page from '@layouts/Page.vue'
import { mapGetters } from 'vuex'
import Label from '@/components/Label.vue'

export default {
  name: 'Home',
  components: {
    Page,
    Label,
  },
  data() {
    return {
      rangeValue: 20,
      activeString: false,
      gender: 'male',
      switchVal: false,
      defaultInput: '',
      primaryInput: '',
      passwordInput: '',
      searchInput: '',
      requiredInput: '',
      withDataInput: 'Some data',
      withErrorInput: '',
    }
  },
  computed: {
    ...mapGetters(['trans']),
  },
  methods: {
    handleInput(e) {
      console.log(e)
    },
    handleChangeRange(e) {
      this.range = e.target.value
    },
  },
}
</script>

<style src="@pages/Home.scss" lang="scss"></style>