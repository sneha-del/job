
import React from 'react'
import './Services.css';

import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ArticleIcon from '@mui/icons-material/Article';
import TableChartIcon from '@mui/icons-material/TableChart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckIcon from '@mui/icons-material/Check';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Services = () => {
  return (
    <div className='conatainer'>
        <div className='hed'>
           <h3 className='heading'>
            Our Services
           </h3>
           <div className='line'></div>
           <p className='para'>
           “Sucess always comes when preparation meets opportunity.”
           </p>
        </div>

        <div className='row-services'>
            <div className='services'>
                <div>
                    <LockIcon className='icon'/>
                    <h3 className='title'>No Security Risk</h3>
                    <p className='cont'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, itaque nulla! Quibusdam aspernatur ratione ut voluptas similique debitis sed saepe numquam id amet at vero quidem, earum laborum autem incidunt.</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <AccountBalanceWalletIcon className='icon'/>
                    <h3 className='title'>Account Management</h3>
                    <p className='cont'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur similique, error cum quod ut tempora dicta illum ducimus ab porro mollitia neque quia ullam nesciunt reprehenderit! Perferendis minus voluptatem aperiam!</p>
                </div>            
            </div>

            <div  className='services'>
                <div>
                    <CardMembershipIcon className='icon'/>
                    <h3 className='title' >Statuory Compliance</h3>
                    <p className='cont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus nobis excepturi. Ea debitis harum libero consectetur sint at facere inventore et architecto, magni numquam aliquam, repellendus amet consequuntur excepturi.</p>
                </div>
            </div>
            
            <div  className='services'>
                <div>
                    <ArticleIcon className='icon'/>
                    <h3 className='title'>Audit & Filling Of Returns</h3>
                    <p className='cont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quaerat, id incidunt, quia architecto sint sunt neque earum dolor accusamus quam quis. Autem enim dignissimos cum consequuntur laudantium quo aspernatur.</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <TableChartIcon className='icon'/>
                    <h3 className='title'> Data Management</h3>
                    <p className='cont'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto debitis quia quibusdam iusto ducimus sequi earum magni laudantium veniam ullam vel et consectetur, repudiandae a nam. Esse libero eos itaque?
                    </p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <SupportAgentIcon className='icon'/>
                    <h3 className='title'>Awesome Support</h3>
                    <p className='cont'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero facere aliquam maiores architecto ipsam autem optio illo fugit, adipisci illum nemo eligendi voluptas non atque vel doloremque nisi ex!
                    </p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <CheckIcon className='icon'/>
                    <h3 className='title'>Always Available</h3>
                    <p className='cont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur commodi eveniet doloribus delectus accusantium recusandae repudiandae minima labore, dicta tenetur dolore perspiciatis iure aliquam vitae aliquid! Quidem, adipisci sequi?</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <ReceiptLongIcon className='icon'/>
                    <h3 className='title'>Tax Planning</h3>
                    <p className='cont'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolore adipisci repellat fugiat odit? Quam eius, nulla aliquam iste, earum iure ipsum non rerum natus debitis qui, sequi repellendus tempora?</p>
                </div>
            </div>

            <div  className='services'>
                <div>
                    <AccountBalanceIcon className='icon'/>
                    <h3 className='title'>Bank Compliances</h3>
                    <p className='cont'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero sint delectus deleniti neque ducimus! Eaque, nihil quam eos illum ea hic aut doloribus facere, sit aperiam esse magni. Consequuntur, assumenda!</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services