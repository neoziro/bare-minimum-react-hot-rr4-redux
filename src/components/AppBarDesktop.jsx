import React from 'react';
import IncrementContainer from './IncrementContainer';

export let AppBarDesktop = ({newsData}) => {
        return <div >
                   <div>data which incrementer and nested components havent subscribed for:</div>
                   <div>newsData: {newsData.toString()}</div>
                   <IncrementContainer />
                   <p>test</p>
               </div>;
}

export default AppBarDesktop;


