import React, { useEffect, useState } from 'react';
import Mainside from './oldside';
import Dashboard2 from './dashboard2';

 



const Dashboardmain = () => {


    return (


        <div>

   <section class="section-dashbord-old">
    <div className='old-main'>
        < Dashboard2/>
    </div>

    <div className='old-side'>
    < Mainside/>
</div>
    </section>






        </div>
    )

}

export default Dashboardmain