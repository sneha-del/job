import React from 'react';
import CountUp from 'react-countup';

function Counter2  ()  {
return(
    <>
    <h1 className='text-center my-4 py-4'>Why You Should Join Us?</h1>
    <div className="row3">
        <div className="row-st">
          
          <div className="states">
            <div className="states1">
            
            <CountUp
              className='scrollNum '
              start={0}
              end={8}
              duration={5}
              separator=','
              decimal=','
              suffix='+'
              delay={2}
            />
            <p className="para">States</p>
            </div>
          </div>
          <div className="states">
            <div className="states1">
            
            <CountUp
              className='scrollNum '
              start={0}
              end={70}
              duration={5}
              separator=','
              decimal=','
              suffix='+'
              delay={2}
              />
            <p className="para">Branches</p>
            </div>
          </div>
          <div className="states">
            <div className="states1">
            
            <CountUp
              className='scrollNum '
              start={0}
              end={300}
              duration={5}
              separator=','
              decimal=','
              suffix='+'
              delay={2}
            />
            <p className="para">Clients</p>
            </div>
          </div>
          <div className="states">
            <div className="states1">
           
            <CountUp
              className='scrollNum '
              start={0}
              end={40}
              duration={5}
              separator=','
              decimal=','
              suffix='+'
              delay={2}
            />
            <p className="para">Members</p>
            </div>
          </div>
          <div className="states">
            <div className="states1">
           
            <CountUp
              className='scrollNum '
              start={0}
              end={80}
              duration={5}
              separator=','
              decimal=','
              suffix='+'
              delay={2}
            />
            <p className="para">Teams</p>
            </div>
          </div>
          

        </div>

      </div>
    </>
)}
export default Counter2;