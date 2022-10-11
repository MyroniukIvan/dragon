import {useFetch} from "../servcies/useHttpHookl";
import Slideshow from './Slide';


const Page = () => {
    const {data, loading, error} = useFetch("https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f");

    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>Error 404</h1>


    return (
        <div className="App">
            <h1>{data?.name}</h1>
            <h2>{data?.description}</h2>
            <h3>{data?.crew_capacity}</h3>
            <Slideshow/>
            <div>
                <a href={'https://en.wikipedia.org/wiki/SpaceX_Dragon'}>{data?.wikipedia}</a>
            </div>

            <div>Cubic meters are : {data?.trunk?.trunk_volume?.cubic_meters}</div>
        </div>)
}

export default Page;