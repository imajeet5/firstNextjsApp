import React from 'react'

// we need a way to explicitly tell next what Ninja Details Routes and pages we need to create at build time 
// based on our data


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

// Next will run the below function for every ninja detail page that we are going to generate
// and it basis that on the path, so if we return 10 different object with ids in the path properties
// it will run this function 10 times, so we can make 10 different fetch request for items
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return {
        props: {
            ninja: data
        }
    }
}

const Details = ({ ninja }) => {
    console.log(ninja);
    return (
        <div>
            <h1>{ninja.name} </h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>


        </div>
    )
}

export default Details
