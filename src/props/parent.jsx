import React  from 'react';
import Child from './child'

export default function Parent() {
    return (
        <div className='parent'>
            <Child nama='Joshua' usia='17'/>
            <Child nama='Dinar' usia='16'/>
            <Child nama='Fardan' usia='17'/>
        </div>
    )
}