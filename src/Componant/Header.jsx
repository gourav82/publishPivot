import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const [linkActive, setLinkActive] = useState(props.type);

    useEffect(()=>{
        props.onChange(linkActive);
        console.log('monthly');
    },[linkActive,props])
  return (
            <div>
                <ul>
                <Link to='/' className={`navlink ${linkActive==='yearly'?'active':''}`} onClick={()=>setLinkActive('yearly')}>Yearly courses</Link>
                <Link to='/monthly' className={`navlink ${linkActive==='monthly'?'active':''}`} onClick={()=>setLinkActive('monthly')}>Monthly Courses</Link>
                </ul>
            </div>  )
}

export default Header
