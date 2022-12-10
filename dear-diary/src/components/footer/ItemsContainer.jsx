import ContactUs from './ContactUs';
import Item from './Item';
import {TECH_STACK, PAGES} from './Menus';

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
      <Item Links={TECH_STACK} title="TECHNOLOGIES"/>
      <Item Links={PAGES} title="GET STARTED"/>
      <ContactUs />
    </div>
  )
}

export default ItemsContainer
