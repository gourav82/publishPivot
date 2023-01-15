import React, { useEffect, useState } from 'react'
import Select from './SelectForm'
import './Style.scss'
import data from '../data.json'
import Header from './Header'

const Monthly = () => {
    const[grade, setGrade] = useState('');
    const[detail, setDetail] = useState({});
    const[typet, setTypet] = useState('monthly');
    const[selected,setSelected] =useState('');
    const keys = {'5_sessions':'5 Sessions','10_sessions':'10 Sessions','20_sessions':'20 Sessions','45_sessions':'45 Sessions'};

    const handleOnChange =(elem)=>{
        setGrade(elem);
    }
    const handleHeaderChange= (ele) =>{
        setTypet(ele);
    }    
    const handleRadioChange= (e)=>{
        setSelected(e.target.value);
    }
    useEffect(()=>{
        setDetail(data[0].monthly.find(x=>x.grade===grade));
        setSelected('5_sessions');
    },[grade])
    return (
        <div>
            <div className="Monthly">
                <div className="tag">
                    <p>Guaranteed Higher Scores! Only with easyMath</p>
                </div>
                <div className="sub_Monthly">
                    <div className="container">
                        <div className="Monthly_top">
                            <Header onChange={handleHeaderChange} type={typet}/>

                            <div className="select">
                            <Select grade={grade} onChange={handleOnChange}  />
                            </div>
                            <div className="content">
                            <div>
                                {Object.entries(keys).map(([elem,value],i)=>{
                                    return <div className="course">
                                    <div className="radio">
                                        <label class="form-control">
                                            <input type="radio" name="radio_s" className='form-control' onChange={handleRadioChange} id={`radio_s${i}`} value={elem} checked={elem===selected} />
                                        </label>
                                        <div className="month">
                                            <h3>{grade!=='' && detail!==undefined && detail.boards.general[elem].valid} </h3>
                                            <h5>{grade!=='' && detail!==undefined && detail.boards.general[elem].refund}</h5>
                                        </div>
                                    </div>
                                
                                    <div className="pay">
                                        <h2>₹ {grade!=='' && detail!==undefined && detail.boards.general[elem].price-(detail.boards.general[elem].price*detail.boards.general[elem].discount)/100} <s> ₹{grade!=='' && detail!==undefined && detail.boards.general[elem].price}</s></h2>
                                        <small>{grade!=='' && detail!==undefined && detail.boards.general[elem].discount}% OFF</small>
                                    </div>
                                    <div className="session">
                                        <h4>{grade!=='' && detail!==undefined && detail.boards.general[elem].per_class_price} Per Session</h4>
                                        <h5> {grade!=='' && detail!==undefined && value}</h5>
                                    </div>
                                </div>
                                })}
                                </div>
                           
                            </div>
                        </div>

                        <div className="Monthly_bottom">
                            <div>
                                <h3>Monthly classes let you choose </h3>
                                <h3>your own course topics</h3>
                            </div>
                            <div>
                                <h3>Each session lasts </h3>
                                <h3>45 minutes</h3>
                            </div>
                            <div>
                                <button className='btn'>Book Now</button>
                            </div>
                        </div>
                        <div className="monthly_footer">
                            <h4> </h4>
                            <small>Refund same day  <u>term & conditions </u> apply"</small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Monthly
