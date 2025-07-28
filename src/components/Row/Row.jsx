import React from 'react'
import './row.css'
import { getWishlist } from "../../API/Movies";
import { useEffect, useState } from "react";
import Card from '../../components/Card/Card'
import Carousel from'../../components/Carousel/Carousel'

const Row = ({ title, data }) => {
    const [wishlist, setWishlist] = useState([]); // getting favourite movies

    useEffect(() => {
        getWishlist().then((data) => setWishlist(data.results));
    }, []);

    const wishlistIds = wishlist?.map((item) => item.id);

    return (
        <section>
            {title && <h2 className="section-title">{title}</h2>}
            <Carousel
                data={data}
                render={(item) => <Card movie={item} favMovies={wishlistIds}/>}
            />
        </section>
    );
};

export default Row