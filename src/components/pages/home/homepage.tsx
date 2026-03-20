import { Hero } from './Hero'
import { NewArrivals } from './NewArrivals'
import { CollectionGrid } from './CollectionGrid'
import { BestSellers } from './BestSellers'
import { BrandStatement } from './BrandStatement'
const Homepage = () => {
    return (
        <>
            <Hero />
            <NewArrivals />
            <CollectionGrid />
            <BestSellers />
            <BrandStatement />
        </>
    )
}

export default Homepage