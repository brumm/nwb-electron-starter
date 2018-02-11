import glamorous from 'glamorous'

export default glamorous.div({
  height: 38,
  padding: '0 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fafafa',
  WebkitAppRegion: 'drag',
  backgroundImage: `linear-gradient(
    #ededed 0,
    #ededed 1px,
    #e7e7e7 2px,
    #d1d1d1 100%
  )`,
  borderBottom: '1px solid #afafaf',
  fontSize: 13,
})
