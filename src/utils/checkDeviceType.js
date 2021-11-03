const deviceType = () => {
  return window.matchMedia('(max-width: 1024px)').matches ? 'mobile' : 'desktop'
}

export default deviceType