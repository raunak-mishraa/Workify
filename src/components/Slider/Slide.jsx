import React from 'react'
import InfiniteCarousel from 'react-snap-infinite-carousel';
function Slide() {
    return (
        <div className=''>
            <InfiniteCarousel >
            <div >
            <img src="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?t=st=1710274332~exp=1710277932~hmac=ae2d4e7e048787e8d3e80f0ad90d3b16acf4a997615b662d6d197b7e166ea902&w=1380" alt="" className='w-full h-full object-cover'/>
            </div>
            <div>
            <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?t=st=1710274350~exp=1710277950~hmac=4bc4158e0aaaf423302eac13755933e623c12e836b0d8752e0bc729281d9d581&w=1060" alt="" className='w-full h-full object-cover'/>
            </div>
            <div>
            <img src="https://img.freepik.com/free-photo/group-four-coworkers-office_23-2147656757.jpg?t=st=1710274371~exp=1710277971~hmac=1005eab4f1392cd99d1515c2b47e15591183e8455097b2afcf016a9d37f9f646&w=996" alt="" className='w-full h-full object-cover'/>
            </div>
        </InfiniteCarousel>
        </div>
    )
}

export default Slide