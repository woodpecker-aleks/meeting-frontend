const deviceType = () => {
  return window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop'
}

export default deviceType