import React, { useState } from 'react'

import '../styles/tab.css'

const Tab = () => {
  const [toggleTab, setToggleTab] = useState(0)

  const handleClick = (index) => {
    setToggleTab(index)
  }
  return (
    <div className="tab-section">
      <div className="container">
        <h1>LATEST BIRDS</h1>
        <div className="tabs">
          <ul>
            <li
              className={toggleTab === 1 ? 'active-tab' : ''}
              onClick={() => handleClick(1)}
            >
              Tab-1
            </li>
            <li
              className={toggleTab === 2 ? 'active-tab' : ''}
              onClick={() => handleClick(2)}
            >
              Tab-2
            </li>
            <li
              className={toggleTab === 3 ? 'active-tab' : ''}
              onClick={() => handleClick(3)}
            >
              Tab-3
            </li>
          </ul>
        </div>

        <div className="tab-contents">
          <div
            className={
              toggleTab === 1 ? 'tab-content active-content' : 'tab-content'
            }
          >
            <h1>TAB 1 CONTENT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              animi eligendi suscipit quia nisi laborum blanditiis at amet,
              nesciunt modi sit veniam eius voluptatum mollitia aspernatur
              placeat in nobis voluptate.
            </p>
          </div>
          <div
            className={
              toggleTab === 2 ? 'tab-content active-content' : 'tab-content'
            }
          >
            <h1>TAB 2 CONTENT</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              aliquam magnam dolorem ex expedita repudiandae. Explicabo, eveniet
              eum, libero autem aut pariatur fugiat doloremque aperiam
              consequuntur minima voluptates labore nam!
            </p>
          </div>
          <div
            className={
              toggleTab === 3 ? 'tab-content active-content' : 'tab-content'
            }
          >
            <h1>TAB 3 CONTENT</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, sequi maxime. Autem laborum nesciunt animi. Obcaecati
              minima ab corrupti provident nulla, fugiat repellat non voluptatem
              possimus dolor enim accusamus tempora.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab
