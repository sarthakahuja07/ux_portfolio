import React,{useEffect} from 'react'
import Hero from '../components/HeroComponent';
import SinglePortfolio from '../components/SinglePortfolioComponent';
import { portfolios, works } from '../shared';
import { changeFooter } from '../utils/changeFooter';
import { Link } from 'react-router-dom';
import '../css/homePage.css'
function HomePage({ footerRef }) {
    useEffect(() => {
        changeFooter(footerRef);
        return () => {
            changeFooter(footerRef)
        }
    }, [footerRef])
    return (
        <div className='home-container'>
            <Hero />
            {portfolios.map((portfolio) => {
                return (
                    <Link to={`/case/${portfolio.id}`} key={portfolio.id}>
                        <SinglePortfolio portfolio={portfolio} />
                    </Link>
                )
            })}

            <div className="container ">
                <div className="row hero__portfolio heading mt-5 ">
                    <div className="col offset-1">
                        <div className="d-flex">
                            <p>other work</p>
                            <span className="dash"></span>
                        </div>
                    </div>
                </div>
            </div>

            {
                works.map((work,index) => {
                    return(
                        <SinglePortfolio index={index} work={work} key={work.id} />
                    )
                })
            }
        </div>

    )
}

export default HomePage
