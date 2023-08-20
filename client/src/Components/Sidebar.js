import React from 'react'

const Sidebar = () => {
  return (
    <>
    
        <div className="sidebar">
            <h3>Metro Lines</h3>
            <ul className='sidebar-list'>
                <li className='yellow'><img src="train-icon.png" alt="" />Yellow</li>
                <li className='pink'><img src="train-icon.png" alt=""  />Pink</li>
                <li className='red'><img src="train-icon.png" alt=""  />Red</li>
                <li className='magenta'><img src="train-icon.png" alt=""  />Magenta</li>
                <li className='violet'><img src="train-icon.png" alt=""  />Violet</li>
                <li className='blue'><img src="train-icon.png" alt=""  />Blue</li>
                <li className='orange'><img src="train-icon.png" alt=""  />Orange</li>
                <li className='green'><img src="train-icon.png" alt=""  />Green</li>
                <li className='grey'><img src="train-icon.png" alt=""  />Grey</li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar