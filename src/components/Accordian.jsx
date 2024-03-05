import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import '../App.css'

const Accordian = ({props}) => {
  return (
    <div className='container py-5'>
      <Accordion  defaultActiveKey="0">
        {
        props && props.map((prop)=>(
            <Accordion.Item className='accname' eventKey={prop.id}>
              <Accordion.Header className='accname'>{prop.title}</Accordion.Header>
              <Accordion.Body>{prop.desc}</Accordion.Body>
            </Accordion.Item>
          ))
        }
        
      </Accordion>
    </div>
  )
}

export default Accordian