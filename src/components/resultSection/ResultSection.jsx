import React, {useEffect, useState} from 'react'
import flower1 from '../../assets/images/flower-1.jpg'
import flower2 from '../../assets/images/flower-2.jpg'
import flower3 from '../../assets/images/fish.jpg'

import './index.css'

const ResultSection = () => {
    const array = [{
        type: 'Flower',
        description: 'These clouds are spread into 20 to 200 km distance which is mostly displayed in a irregular manner. These cloud patter often have reflectivity corers. This cloud organization is separated from each other to bunches of small clouds',
        image1: flower1,
        image2: flower2,
        now_cast_result: [{type: 'Temperature', value: '26.08 Celsius'}, {
            type: 'Wind Speed', value: '5.9 ms-1'
        }, {type: 'Humidity', value: '70.7 g.kg-1'}, {type: 'Pressure', value: '1013 - 1014 hpa'}, {
            type: 'Liquid Water Path', value: '64 gm-2'
        }, {type: 'Integrated Water Vapor', value: '28.3 kgm-2'}]
    }, {
        type: 'Sugar',
        description: 'Sugar is a very small particles of clouds which are self-organized in a horizontal layer with a small vertical extension. These meso-scale organizations are organized through cold pools or gust fronts.',
        image1: flower3,
        image2: flower2,
        now_cast_result: [{type: 'Temperature', value: '26.88 Celsius'}, {
            type: 'Wind Speed', value: '5.9 ms-1'
        }, {type: 'Humidity', value: '71.6 g.kg-1'}, {type: 'Pressure', value: '1010 - 1012 hpa'}, {
            type: 'Liquid Water Path', value: '40 gm-2'
        }, {type: 'Integrated Water Vapor', value: '30.9 kgm-2'}]
    }, {
        type: 'Gravel',
        description: 'Gravel cloud pattern is distributed along 20 – 100 km lines which is a dense cloud form of the sugar pattern. Cloud arcs delineating cells of varying granularity and brighter cloud components. Also, this clouds shows evidence of having a stratiform layers which cause to create cold pools. ',
        image1: flower3,
        image2: flower2,
        now_cast_result: [{type: 'Temperature', value: '26.32 Celsius'}, {
            type: 'Wind Speed', value: '6.6 ms-1'
        }, {type: 'Humidity', value: '71.4 g.kg-1'}, {type: 'Pressure', value: '1011.5 - 1012.5 hpa'}, {
            type: 'Liquid Water Path', value: '40 gm-2'
        }, {type: 'Integrated Water Vapor', value: '32.4 kgm-2'}]
    }, {
        type: 'Fish',
        description: 'The prime pattern deliberated in this learning is the "Fish" pattern. It is prearranged on large scale (100s of km) and becomes specious by its skeletal like setups of clouds detached from \n' +
            'each other or other cloud forms by well-defined sections devoid of clouds. Cloud top \n' +
            'summits of above 2.5 km are not infrequent.',
        image1: flower3,
        image2: flower2,
        now_cast_result: [{type: 'Temperature', value: '26.17 Celsius'}, {
            type: 'Wind Speed', value: '81.5 - 86.5 ms-1'
        }, {type: 'Humidity', value: '1011.8 g.kg-1'}, {type: 'Pressure', value: '1010 - 1012 hpa'}, {
            type: 'Liquid Water Path', value: '116 - 118 gm-2'
        }, {type: 'Integrated Water Vapor', value: '33 - 34 kgm-2'}]
    }]

    const [searchParams, setSearchParams] = useState(array[0]);


    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('type');
        const selectedType = array.filter(value => value.type === foo);
        console.log(selectedType);
        setSearchParams(selectedType[0])
        console.log(searchParams);
    }, [])

    return (

        <div className='result-section'>
            <div className='result-card'>
                <h1 style={{textAlign: 'left', color: 'white'}}>Result Section</h1>
                <p>Let's explore the effect of these cumulus cloud type</p>
            </div>
            <div className="description">
                <div className="des-text">
                    <h2 style={{color: 'black'}}>{searchParams.type} </h2>
                    <p style={{color: 'black'}}>{searchParams.description}</p>
                    <p style={{color: 'white',
                        background:'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)',
                    padding:'10px',borderRadius:'8px'}}>Now cast Results</p>
                    {searchParams.now_cast_result.map((data: { type: string, value: string }) => {
                        return (<p style={{color: 'black'}}>{data.type} - {data.value}</p>)
                    })}
                    <div>

                    </div>
                </div>
                <div className="image">
                    <img alt='img' src={searchParams.image1}/>
                    <img alt='img' src={searchParams.image2}/>
                </div>
            </div>
        </div>
    )
}

export default ResultSection