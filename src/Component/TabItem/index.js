import './index.css'

const TabItem = props => {
  const {eachTab, onTabChange, isActive} = props
  const {tabId, displayText} = eachTab
  const onTabClick = () => {
    onTabChange(tabId)
  }
  const activeColor = isActive ? 'active-color' : ''
  const activeTab = isActive ? 'tab-color' : ''
  return (
    <li className={`tab-list ${activeColor}`} onClick={onTabClick}>
      <button type="button" className={`tab ${activeTab}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
