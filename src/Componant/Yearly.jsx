import React, { useEffect, useState } from 'react'
import Select from './SelectForm'
import {Link} from 'react-router-dom'
import './Style.scss'
import data from '../data.json'
import Header from './Header'

const Yearly = () => {
    const[grade, setGrade] = useState('');
    const[typet, setTypet] = useState('yearly');
    const[liactive, setLiactive] = useState('CBSE');
    const[detail, setDetail] = useState({});

    const handleOnChange =(elem)=>{
    setGrade(elem);
        }
    const handleHeaderChange= (ele) =>{
        setTypet(ele);
    }    
    useEffect(()=>{
        setDetail(data[1].yearly.find(x=>x.grade===grade));
    },[grade])
    return (
        <div>
            <div className="Yearly">
                <div className="tag">
                    <p>Guaranteed Higher Scores! Only with easyMath</p>
                </div>
                <div className="sub_Yearly">
                    <div className="Yearly_top">
                        <Header onChange={handleHeaderChange} type={typet} />
                        <div className="menu">
                            <Select grade={grade} onChange={handleOnChange}  />
                        
                            <ul>
                                <li className={liactive==='CBSE'?'active':''}  onClick={()=>setLiactive('CBSE')}>CBSE</li>
                                <li className={liactive==='ICSE'?'active':''}  onClick={()=>setLiactive('ICSE')}>ICSE</li>
                                <li className={liactive==='Advance Level'?'active':''}  onClick={()=>setLiactive('Advance Level')}>ADVANCE LEVEL</li>

                            </ul>
                        </div>
                        <div className="Yearly_data">
                            <div>
                                <p>Total Sessions</p>
                                <h1>{grade!=='' && detail!==undefined && detail.boards[liactive].total_sessions}</h1>
                            </div>
                            <div>
                                <p>Online Tests</p>
                                <h1>{grade!=='' && detail!==undefined && detail.boards[liactive].online_tests}</h1>
                            </div>
                            <div>
                                <p>Online Assignments</p>
                                <h1>{grade!=='' && detail!==undefined && detail.boards[liactive].online_assignments}</h1>
                            </div>
                            <div>
                                <p>Online Pre Assignments</p>
                                <h1>{grade!=='' && detail!==undefined && detail.boards[liactive].online_pre_assignments}</h1>
                            </div>
                            <div>
                                <p>Online Post Assignments</p>
                                <h1>{grade!=='' && detail!==undefined && detail.boards[liactive].online_post_assignments}</h1>
                            </div>
                            <div>
                                <p>Career Counselling Sessions</p>
                                <h1>{grade!=='' && detail!==undefined && detail.boards[liactive].career_counselling_sessions}</h1>
                            </div>    
                        </div>
                        <h3 className='Course_heading'>Course Topics Include</h3>
                        <div className="course_topic">
                            { grade!=='' && detail!==undefined &&typeof detail.boards[liactive].syllabus ==='string' &&  <div>
                                <span>Introduction</span>
                                <p> {detail.boards[liactive].syllabus}</p>
                            </div>}
                            { grade!=='' && detail!==undefined && typeof detail.boards[liactive].syllabus === 'object' &&  
                                
                               Object.entries(detail.boards[liactive].syllabus[0]).map(([key,value],i) =>{
                                    return i<3 && <div> <span>{key}</span> <p>{value}</p> </div>
                                })
                                
                            }
                            
                        </div>
                    </div>
                    <div className="Yearly_bottom">
                    <div>
                        <small>Filling out soon</small>
                        <h3>Vacant Seats <span> {grade!=='' && detail!==undefined && detail.boards[liactive].seats}</span></h3>
                        <p>Not a classroom, but 1:1 sessions.</p>
                    </div>
                    <div>
                    <small>50% OFF</small>
                        <h3>Subscripton Cost: <span> ₹ {grade!=='' && detail!==undefined && detail.boards[liactive].price}</span></h3>
                        <p>This cost is inclusive of the tablet cost.</p>
                        <p>Per session cost is ₹ {grade!=='' && detail!==undefined && detail.boards[liactive].per_class_price} </p>
                    </div>
                    <div>
                        <button className='btn'>Book Now</button>
                    </div>
                    </div>
                    <div className="bottom">
                        <h4>You can also avail a 8 inch and 10 inch tablet with your subscription </h4>
                       <small>Guaranteed <u>term & conditions </u> apply"</small>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Yearly
