import './Loading.css'

const Loading = () => {
  return (
    <div className='h-screen flex'>
      <div className='my-loader'>
        <div className='rubiks-cube'>
          <div className='face front'>
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ffffff' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
          </div>
          <div className='face back'>
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ffffff' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
          </div>
          <div className='face left'>
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#ffffff' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
          </div>
          <div className='face right'>
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ffffff' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
          </div>
          <div className='face top'>
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#ffffff' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
          </div>
          <div className='face bottom'>
            <div style={{ background: '#ffffff' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
            <div style={{ background: '#ffeb3b' }} className='cube' />
            <div style={{ background: '#4caf50' }} className='cube' />
            <div style={{ background: '#2196f3' }} className='cube' />
            <div style={{ background: '#ffffff' }} className='cube' />
            <div style={{ background: '#ff3d00' }} className='cube' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Loading
